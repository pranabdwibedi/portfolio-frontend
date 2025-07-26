document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://portfolio-backend-production-6426.up.railway.app/details');
        profileData = await response.json()
        document.getElementById("nav-heading").innerText = profileData.name
        let elements = document.getElementsByClassName("footerText")
        for(let element of elements)
            element.innerText = "© 2025 "+profileData.name+" | All Rights Reserved"
    } catch (error) {
        console.error('GET Error:', error);
    }
});