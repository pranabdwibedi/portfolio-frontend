document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("experienceNavLink").setAttribute("class", "currentPageNavLink")
    let internships = document.getElementById("internships-container")
    const experienceResponse = await fetch('http://localhost:8080/internships')
        .then(response =>response.json())
        .then(data=>
            data.forEach(item => {

                // About comapny name and logo
                let nameAndImg = document.createElement("div")
                nameAndImg.setAttribute("class", "internship-heading-img")
                let h2 = document.createElement("h2")
                h2.innerText = item.companyName
                nameAndImg.appendChild(h2);
                let img = document.createElement("img")
                img.setAttribute("src", item.logoUrl)
                img.setAttribute("alt", item.companyName+" Logo")
                nameAndImg.appendChild(img)
                internships.appendChild(nameAndImg)


                // About company section
                let aboutCompany = document.createElement("div")
                aboutCompany.setAttribute("class", "about-company")
                let aboutCompanyHeading = document.createElement("h3")
                aboutCompanyHeading.innerText = "About company :"
                aboutCompany.appendChild(aboutCompanyHeading)
                let aboutpara = document.createElement("p")
                aboutpara.innerText = item.aboutCompany
                aboutCompany.appendChild(aboutpara)
                internships.appendChild(aboutCompany)



                // About internship experience
                let aboutExperience = document.createElement("div")
                aboutExperience.setAttribute("class", "about-experience")
                let expH3 = document.createElement("h3")
                expH3.innerText = "About my experience : "
                aboutExperience.appendChild(expH3)
                let expPara = document.createElement("p")
                expPara.innerText = item.experience
                aboutExperience.appendChild(expPara)
                internships.appendChild(aboutExperience)



                // internship buttons
                let internshipBtns = document.createElement("div")
                internshipBtns.setAttribute("class", "button-container")
                let certificate = document.createElement("a")
                let report = document.createElement("a")
                if(item.certificateUrl != null){
                    certificate.setAttribute("href", item.certificateUrl)
                    certificate.setAttribute("target","_blank")
                    certificate.innerText = "Certificate"
                    certificate.setAttribute("class", "button")
                    internshipBtns.appendChild(certificate)
                }
                if(item.projectReportUrl != null){
                    report.setAttribute("href", item.projectReportUrl)
                    report.setAttribute("target", "_blank")
                    report.setAttribute("class", "button")
                    report.innerText = "Project Report"
                    internshipBtns.appendChild(report)
                }
                internships.appendChild(internshipBtns)


                let galleryHeading = document.createElement("h3")
                galleryHeading.innerText="Photo Gallery"
                internships.appendChild(galleryHeading)
                item.internshipPhotoGallery.forEach(photo=>{
                    let figure = document.createElement("figure")
                    figure.setAttribute("class", "internship-img-container")
                    let galleryImg =  document.createElement("img")
                    galleryImg.setAttribute("src", photo.imageUrl)
                    galleryImg.setAttribute("alt", "Internship image")
                    galleryImg.setAttribute("class", "internshipPhotos")
                    figure.appendChild(galleryImg)
                    let figcaption = document.createElement("figcaption")
                    figcaption.innerText = photo.aboutImage
                    figure.appendChild(figcaption)
                    internships.appendChild(figure)
                })
            }
        ))
})