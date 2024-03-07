const emailLead = document.getElementById('emailData');
console.log(emailLead.value)

const submit = document.getElementById('emailForm');
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Enviado")
})


/* function sendEmail() { 
  Email.send({
    SecureToken : "8ff6fa24-f4b4-41bc-9d5c-cff468159d0e",
    To : 'sergiomiranda86@gmail.com',
    From : "desventurasdeumaltergo@gmail.com",
    Subject: "Novo lead do curso Aprenda do Zero da empresa LOGO", 
    Body: "Temos um novo lead: " + document.getElementById("emailData").value
  }).then(
    message => alert(message)
  );  
} */

const baseUrlLocal = 'http://127.0.0.1:5501/meu-portfolio-projetos/teste-capturelead/pages/thankyou.html';
const baseUrlProd = 'https://seralterego.github.io/teste-capturelead/pages/thankyou.html';

document.getElementById("emailForm").addEventListener("submit", (function (event) { 
  event.preventDefault();
  if (baseUrlLocal != true) {
    window.location.href = baseUrlLocal;
  } else {
    window.location.href = baseUrlProd;
  }
  
}))
