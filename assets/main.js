
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "desventurasdeumaltergo@gmail.com",
    Password: "desventuras@&9002",
    To: 'sergiomiranda86@gmail.com', //aqui alteramos o destino do lead
    From: document.getElementById("emailData").value,
    Subject: "Novo lead do curso Aprenda do Zero da empresa LOGO",
    Body: "Temos um novo lead: " + document.getElementById("emailData").value
  }).then(
    message => alert('Lead enviado com sucesso!')
  );
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();
  window.location.href = 'http://127.0.0.1:5501/meu-portfolio-projetos/teste-lead-landingpage/pages/thankyou.html';
})