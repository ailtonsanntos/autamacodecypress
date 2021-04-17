/*global Given, Then, And, When*/

import testePage from '../pageobjects/testePage'
const Pagina = new testePage


Given("que acesso o site", () =>{   
    Pagina.abrirUrl();
})

When("preencho o campo primeiro nome", ()=>{   
    Pagina.preencherCampoPrimeiroNome();    
})

And("preencho o campo segundo nome", ()=>{
    Pagina.preencherCampoSegundoNome();
})

And("preencho o campo endereco", ()=>{
    Pagina.preencherCampoEndereco();
})

And("preencho o campo email", ()=>{
    Pagina.preencherCampoEmail();
})

And("preencho o campo telefone", ()=>{
    Pagina.preencherCampoTelefone();
})

And("clica na opcao male", ()=>{
    Pagina.preencherCampoSexo();
})

And("clico na opcao movies", ()=>{
    Pagina.preencherCampoHobbies();
})

And("preencho o campo senha", ()=>{
    Pagina.preencherCampoSenha();
})

And("preencho o campo confirmar senha", ()=>{
    Pagina.preencherCampoConfirmarSenha();
})

And("clico no botao refresh", ()=>{   
    Pagina.clicarbotaoRefresh();
})

Then("verifico que a tela foi atualizada", ()=>{   
    Pagina.ValidarTelaLimpa();
})
