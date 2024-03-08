const emailLead = document.getElementById('emailData');

// Adicionei evento Listerner no formulário
const submit = document.getElementById('emailForm');
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Clicado")
  
  /* fonte: https://smtpjs.com/ */
  Email.send({
    SecureToken : "8ff6fa24-f4b4-41bc-9d5c-cff468159d0e",
    To : 'sergiomiranda86@gmail.com',
    From : "desventurasdeumaltergo@gmail.com",
    Subject: "Sua inscrição foi feita com sucesso!", 
    Body: "Esperamos você no dia 31/02/2024 para o nosso encontro, Aprenda do Zero da empresa LOGO"
  }).then(
    message => alert(message)
  ); 
})

/* const protocolo = window.location.protocol
console.log("Protocolo: ", protocolo)

const dominio = window.location.hostname
const baseUrlLocal = '/meu-portfolio-projetos/teste-capturelead/pages/thankyou.html';
console.log(dominio + baseUrlLocal)

const base = window.location.href
const baseUrlProd = '/teste-capturelead/pages/thankyou.html';

document.getElementById("emailForm").addEventListener("submit", (function (event) { 
  event.preventDefault();
  if (dominio === '127.0.0.1') {
    window.location.href = dominio + baseUrlLocal;
  } else {
    window.location.href = dominio+baseUrlProd;
  }
} */

/* document.getElementById("emailForm").addEventListener("submit", (function (event) { 
  event.preventDefault();
  window.location.href = 'https://seralterego.github.io/teste-capturelead/pages/thankyou.html';
}))
console.log(e) */

/* Validação campo e-mail */