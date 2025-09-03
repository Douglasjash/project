# Testes da API de Soluções

Este documento descreve como executar os testes da API de Soluções usando o Postman.

## Arquivos de Teste

- `solutions-api-tests.feature`: Contém os cenários de teste no formato Gherkin
- `solutions-api-postman-collection.json`: Coleção do Postman com os testes implementados

## Como Executar os Testes

### Pré-requisitos

1. Certifique-se de que a API está em execução:
   ```
   cd my-portifolio
   node src/api/solutions-api.cjs
   ```

2. Tenha o Postman instalado em seu computador

### Importando a Coleção no Postman

1. Abra o Postman
2. Clique em "Import" (Importar)
3. Selecione o arquivo `solutions-api-postman-collection.json`
4. A coleção "Solutions API Tests" será importada

### Configurando o Ambiente

1. No Postman, clique em "Environments" (Ambientes) no menu lateral
2. Clique em "Create Environment" (Criar Ambiente)
3. Dê um nome ao ambiente (ex: "Solutions API Local")
4. Adicione a variável:
   - Nome: `baseUrl`
   - Valor inicial: `http://localhost:3001`
   - Valor atual: `http://localhost:3001`
5. Salve o ambiente
6. Selecione o ambiente criado no menu suspenso no canto superior direito

### Executando os Testes

1. Na coleção "Solutions API Tests", clique nos três pontos (...)
2. Selecione "Run Collection" (Executar Coleção)
3. Verifique se todos os testes estão selecionados
4. Clique em "Run Solutions API Tests"
5. Verifique os resultados dos testes

## Cenários de Teste

Os seguintes cenários são testados:

1. **Obter todas as soluções**
   - Verifica se a API retorna todas as soluções
   - Valida o formato e conteúdo da resposta

2. **Obter uma solução específica por ID**
   - Verifica se a API retorna uma solução específica pelo ID
   - Valida o formato e conteúdo da resposta

3. **Tentar obter uma solução com ID inexistente**
   - Verifica se a API retorna erro 404 para IDs inexistentes
   - Valida a mensagem de erro

4. **Obter lista simplificada de soluções**
   - Verifica se a API retorna uma lista simplificada de soluções
   - Valida que apenas os campos ID e título estão presentes

## Interpretação dos Resultados

- ✅ Verde: O teste passou
- ❌ Vermelho: O teste falhou

Se algum teste falhar, verifique:
1. Se a API está em execução
2. Se o endpoint está correto
3. Se a resposta da API está no formato esperado