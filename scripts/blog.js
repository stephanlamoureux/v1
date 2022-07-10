const api_url = 'https://dev.to/api/articles?username=stephanlamoureux'

async function getArticle() {
  try {
    const response = await fetch(api_url)
    const data = await response.json()

    // Data for the first article
    const title = data[0].title
    const link = data[0].url
    const tag = data[0].tag_list
    const date = data[0].readable_publish_date
    const readingTime = data[0].reading_time_minutes

    document.getElementById('article_title').textContent = title
    document.getElementById('article_link').href = link
    document.getElementById('tags').textContent = tag.map(i => '#' + i).join(', ')
    document.getElementById('minutes').textContent = readingTime + ' minute read'
    document.getElementById('date').textContent = date

    //For multiple articles that you want to display
    function displayMultipleArticles() {
      for (let i = 1; i < data.length; i++) {
        let card = document.createElement('div') //card container
        card.className = 'devArticle'

        let articleLink = document.createElement('a') //link to dev.to
        articleLink.id = 'article_link' + i
        articleLink.target = '_blank'
        articleLink.href = data[i].url

        let articleTitle = document.createElement('h1') //article title
        articleTitle.id = 'article_title'
        articleTitle.textContent = data[i].title

        let articleInfo = document.createElement('div') //info container
        articleInfo.className = 'article-info'

        let tagsInArticle = document.createElement('p') //tags
        tagsInArticle.id = 'tags'
        let hashTags = data[i].tag_list
        tagsInArticle.textContent = hashTags.map(i => '#' + i).join(', ')

        let articleMinutes = document.createElement('p') //minutes
        articleMinutes.id = 'minutes'
        articleMinutes.textContent = data[i].reading_time_minutes + ' minute read'

        let articleDate = document.createElement('p') //date posted
        articleDate.id = 'date'
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
        document.getElementById('blog_container').appendChild(card)
      }
    }
    displayMultipleArticles()
  } catch (error) {
    console.log(error)
  }
}
getArticle()
