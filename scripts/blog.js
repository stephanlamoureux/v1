import Pagination from 'tui-pagination'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const api_url = 'https://dev.to/api/articles?username=stephanlamoureux'

async function getArticle() {
	try {
		const response = await fetch(api_url)
		const data = await response.json()

		const itemsPerPage = 6 // Number of articles per page
		const totalItems = data.length
		const totalPages = Math.ceil(totalItems / itemsPerPage)

		function displayArticles(page) {
			const startIndex = (page - 1) * itemsPerPage
			const endIndex = startIndex + itemsPerPage
			const paginatedItems = data.slice(startIndex, endIndex)

			const blogContainer = document.querySelector('.blog-container')
			blogContainer.innerHTML = '' // Clear existing items

			paginatedItems.forEach(item => {
				const card = document.createElement('div') // Card container
				card.className = 'dev-article'

				const articleLink = document.createElement('a') // Link to dev.to
				articleLink.className = 'article-link'
				articleLink.target = '_blank'
				articleLink.href = item.url

				const articleTitle = document.createElement('h3') // Article title
				articleTitle.className = 'article-title'
				articleTitle.textContent = item.title

				const articleInfo = document.createElement('div') // Info container
				articleInfo.className = 'article-info'

				const tagsInArticle = document.createElement('p') // Article Tags
				tagsInArticle.className = 'tags'
				tagsInArticle.textContent = item.tag_list.map(tag => `#${tag}`).join(', ')

				const articleDescription = document.createElement('p') // Description
				articleDescription.className = 'description'
				articleDescription.textContent = item.description

				const articleMinutes = document.createElement('p') // Reading time
				articleMinutes.className = 'minutes'
				articleMinutes.textContent = item.reading_time_minutes + ' minute read'

				const articleDate = document.createElement('p') // Date posted
				articleDate.className = 'date'
				articleDate.textContent = item.readable_publish_date

				// Append elements to their respective containers
				card.appendChild(articleLink)
				articleLink.appendChild(articleTitle)
				articleLink.appendChild(articleInfo)
				articleInfo.appendChild(tagsInArticle)
				articleInfo.appendChild(articleDescription)
				articleInfo.appendChild(articleMinutes)
				articleInfo.appendChild(articleDate)

				// Append the card to the blog container
				blogContainer.appendChild(card)
			})
		}

		// Initial display
		displayArticles(1)

		// ToastUI Pagination
		const pagination = new Pagination(document.getElementById('tui-pagination-container'), {
			totalItems,
			itemsPerPage,
			visiblePages: 5,
			page: 1,
			centerAlign: true,
			firstItemClassName: 'tui-first-child',
			lastItemClassName: 'tui-last-child',
			template: {
				page: '<a href="#" class="tui-page-btn">{{page}}</a>',
				currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
				moveButton: (typeObj, disabled) => {
					const isDisabled = disabled ? ' disabled' : ''
					const type = typeObj.type // Access the 'type' property of the object
					console.log(type) // This should now log 'first', 'prev', 'next', 'last'
					return `<a href="#" class="tui-page-btn tui-${type}${isDisabled}"><span class="tui-ico-${type}"></span></a>`
				},
			},
		})

		pagination.on('afterMove', event => {
			const currentPage = event.page
			displayArticles(currentPage)
			document.querySelector('.divider1').scrollIntoView()
		})
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
