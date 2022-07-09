const api_url = 'https://dev.to/api/articles?username=stephanlamoureux'

async function getArticle() {
  try {
    // Data for the first article
    const response = await fetch(api_url)
    const data = await response.json()
    const title = data[0].title
    const link = data[0].url
    const tag = data[0].tag_list
    const date = data[0].readable_publish_date
    const readingTime = data[0].reading_time_minutes
    // const name = data[0].user.username
    // const profilePic = data[0].user.profile_image
    // const cover = data[0].cover_image

    document.getElementById('article_title').textContent = title
    document.getElementById('article_link').href = link
    document.getElementById('tags').textContent = tag.map(i => '#' + i).join(', ')
    document.getElementById('minutes').textContent = readingTime + ' minute read'
    document.getElementById('date').textContent = date
    // document.getElementById('profile_image').src = profilePic

    //For multiple articles that you want to display
    function displayMultipleArticles() {
      for (let i = 1; i < data.length; i++) {
        let element = document.createElement('div') //container
        element.className = 'devArticle'

        let articleTitle = document.createElement('h1') //title
        articleTitle.id = 'article_title'
        articleTitle.textContent = data[i].title

        let articleLink = document.createElement('a') //link
        articleLink.id = 'article_link' + i
        articleLink.target = '_blank'
        articleLink.href = data[i].url

        let articleInfo = document.createElement('div') //info container
        articleInfo.className = 'article-info'

        // let emptyProfileDiv = document.createElement('div') //pfp container
        // let theProfileImage = document.createElement('img') //pfp
        // theProfileImage.style.width = '50px'
        // theProfileImage.id = 'profile_image'
        // theProfileImage.src = data[i].user.profile_image

        let emptyDiv = document.createElement('div') //article data container
        let hr = document.createElement('hr') //line
        hr.className = 'article-line'

        let tagsInArticle = document.createElement('p') //tag
        tagsInArticle.id = 'tags'
        let hashTags = data[i].tag_list
        tagsInArticle.textContent = hashTags.map(i => '#' + i).join(', ')

        let articleMinutes = document.createElement('p') //minutes
        articleMinutes.id = 'minutes'
        articleMinutes.textContent = data[i].reading_time_minutes + ' minute read'

        let articleDate = document.createElement('p') //date posted
        articleDate.id = 'date'
        articleDate.textContent = data[i].readable_publish_date

        element.appendChild(articleLink)
        articleLink.appendChild(articleTitle)
        articleLink.appendChild(articleInfo)
        articleInfo.appendChild(emptyDiv)
        emptyDiv.appendChild(tagsInArticle)
        emptyDiv.appendChild(hr)
        emptyDiv.appendChild(articleMinutes)
        emptyDiv.appendChild(articleDate)
        // articleInfo.appendChild(emptyProfileDiv)
        // emptyProfileDiv.appendChild(theProfileImage)
        document.getElementById('blog_container').appendChild(element)
      }
    }
    displayMultipleArticles()
  } catch (error) {
    console.log(error)
  }
}
getArticle()
