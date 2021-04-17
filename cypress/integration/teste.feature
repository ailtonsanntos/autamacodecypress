Feature: Automatizar pagina de cadastro

      Scenario: Preencher cadastro

      Given que acesso o site
      When preencho o campo primeiro nome
      And preencho o campo segundo nome
      And preencho o campo endereco
      And preencho o campo email
      And preencho o campo telefone
      And clica na opcao male
      And clico na opcao movies
      And preencho o campo senha
      And preencho o campo confirmar senha
      And clico no botao refresh
      Then verifico que a tela foi atualizada

      