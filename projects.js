document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("projectNavLink").setAttribute("class", "currentPageNavLink")
    let projectContainer = document.getElementById("projects")
    const projectsResponse = await fetch('https://portfolio-backend-production-6426.up.railway.app/projects')
        .then(response =>response.json())
        .then(data=>
            data.forEach(item => {
                let card = document.createElement("div")
                card.setAttribute("class", "project-card")
                let img = document.createElement("img")
                img.setAttribute("src", item.logoUrl)
                img.setAttribute("alt", "Project image")
                card.appendChild(img)
                let content = document.createElement("div")
                content.setAttribute("class", "content")
                let h3 = document.createElement("h3")
                h3.innerText = item.title
                content.appendChild(h3)
                let para = document.createElement("p")
                para.innerText = item.description
                content.appendChild(para)
                card.appendChild(content)
                let btnContainer = document.createElement("div")
                btnContainer.setAttribute("class", "button-container")
                let github = document.createElement("a")
                github.setAttribute("class", "button")
                github.setAttribute("href", item.repoUrl)
                github.setAttribute("target", "_blank")
                github.innerText = "Github"
                btnContainer.appendChild(github)
                let website = document.createElement("a")
                if(item.websiteUrl != null){
                    website.setAttribute("class", "button")
                    website.setAttribute("href", item.websiteUrl)
                    website.setAttribute("target", "_blank")
                    website.innerText = "Web App"
                    btnContainer.appendChild(website)     
                }
                card.appendChild(btnContainer)
                projectContainer.appendChild(card)
            }
        ))
})