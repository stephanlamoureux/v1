import Pagination from 'tui-pagination'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const api_url = 'https://dev.to/api/articles?username=stephanlamoureux'

async function getArticle() {
	try {
		const response = await fetch(api_url)
		const data = await response.json()

		// Data for the first article
		const link = data[0].url
		const title = data[0].title
		const tag = data[0].tag_list
		const date = data[0].readable_publish_date
		const readingTime = data[0].reading_time_minutes
		const description = data[0].description

		document.querySelector('.article-link').href = link
		document.querySelector('.article-title').textContent = title
		document.querySelector('.tags').textContent = tag.map(i => '#' + i).join(', ')
		document.querySelector('.date').textContent = date
		document.querySelector('.minutes').textContent = readingTime + ' minute read'
		document.querySelector('.description').textContent = description

		//For multiple articles that you want to display
		function displayMultipleArticles() {
			for (let i = 1; i < data.length; i++) {
				const card = document.createElement('div') //card container
				card.className = 'dev-article'

				const articleLink = document.createElement('a') //link to dev.to
				articleLink.className = 'article-link' + i
				articleLink.target = '_blank'
				articleLink.href = data[i].url

				const articleTitle = document.createElement('h1') //article title
				articleTitle.className = 'article-title'
				articleTitle.textContent = data[i].title

				const articleInfo = document.createElement('div') //info container
				articleInfo.className = 'article-info'

				const tagsInArticle = document.createElement('p') //tags
				tagsInArticle.className = 'tags'
				const hashTags = data[i].tag_list
				tagsInArticle.textContent = hashTags.map(i => '#' + i).join(', ')

				const articleDescription = document.createElement('p')
				articleDescription.className = 'description'
				articleDescription.textContent = data[i].description

				const articleMinutes = document.createElement('p') //minutes
				articleMinutes.className = 'minutes'
				articleMinutes.textContent = data[i].reading_time_minutes + ' minute read'

				const articleDate = document.createElement('p') //date posted
				articleDate.className = 'date'
				articleDate.textContent = data[i].readable_publish_date

				// make the card a link to the dev.to article
				card.appendChild(articleLink)
				// append the title and the article info container to the card
				articleLink.appendChild(articleTitle)
				articleLink.appendChild(articleInfo)
				// append tags, description, minutes, and date to info container
				articleInfo.appendChild(tagsInArticle)
				articleInfo.appendChild(articleDescription)
				articleInfo.appendChild(articleMinutes)
				articleInfo.appendChild(articleDate)
				// append card container to main container
				document.querySelector('.blog-container').appendChild(card)
			}

			// ToastUI Pagination
			const pagination = new Pagination(document.getElementById('tui-pagination-container'), {})
		}

		displayMultipleArticles()
	} catch (error) {
		// hide empty card
		const blogContainer = document.querySelector('.blog-container')
		blogContainer.classList.add('blog-hidden')

		Toastify({
			text: 'Error: Failed to Connect to The Dev.to API',
			duration: -1,
			destination: 'https://dev.to/stephanlamoureux',
			newWindow: true,
			close: true,
			gravity: 'top', // `top` or `bottom`
			position: 'right', // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			offset: {
				x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
				y: 100, // vertical axis - can be a number or a string indicating unity. eg: '2em'
			},
			style: {
				background: 'var(--dracula-red)',
			},
			onClick: function () {}, // Callback after click
		}).showToast()

		console.log(error)
	}
}
getArticle()
