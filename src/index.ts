import app from './config/express';

const PORT = process.env.PORT || 7655;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
})