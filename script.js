const form = document.getElementById('formCadastro');
const email = document.getElementById('email');
const confirmarEmail = document.getElementById('confirmarEmail');
const erroEmail = document.getElementById('erroEmail');
const alertaErro = document.getElementById('alertaErro');

form.addEventListener('submit', function (e) {
  // Oculta mensagens anteriores
  erroEmail.style.display = 'none';
  alertaErro.style.display = 'none';

  // Verifica se os e-mails são iguais
  if (email.value !== confirmarEmail.value) {
    e.preventDefault(); // Bloqueia envio
    erroEmail.style.display = 'block'; // Mostra mensagem abaixo do campo
    alertaErro.style.display = 'block'; // Mostra alerta no topo
  }
});