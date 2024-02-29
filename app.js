const express = require ('express');
const { google } = require('googleapis');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

// Configuração da API do Google Drive
const CLIENT_ID = '---';
const CLIENT_SECRET = '---';
const REDIRECT_URI = 'http://localhost:3000/auth/callback';
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

// Configuração do multer para lidar com uploads de arquivos
const upload = multer({ dest: 'uploads/' });

// Criar o cliente OAuth2
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Rota inicial para redirecionar para a autenticação do Google
app.get('/', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

// Rota de callback após a autenticação do Google

app.use(express.static(__dirname));

 app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

   // Redirecionar para a página HTML após a autenticação
   res.redirect('/index.html');
  });

// Rota para lidar com o upload de arquivo para o Google Drive
app.post('/upload', upload.single('file'), async (req, res) => {
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  const fileMetadata = {
    name: req.file.originalname,
    parents: ['17hQeXVnkhXnpz0XRFPK4INjxVrHQqDB0'], // Substitua pelo ID da pasta desejada
  };

  const media = {
    mimeType: req.file.mimetype,
    body: fs.createReadStream(req.file.path),
  };

  drive.files.create(
    {
      resource: fileMetadata,
      media: media,
      fields: 'id',
    },
    (err, file) => {
      if (err) {
        console.error('Erro no upload do arquivo:', err);
        res.status(500).send('Erro no upload do arquivo para o Google Drive.');
      } else {
        console.log('Arquivo enviado com sucesso. ID:', file.data.id);
        res.send('Arquivo enviado com sucesso para o Google Drive!');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
