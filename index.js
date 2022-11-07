const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let avatarSection = document.querySelector(".avatar-section")
let postSection = document.querySelector(".post-section")
let footer = document.querySelector("footer")

avatarSection.innerHTML = 
                    `
                    <img src="${posts[0].avatar}" class="avatar-vangogh" alt="avatar-vangogh"> 
                    <div class="name-details"><h2>${posts[0].name}</h2><br>
                    <span>${posts[0].location}</span></div>
                    `

postSection.innerHTML = `
                        <img src="${posts[0].post}" class="post-vangogh" alt="post-vangogh">
                        `

footer.innerHTML = `<h2>${posts[0].likes} likes<br>${posts[0].username}<span> ${posts[0].comment}</span></h2>`
