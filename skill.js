document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("skillNavLink").setAttribute("class", "currentPageNavLink")
    try {
         const educationResponse = await fetch('https://portfolio-backend-production-6426.up.railway.app/skills')
        .then(response =>response.json())
        .then(data=>
            data.forEach(item => {
                let newSkill = document.createElement("div")
                newSkill.setAttribute("class", "skill-card")
                let image = document.createElement("img")
                image.setAttribute("src", item.imageUrl)
                image.setAttribute("class", "skill-card-image")
                image.setAttribute("alt", "skill Logo")
                newSkill.appendChild(image)
                let contentContainer = document.createElement("div")
                contentContainer.setAttribute("class", "skill-card-content")
                let heading = document.createElement("h3")
                heading.innerText = item.name
                contentContainer.appendChild(heading)
                let paragraph = document.createElement("p")
                paragraph.innerText = item.about
                contentContainer.appendChild(paragraph)
                newSkill.appendChild(contentContainer)
               if(item.type == "FRONTEND"){
                    let frontendSkill = document.getElementById("frontend-skills-container");
                    frontendSkill.appendChild(newSkill);
               }else if(item.type == "BACKEND"){
                    let backendSkill = document.getElementById("backend-skills-container");
                    backendSkill.appendChild(newSkill);
               }else if(item.type == "OTHERS"){
                    let otherSkill = document.getElementById("others-skills-container");
                    otherSkill.appendChild(newSkill);
               }
            })
        )
    } catch (error) {
        console.error('GET Error:', error);
    }
});