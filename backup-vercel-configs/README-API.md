# API de Soluções - Documentação

Esta API fornece acesso aos dados dos cards de soluções exibidos no portfólio. Foi desenvolvida especialmente para integração com o perfil do GitHub e outras aplicações externas.

## Endpoints Disponíveis

### Listar todas as soluções
```
GET /api/solutions
```

Retorna todas as soluções disponíveis com seus detalhes completos.

**Exemplo de resposta:**
```json
[
  {
    "id": "automation-testing",
    "iconName": "Bot",
    "title": "Automação de Testes UI",
    "description": "Desenvolvimento de scripts automatizados para testes de interface de usuário",
    "technologies": ["TestComplete", "Katalon Studio", "Selenium", "Robot Framework"],
    "benefits": [
      "Redução de 70% no tempo de execução de testes",
      "Cobertura de testes 24/7",
      "Detecção precoce de bugs"
    ]
  },
  // ... outras soluções
]
```

### Obter uma solução específica
```
GET /api/solutions/:id
```

Retorna os detalhes de uma solução específica pelo seu ID.

**Parâmetros:**
- `id`: ID da solução (ex: automation-testing, api-testing, etc.)

**Exemplo de resposta:**
```json
{
  "id": "automation-testing",
  "iconName": "Bot",
  "title": "Automação de Testes UI",
  "description": "Desenvolvimento de scripts automatizados para testes de interface de usuário",
  "technologies": ["TestComplete", "Katalon Studio", "Selenium", "Robot Framework"],
  "benefits": [
    "Redução de 70% no tempo de execução de testes",
    "Cobertura de testes 24/7",
    "Detecção precoce de bugs"
  ]
}
```

### Listar títulos e IDs das soluções
```
GET /api/solutions/list
```

Retorna uma lista simplificada com apenas os IDs e títulos das soluções. Útil para menus e listagens.

**Exemplo de resposta:**
```json
[
  {
    "id": "automation-testing",
    "title": "Automação de Testes UI"
  },
  {
    "id": "api-testing",
    "title": "Validação de APIs e Testes de Performance"
  },
  // ... outras soluções
]
```

## Integração com GitHub

Para exibir suas soluções no perfil do GitHub, você pode usar a GitHub Action abaixo como exemplo:

```yaml
name: Atualizar Soluções no README

on:
  schedule:
    - cron: '0 0 * * 0'  # Executa uma vez por semana
  workflow_dispatch:  # Permite execução manual

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Buscar dados da API de Soluções
        run: |
          curl -s https://seu-dominio.com/api/solutions > solutions.json
          
      - name: Atualizar README com soluções
        run: |
          # Script para processar o JSON e atualizar o README
          # Exemplo usando jq e sed
          
      - name: Commit e push das alterações
        run: |
          git config --global user.name 'GitHub Action'
          git config --global user.email 'action@github.com'
          git add README.md
          git commit -m "docs: atualiza soluções no README" || echo "Sem alterações para commit"
          git push
```

## Como executar a API localmente

1. Instale as dependências:
```
npm install
```

2. Execute a API:
```
npm run api
```

A API estará disponível em `http://localhost:3001`.

Para executar a API junto com o frontend:
```
npm run start
```

## Notas técnicas

- A API foi desenvolvida com Express.js
- CORS está habilitado para permitir acesso de origens externas
- Os dados são servidos em formato JSON
- Os ícones são fornecidos apenas pelo nome (string) para facilitar a integração