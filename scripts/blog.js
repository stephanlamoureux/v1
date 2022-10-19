import Pagination from 'tui-pagination'

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

    document.querySelector('.article-link').href = link
    document.querySelector('.article-title').textContent = title
    document.querySelector('.tags').textContent = tag.map(i => '#' + i).join(', ')
    document.querySelector('.minutes').textContent = readingTime + ' minute read'
    document.querySelector('.date').textContent = date

    //For multiple articles that you want to display
    function displayMultipleArticles() {
      for (let i = 1; i < data.length; i++) {
        let card = document.createElement('div') //card container
        card.className = 'dev-article'

        let articleLink = document.createElement('a') //link to dev.to
        articleLink.className = 'article-link' + i
        articleLink.target = '_blank'
        articleLink.href = data[i].url

        let articleTitle = document.createElement('h1') //article title
        articleTitle.className = 'article-title'
        articleTitle.textContent = data[i].title

        let articleInfo = document.createElement('div') //info container
        articleInfo.className = 'article-info'

        let tagsInArticle = document.createElement('p') //tags
        tagsInArticle.className = 'tags'
        let hashTags = data[i].tag_list
        tagsInArticle.textContent = hashTags.map(i => '#' + i).join(', ')

        let articleMinutes = document.createElement('p') //minutes
        articleMinutes.className = 'minutes'
        articleMinutes.textContent = data[i].reading_time_minutes + ' minute read'

        let articleDate = document.createElement('p') //date posted
        articleDate.className = 'date'
        articleDate.textContent = data[i].readable_publish_date

        // make the card a link to the dev.to article
        card.appendChild(articleLink)
        // append the title and the article info to the card
        articleLink.appendChild(articleTitle)
        articleLink.appendChild(articleInfo)
        // append tags, minutes, and date to info container
        articleInfo.appendChild(tagsInArticle)
        articleInfo.appendChild(articleMinutes)
        articleInfo.appendChild(articleDate)
        // append card container to main container
        document.querySelector('.blog-container').appendChild(card)
      }
    }
    displayMultipleArticles()
  } catch (error) {
    // Creates a container for the error message
    const errorContainer = document.createElement('div')
    errorContainer.className = 'error-container'

    // Creates error message text
    const errorMessage = document.createElement('p')
    errorMessage.className = 'error'
    errorMessage.textContent = 'API ERROR!'

    // Remove the padding from dev-article and hide the other card elements
    document.querySelector('.dev-article').style.padding = '0'
    document.querySelector('.blog-container a').classList.add('blog-hidden')

    // Appends the error message to the error container and the error container to dev-article
    errorContainer.appendChild(errorMessage)
    document.querySelector('.dev-article').appendChild(errorContainer)

    console.log(error)
  }
}
getArticle()

// ToastUI Pagination

const pagination = new Pagination(document.getElementById('tui-pagination-container'), {
  itemsPerPage: 15,
})

// pagination.on('beforeMove', event => {
//   window.scroll(0, 0)
// })
