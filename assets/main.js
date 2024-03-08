// Adicionei evento Listerner no formulário
// const submit = document.getElementsByClassName('formContact')[0];
// submit.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log("Clicado")
  // fonte: https://smtpjs.com/
  // Não funcionou com SecureToken
  /* Email.send({
    SecureToken : "8ff6fa24-f4b4-41bc-9d5c-cff468159d0e",
    To : 'sergiomiranda86@gmail.com',
    From : "desventurasdeumaltergo@gmail.com",
    Subject: "Sua inscrição foi feita com sucesso!", 
    Body: "<h3>Esperamos você no dia 31/02/2024 para o nosso encontro, Aprenda do Zero da empresa LOGO</h3>"
  }).then(
    message => alert(message)
  );  */
  /* Email.send({
    Host: "smtp.elasticemail.com",
    Username: "desventurasdeumaltergo@gmail.com",
    Password: "E3246C7C8016878F6E6FE77631F148964952",
    From: 'desventurasdeumaltergo@gmail.com',
    To: document.getElementById('emailData').value,
    Subject: "Sua inscrição foi feita com sucesso!",
    Body: "<h3>Esperamos você no dia 31/02/2024 para o nosso encontro, Aprenda do Zero da empresa LOGO</h3>"
  }).then(
    message => alert(message)
  ); */
// })

const protocolo = window.location.protocol
const dominio = window.location.hostname
const port = window.location.port
const baseUrlLocal = '/pages/thankyou.html';
const baseUrlProd = '/teste-capturelead/pages/thankyou.html';
const urlLocal = (protocolo + "//" + dominio + ":" + port + baseUrlLocal)
console.log(urlLocal)
const urlProd = (protocolo + "//" + dominio + baseUrlProd)
console.log(urlProd)
document.getElementById("emailForm").addEventListener("submit", ((e) => {
    e.preventDefault();
    if (dominio === '127.0.0.1') {
      window.location.href = urlLocal;
    } else {
      window.location.href = urlProd;
    }
  }
))