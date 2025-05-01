const form=document.getElementById("form"); /*add os ID's*/
const username=document.getElementById("username");
const email=document.getElementById("e-mail");
const data_de_nascimento=document.getElementById("data_de_nascimento");
const CPF=document.getElementById("CPF");
const password=document.getElementById("password");
const passwordConfirmation=document.getElementById("password-confirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault(); /*não atualizar a página, nem enviar este formulário*/

    checkForm();
    
})

//PARA APLICAR O BLUR QUANDO CLICAR FORA DO QUADRO QUE TINHA ERRO

username.addEventListener("blur", () => {
    checkInputUsername();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

data_de_nascimento.addEventListener("blur", () => {
    checkInputData_de_nascimento();
});

CPF.addEventListener("blur", () => {
    checkInputCPF();
});

password.addEventListener("blur", () => {
    checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
});

function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === ""){
        errorInput(username, "Campo obrigatório")
    }else{ 
        const formItem = username.parentElement; //para não aparecer a mensagem de erro, caso o usuário digite alguma coisa
        formItem.className = "form-content" //className vai manipular o nome da minha classe
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if (emailValue === ""){
        errorInput(email, "Campo obrigatório")
    }else{ 
        const formItem = email.parentElement; //para não aparecer a mensagem de erro, caso o usuário digite alguma coisa
        formItem.className = "form-content"
    }
}


function checkInputData_de_nascimento(){
    const data_de_nascimentoValue = data_de_nascimento.value;

    if (data_de_nascimentoValue === ""){
        errorInput(data_de_nascimento, "Campo obrigatório")
    }else if (data_de_nascimentoValue.length <8){
        errorInput(data_de_nascimento, "Digite sem espaços e sem separação. ex: 30121995")
    }else{
        const formItem = data_de_nascimento.parentElement; //para não aparecer a mensagem de erro, caso o usuário digite alguma coisa
        formItem.className = "form-content"
    }
}

function checkInputCPF(){
    const CPFValue = CPF.value;

    if (CPFValue === ""){
        errorInput(CPF, "Campo obrigatório")
    }else if (CPFValue.length !== 11){ 
        errorInput(CPF, "Digite sem espaços e sem pontos e hífens")
    }else{
        const formItem = CPF.parentElement; //para não aparecer a mensagem de erro, caso o usuário digite alguma coisa
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if (passwordValue === ""){
        errorInput(password, "Campo obrigatório")
    }else if (passwordValue.length < 8){ 
        errorInput(password, "Sua senha precisa ter no mínimo 8 caracteres")
    }else{
        const formItem = password.parentElement; //para não aparecer a mensagem de erro, caso o usuário digite alguma coisa
        formItem.className = "form-content"
    }
}


function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "Campo obrigatório");
    } else if (confirmationPasswordValue !== passwordValue) { //verificar se é igual a div password
        errorInput(passwordConfirmation, "As senhas precisam ser iguais");
    } else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}


//FUNÇÃO PARA BARRAR O USUÁRIO EM CASO DE ERROS

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputData_de_nascimento();
    checkInputCPF();
    checkInputPassword();
    checkInputPasswordConfirmation()

    const formItem = form.querySelectorAll(".form-content") //pega todos os que estiverem com essa classe

    const isValid = [...formItem].every( (item) =>{  //every faz passar por todos os elementos p/ verificar se há algum erro
        return item.className ==="form-content" //se todos os elementos estiverem com o a classe form-content quer dizer que não há erros
    }); 

    if(isValid){
        alert("CADASTRADO ENVIADO COM SUCESSO!")
    }
}


//FUNÇÃO PARA O AVISO DE ERRO
function errorInput(input, message){
    const formItem = input.parentElement; //"pai" da minha div form-content no html
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}