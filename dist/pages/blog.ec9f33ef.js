const api_url = "https://dev.to/api/articles?username=stephanlamoureux";
async function getArticle() {
    // Data for the first article
    const response = await fetch(api_url);
    const data = await response.json();
    const title = data[0].title;
    const link = data[0].url;
    const tag = data[0].tag_list;
    const name = data[0].user.username;
    // const profilePic = data[0].user.profile_image
    // const cover = data[0].cover_image
    document.getElementById("article_title").textContent = title;
    document.getElementById("article_link").href = link;
    document.getElementById("tags").textContent = tag.map((i)=>"#" + i).join(", ");
    document.getElementById("username").textContent = "@" + name;
    // document.getElementById('profile_image').src = profilePic
    //For multiple articles that you want to display
    function displayMultipleArticles() {
        for(let i1 = 1; i1 < data.length; i1++){
            let element = document.createElement("div") //container
            ;
            element.className = "devArticle";
            let articleLink = document.createElement("a") //link
            ;
            articleLink.id = "article_link" + i1;
            articleLink.target = "_blank";
            articleLink.href = data[i1].url;
            let articleTitle = document.createElement("h1") //title
            ;
            articleTitle.id = "article_title";
            articleTitle.textContent = data[i1].title;
            let articleInfo = document.createElement("div") //info container
            ;
            articleInfo.className = "article-info";
            // let emptyProfileDiv = document.createElement('div') //pfp container
            // let theProfileImage = document.createElement('img') //pfp
            // theProfileImage.style.width = '50px'
            // theProfileImage.id = 'profile_image'
            // theProfileImage.src = data[i].user.profile_image
            let emptyDiv = document.createElement("div") //tags container
            ;
            let tagsInArticle = document.createElement("p") //tag
            ;
            tagsInArticle.id = "tags";
            let realTags = data[i1].tag_list;
            tagsInArticle.textContent = realTags.map((i)=>"#" + i).join(", ");
            let yourUsername = document.createElement("p") //username
            ;
            yourUsername.id = "username";
            yourUsername.textContent = "@" + data[i1].user.username;
            element.appendChild(articleLink);
            articleLink.appendChild(articleTitle);
            articleLink.appendChild(articleInfo);
            // articleInfo.appendChild(emptyProfileDiv)
            // emptyProfileDiv.appendChild(theProfileImage)
            articleInfo.appendChild(emptyDiv);
            emptyDiv.appendChild(tagsInArticle);
            emptyDiv.appendChild(yourUsername);
            document.getElementById("blog_container").appendChild(element);
        }
    }
    displayMultipleArticles();
}
getArticle();

//# sourceMappingURL=blog.ec9f33ef.js.map
