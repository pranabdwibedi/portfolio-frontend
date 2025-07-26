const form = document.getElementById("emailForm")
form.addEventListener("submit", (event)=>{
  document.getElementById("form-message").innerText = "Please wait for some time"
    event.preventDefault();
    let data = {
        email : document.getElementById("emailInput").value,
        message : document.getElementById("msg").value
    }
  fetch('https://portfolio-backend-production-6426.up.railway.app/interestedPerson', {
    method: 'POST',
    body: JSON.stringify(data),
    headers : {
        'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("form-message").innerText = "Contact information sent to your mail box"
    document.getElementById("emailInput").value = ""
    document.getElementById("msg").value = ""
    console.log('Success:', data);
  })
  .catch(error => {
    document.getElementById("form-message").innerText = "couldn't send the email, try agin"
    console.error('Error:', error);
  })
})
document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("contactMeNavLink").setAttribute("class", "currentPageNavLink")
})