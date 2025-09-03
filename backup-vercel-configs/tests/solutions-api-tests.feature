# language: pt

Funcionalidade: API de Soluções
  Como um desenvolvedor
  Eu quero acessar os dados dos cards de soluções via API
  Para poder integrá-los em aplicações externas como o GitHub

  Cenário: Obter todas as soluções
    Dado que a API de soluções está disponível
    Quando eu enviar uma requisição GET para "/api/solutions"
    Então o código de status da resposta deve ser 200
    E o corpo da resposta deve conter uma lista de soluções
    E cada solução deve ter os campos "id", "title", "description", "technologies" e "benefits"
    E o tamanho da lista deve ser 6

  Cenário: Obter uma solução específica por ID
    Dado que a API de soluções está disponível
    Quando eu enviar uma requisição GET para "/api/solutions/automation-testing"
    Então o código de status da resposta deve ser 200
    E o corpo da resposta deve conter uma solução
    E a solução deve ter o id "automation-testing"
    E a solução deve ter o título "Automação de Testes UI"

  Cenário: Tentar obter uma solução com ID inexistente
    Dado que a API de soluções está disponível
    Quando eu enviar uma requisição GET para "/api/solutions/id-inexistente"
    Então o código de status da resposta deve ser 404
    E o corpo da resposta deve conter uma mensagem de erro

  Cenário: Obter lista simplificada de soluções
    Dado que a API de soluções está disponível
    Quando eu enviar uma requisição GET para "/api/solutions/list"
    Então o código de status da resposta deve ser 200
    E o corpo da resposta deve conter uma lista de soluções
    E cada item da lista deve ter apenas os campos "id" e "title"
    E o tamanho da lista deve ser 6

# Instruções para execução no Postman:
# 1. Importe este arquivo .feature no Postman
# 2. Configure a variável de ambiente "baseUrl" para "http://localhost:3001"
# 3. Execute a collection para validar todos os cenários