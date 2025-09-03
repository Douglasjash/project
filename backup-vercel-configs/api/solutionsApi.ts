const express = require('express');
const cors = require('cors');
const { solutionsData } = require('../data/solutionsData');

// Criando a aplicação Express
const app = express();
const PORT = process.env.PORT || 3001;

// Habilitando CORS para permitir acesso externo
app.use(cors());

// Endpoint para obter todos os cards de soluções
app.get('/api/solutions', (req, res) => {
  // Transformando os dados para remover o componente React do icon
  const apiSolutions = solutionsData.map(solution => ({
    id: solution.id,
    iconName: solution.iconName,
    title: solution.title,
    description: solution.description,
    technologies: solution.technologies,
    benefits: solution.benefits
  }));
  
  res.json(apiSolutions);
});

// Endpoint para obter um card específico por ID
app.get('/api/solutions/:id', (req, res) => {
  const { id } = req.params;
  const solution = solutionsData.find(s => s.id === id);
  
  if (!solution) {
    return res.status(404).json({ error: 'Solução não encontrada' });
  }
  
  // Transformando os dados para remover o componente React do icon
  const apiSolution = {
    id: solution.id,
    iconName: solution.iconName,
    title: solution.title,
    description: solution.description,
    technologies: solution.technologies,
    benefits: solution.benefits
  };
  
  res.json(apiSolution);
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
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`API de Soluções rodando na porta ${PORT}`);
  });
}

module.exports = app;