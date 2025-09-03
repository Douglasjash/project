const app = require('./api/solutionsApi');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API de Soluções rodando na porta ${PORT}`);
});