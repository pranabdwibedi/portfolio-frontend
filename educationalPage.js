
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const educationResponse = await fetch('https://portfolio-backend-production-6426.up.railway.app/educations')
        .then(response =>response.json())
        .then(data=>
            data.forEach(item => {
                //for inserting academic details in to the table
                let row = document.createElement("tr")
                let td1 = document.createElement("td")
                td1.innerText = item.courseName
                row.appendChild(td1)
                let td2 = document.createElement("td")
                td2.innerText = item.instituteName
                row.appendChild(td2)
                let td3 = document.createElement("td")
                td3.innerText = item.mark
                row.appendChild(td3)
                let td4 = document.createElement("td")
                let button = document.createElement("a")
                button.setAttribute("href", item.certificateLink)
                button.innerText = "view"
                button.setAttribute("class", "button")
                td4.appendChild(button)
                row.appendChild(td4)
                document.getElementById("eduacationTable").appendChild(row)

                // For adding about section
                let list = document.getElementById("educationList")
                let heading = document.createElement("dt")
                heading.setAttribute("class", "instituteNameHeading")
                heading.innerText = item.instituteName+" ("+item.startYear+"-"+item.endYear+")"
                list.appendChild(heading)
                let para = document.createElement("dd")
                para.innerText = item.about
                para.setAttribute("class", "aboutParagraph")
                list.appendChild(para)
            })
        )
    } catch (error) {
        console.error('GET Error:', error);
    }
});