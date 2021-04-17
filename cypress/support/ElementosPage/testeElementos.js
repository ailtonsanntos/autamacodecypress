class testElementos{

    campoPrimeiroNome = ()=> {return ':nth-child(1) > :nth-child(2) > .form-control'}

    campoSegundoNome = ()=> {return '//*[@id="basicBootstrapForm"]/div[1]/div[2]/input'}

    campoEndereco = ()=> {return '//*[@id="basicBootstrapForm"]/div[2]/div/textarea'}

    campoEmail = ()=> {return '//*[@id="eid"]/input'}

    campoTelefone = ()=> {return '//*[@id="basicBootstrapForm"]/div[4]/div/input'}

    campoSexo = ()=> {return '//*[@id="basicBootstrapForm"]/div[5]/div/label[1]/input'}

    campoHobbies = ()=> {return '//*[@id="basicBootstrapForm"]/div[6]/div/div[2]/label'}

    campoSenha = ()=>{return '//*[@id="firstpassword"]'}

    campoConfirmarSenha = ()=> {return '//*[@id="secondpassword"]'}

    botaoRefresh = () => {return '#Button1'}
 

}

export default testElementos;