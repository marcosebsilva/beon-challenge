# BEON BOOKS LIST
Tabela para listagem de livros feita para o processo seletivo da BEON.
## Demo
![Home demo image](/src/assets/readme/home.png?raw=true "Home")
![Search demo image](src/assets/readme/search.png?raw=true "Search")
![Modal demo image](src/assets/readme/modal.png?raw=true "Modal")
## Funcionalidades
- Buscar livros pelo título, autor ou idioma;
- Listar livros;
- Apresentar quantidade de registros encontrados
- Paginar o resultado da busca com a quantidade desejada de itens
- Filtrar livros pelo período (ano);

## Tecnologias

As tecnologias usadas no projeto e o motivo pela qual usei elas foram:

- [React](https://pt-br.reactjs.org) - Framework de front-end com o qual tenho maior experiência.
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de tipagem forte baseada no JavaScript. A tipagem é importante pra obter um código mais conciso e previsível.
- [react-modal](https://www.npmjs.com/package/react-modal) - Pacote que simplifica a criação de modais no react.
- [react-paginate](https://www.npmjs.com/package/react-paginate) - Pacote que facilita a criação de um componente para controlar a paginação.
- [Cypress](https://www.cypress.io) - Biblioteca para testes de front-end simples de usar e bastante eficiente para testes e2e.
- [styled-components](https://styled-components.com/docs/basics) - Biblioteca que me permite criar CSS-IN-JS a nivel de componente, facilitando na manuntenção e evitando problemas de nomenclaturas de classes, além de aproveitar a sintaxe de nesting, presente no SASS e no LESS, por exemplo

## Instalação
##### Siga as instruções para criar um servidor com jsonwebserver no seguinte link:`https://github.com/beonica/jsonserver`
---------------
 
Clone o projeto

```bash
  git@github.com:marcosebsilva/beon-challenge.git.git
```

Entre no diretório do projeto

```bash
  cd beon-challenge
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
   npm start
```
Navegue até  `localhost:3000` em qualquer navegador.

## ContextAPI & Hooks
#### Esse projeto usa dois duas instâncias do ContextAPI, cada uma com seu respectivo hook utilitário:
### useSearch()
Permite acessar os valores que serão usados no endpoint que será usado pra resgatar os livros. Pode ser usado em qualquer componente encapsulado pelo **SearchProvider.** (*nesse caso, todo o aplicativo*);

Retorna um objeto com todos os valores descritos na **interface do contexto**, presentes no mesmo arquivo. Qualquer valor padrão pode ser fornecido através da variável `initialContext`.

#### [SearchContext](https://github.com/marcosebsilva/beon-challenge/blob/master/src/context/SearchContext.tsx)

### useBooks()
Permite acessar e atualizar os livros resgatados pela API. Pode ser usado em qualquer component encapsulado pelo **BooksProvider.** (*novamente, todo o aplicativo*)

Retorna um objeto com dois valores:
`updateSearch`: função que permite atualizar o array de livros
`books`: array com os livros resgatados pela api.

#### [BooksContext](https://github.com/marcosebsilva/beon-challenge/blob/master/src/context/BooksContext.tsx)

## Testes
Abre o Cypress com:
```sh
npm run cypress:open
```
Escolhe uma categoria de testes e execute qualquer uma das specs disponíveis.
