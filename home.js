document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://portfolio-backend-production-6426.up.railway.app/details');
        profileData = await response.json();
        document.getElementById("profilePhoto").setAttribute("src", profileData.photoUrl)
        document.getElementById("resumeLink").setAttribute("href", profileData.resumeLink)
        document.getElementById("linkedinUrl").setAttribute("href", profileData.linkedinUrl)
        document.getElementById("bio").innerText = profileData.bio
    } catch (error) {
        console.error('GET Error:', error);
    }
});