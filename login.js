/*
Descricao: Desenvolvimento Web - Introdução aos Formulários Web
nome_arquivo: login.js
nome_exercicio: Aula 12 - Introdução aos Formulários Web
nome_aluno: Geovana Ramos Pereira
email_aluno: geovana.pereira8@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formLogin");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const erroEmail = document.getElementById("erroEmail");
    const erroSenha = document.getElementById("erroSenha");
    const sucesso = document.getElementById("sucesso");
    const btnVerSenha = document.getElementById("verSenha");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        erroEmail.textContent = "";
        erroSenha.textContent = "";
        sucesso.textContent = "";
        email.classList.remove("invalido");
        senha.classList.remove("invalido");

        let temErro = false;

        if (email.value.trim() === "") {
            erroEmail.textContent = "Digite seu e-mail.";
            email.classList.add("invalido");
            temErro = true;
        } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
            erroEmail.textContent = "Inclua um '@' e um '.' no endereço de e-mail.";
            email.classList.add("invalido");
            temErro = true;
        }

        if (senha.value === "") {
            erroSenha.textContent = "Digite sua senha.";
            senha.classList.add("invalido");
            temErro = true;
        } else if (senha.value.length < 6) {
            erroSenha.textContent = "A senha precisa ter pelo menos 6 caracteres.";
            senha.classList.add("invalido");
            temErro = true;
        }

        if (!temErro) {
            sucesso.textContent = "Login validado com sucesso!";
        }
    });

    email.addEventListener("input", function() {
        erroEmail.textContent = "";
        email.classList.remove("invalido");
        sucesso.textContent = "";
    });

    senha.addEventListener("input", function() {
        erroSenha.textContent = "";
        senha.classList.remove("invalido");
        sucesso.textContent = "";
    });

    btnVerSenha.addEventListener("click", function() {
        if (senha.type === "password") {
            senha.type = "text";
            btnVerSenha.textContent = "Ocultar";
        } else {
            senha.type = "password";
            btnVerSenha.textContent = "Mostrar";
        }
    });

    document.getElementById("esqueci").addEventListener("click", function(evento) {
        evento.preventDefault();
        alert("A recuperação de senha não está disponível.");
    });

    document.getElementById("cadastro").addEventListener("click", function(evento) {
        evento.preventDefault();
        alert("O cadastro não está disponível.");
    });
});