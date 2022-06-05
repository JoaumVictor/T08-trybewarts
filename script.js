const buttonForm = document.getElementsByClassName('bt-form');
const loginID = document.getElementById('emailID');
const senhaID = document.getElementById('senhaID');

const aceito = document.getElementById('agreement');
const botaoAceito = document.getElementById('submit-btn');

function loginTrybewarts(event) {
  event.preventDefault();
  if (loginID.value === 'tryber@teste.com' && senhaID.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function habilitaAceito() {
  aceito.value = 'on';
  botaoAceito.removeAttribute('disabled');
}

buttonForm[0].addEventListener('click', loginTrybewarts);

aceito.addEventListener('click', habilitaAceito);
