Google Drive API Integration
Este é um guia de instruções para configurar e utilizar a API do Google Drive para enviar arquivos através de uma aplicação Node.js. Siga os passos abaixo para configurar e executar a aplicação.

Configuração Inicial
Obtenha suas credenciais do Google API:

Acesse Google Cloud Console.
Crie um novo projeto ou selecione um existente.
No painel de navegação, vá para "APIs & Services" > "Credentials".
Clique em "Create Credentials" e selecione "OAuth client ID".
Escolha o tipo de aplicativo a ser criado (ex: "Desktop App").
Configure as permissões e forneça URIs de redirecionamento, se necessário.
Anote o "Client ID" e o "Client Secret".
Configure o arquivo config.js:

Abra o arquivo config.js no seu editor de texto.
Substitua YOUR_CLIENT_ID e YOUR_CLIENT_SECRET pelos valores obtidos anteriormente.
Defina o FOLDER_ID como o ID da pasta no Google Drive para onde os arquivos serão enviados.
Instalação
Instale as dependências:
-npm install

Execução
Execute o aplicativo:
-node app.js

Autenticação:

Abra o navegador e acesse http://localhost:3000.
Faça o login com sua conta do Google e conceda as permissões necessárias.
Após a autenticação bem-sucedida, retorne para a aplicação.
Enviar arquivo para o Google Drive:

Clique no botão "Selecionar Arquivo" para abrir a galeria.
Escolha o arquivo desejado.
Pressione o botão "Enviar para o Google Drive".
Resultado:

Após o envio, uma mensagem indicará o sucesso e ao abrir a pasta que você deu o id la estará a imagem.
