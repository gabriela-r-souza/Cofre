
const botao = document.getElementById('botao');
const cofreFechado = document.getElementById('cofre-fechado');
const cofreAberto = document.getElementById('cofre-aberto');
const campos = document.querySelectorAll('.todas-senha input');
const mensagem = document.getElementById('mensagem');

let senha = Math.floor(Math.random() * 51);
console.log("Senha do cofre:", senha);

let aberto = false;
campos.forEach((campo, index) => {
 campo.addEventListener('input', function() {
  campo.value = campo.value.replace(/[^0-9]/g, '');
        if (campo.value !== '' && index < 1) {
            campos[index + 1].focus();
        }
    });
});

botao.addEventListener('click', function() {

    if (aberto) {
        cofreFechado.style.display = 'block';
        cofreAberto.style.display = 'none';
        aberto = false;
        mensagem.textContent = 'Cofre fechado';
        campos.forEach(campo => campo.value = '');
        return;
    }

    let senhaDigitada = '';
    campos.forEach(campo => {
        senhaDigitada += campo.value;
    });
    if (senhaDigitada === '') {
        mensagem.textContent = 'Digite a senha';
        return;
    } if (Number(senhaDigitada) === senha && senhaDigitada.length <= 2) {
        cofreFechado.style.display = 'none';
        cofreAberto.style.display = 'block';
        aberto = true;
        mensagem.textContent = 'Cofre abertoo';
    } else {
        mensagem.textContent = 'Senha errada. Tente novamente.';
    }

});
