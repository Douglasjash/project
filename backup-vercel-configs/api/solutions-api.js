const express = require('express');
const cors = require('cors');
const solutionsData = require('./solutions-data');

// Criando a aplicação Express
const app = express();
const PORT = process.env.PORT || 3001;

// Habilitando CORS para permitir acesso externo
app.use(cors());

// Endpoint para obter todos os cards de soluções
app.get('/api/solutions', (req, res) => {
  res.json(solutionsData);
});

// Endpoint para obter um card específico por ID
app.get('/api/solutions/:id', (req, res) => {
  const { id } = req.params;
  const solution = solutionsData.find(s => s.id === id);
  
  if (!solution) {
    return res.status(404).json({ error: 'Solução não encontrada' });
  }
  
  res.json(solution);
});

// Endpoint para obter apenas os títulos e IDs (útil para listagens)
app.get('/api/solutions/list', (req, res) => {
  const solutionsList = solutionsData.map(solution => ({
    id: solution.id,
    title: solution.title
  }));
  
  res.json(solutionsList);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API de Soluções rodando na porta ${PORT}`);
});

module.exports = app;