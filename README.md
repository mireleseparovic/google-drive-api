<h1>Integração com Google Drive API usando Node.js</h1>
<div align="center">
  <img src="https://logosmarcas.net/wp-content/uploads/2020/12/Google-Drive-Logo.png" alt="Logo do Google Drive" width="200">
</div>
Visão Geral
Este repositório fornece uma aplicação Node.js simples que integra com a API do Google Drive. A aplicação permite autenticar sua conta do Google, selecionar um arquivo do seu sistema local e enviá-lo para uma pasta específica no Google Drive.

Configuração
1. Credenciais da API do Google
Acesse a Google Cloud Console.
Crie um novo projeto ou selecione um existente.
Vá para "APIs e Serviços" > "Credenciais".
Crie credenciais de cliente OAuth, escolhendo o tipo de aplicativo (por exemplo, "Aplicativo para Desktop").
Anote o "ID do Cliente" e o "Segredo do Cliente".
2. Configuração
Abra o arquivo config.js e substitua SEU_ID_DO_CLIENTE, SEU_SEGREDO_DO_CLIENTE e ID_DA_PASTA pelas credenciais obtidas na configuração da API do Google.
Instalação
-npm install

Uso
Execute a aplicação:
-node app.js

Faça a autenticação acessando http://localhost:3000 no seu navegador.
Selecione um arquivo usando o botão "Escolher Arquivo".
Clique em "Enviar para o Google Drive" para enviar o arquivo para a pasta especificada no Google Drive.
