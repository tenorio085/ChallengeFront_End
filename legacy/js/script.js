document.addEventListener('DOMContentLoaded', function() {
    initMenuMobile();
    initFAQ();
    initFormularioContato();
});

function initMenuMobile() {
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    if (hamburguer && menu) {
        hamburguer.addEventListener('click', function() {
            hamburguer.classList.toggle('ativo');
            menu.classList.toggle('ativo');
        });

        const menuLinks = menu.querySelectorAll('.menu-link');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburguer.classList.remove('ativo');
                menu.classList.remove('ativo');
            });
        });
    }
}

function initFAQ() {
    const faqItens = document.querySelectorAll('.faq-item');

    faqItens.forEach(function(item) {
        const pergunta = item.querySelector('.faq-pergunta');

        pergunta.addEventListener('click', function() {
            const estaAtivo = item.classList.contains('ativo');

            faqItens.forEach(function(outroItem) {
                outroItem.classList.remove('ativo');
            });

            if (!estaAtivo) {
                item.classList.add('ativo');
            }
        });
    });
}

function initFormularioContato() {
    const formulario = document.getElementById('formularioContato');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    const botaoEnviar = document.getElementById('botaoEnviar');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();

            limparErros(formulario);

            let ehValido = true;

            const nome = document.getElementById('nome');
            if (nome.value.trim() === '') {
                mostrarErro(nome, 'Por favor, informe seu nome completo');
                ehValido = false;
            }

            const email = document.getElementById('email');
            if (email.value.trim() === '') {
                mostrarErro(email, 'Por favor, informe seu e-mail');
                ehValido = false;
            } else if (!ehEmailValido(email.value)) {
                mostrarErro(email, 'Por favor, informe um e-mail válido');
                ehValido = false;
            }

            const assunto = document.getElementById('assunto');
            if (assunto.value === '') {
                mostrarErro(assunto, 'Por favor, selecione um assunto');
                ehValido = false;
            }

            const mensagem = document.getElementById('mensagem');
            if (mensagem.value.trim() === '') {
                mostrarErro(mensagem, 'Por favor, escreva sua mensagem');
                ehValido = false;
            }

            if (ehValido) {
                botaoEnviar.disabled = true;
                botaoEnviar.textContent = 'Enviando...';

                setTimeout(function() {
                    formulario.style.display = 'none';
                    mensagemSucesso.classList.add('mostrar');
                }, 1500);
            }
        });

        const campos = formulario.querySelectorAll('input, select, textarea');
        campos.forEach(function(campo) {
            campo.addEventListener('input', function() {
                limparErroCampo(this);
            });

            campo.addEventListener('change', function() {
                limparErroCampo(this);
            });
        });
    }
}

function mostrarErro(campo, mensagem) {
    const formGrupo = campo.closest('.form-grupo');
    const mensagemErro = formGrupo.querySelector('.mensagem-erro');

    formGrupo.classList.add('erro');
    mensagemErro.textContent = mensagem;
}

function limparErroCampo(campo) {
    const formGrupo = campo.closest('.form-grupo');
    const mensagemErro = formGrupo.querySelector('.mensagem-erro');

    formGrupo.classList.remove('erro');
    mensagemErro.textContent = '';
}

function limparErros(formulario) {
    const gruposErro = formulario.querySelectorAll('.form-grupo.erro');
    gruposErro.forEach(function(grupo) {
        grupo.classList.remove('erro');
        const mensagemErro = grupo.querySelector('.mensagem-erro');
        mensagemErro.textContent = '';
    });
}

function ehEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}