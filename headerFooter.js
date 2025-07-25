document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:8080/details');
        profileData = await response.json()
        document.getElementById("nav-heading").innerText = profileData.name
        let elements = document.getElementsByClassName("footerText")
        for(let element of elements)
            element.innerText = "© 2025 "+profileData.name+" | All Rights Reserved"
    } catch (error) {
        console.error('GET Error:', error);
    }
});