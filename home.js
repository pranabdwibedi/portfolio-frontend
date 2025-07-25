document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("homeNavLink").setAttribute("class", "currentPageNavLink")
    try {
        const response = await fetch('http://localhost:8080/details');
        profileData = await response.json();
        document.getElementById("profilePhoto").setAttribute("src", profileData.photoUrl)
        document.getElementById("resumeLink").setAttribute("href", profileData.resumeLink)
        document.getElementById("linkedinUrl").setAttribute("href", profileData.linkedinUrl)
        document.getElementById("bio").innerText = profileData.bio
    } catch (error) {
        console.error('GET Error:', error);
    }
});