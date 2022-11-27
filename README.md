<p align="center">
 <img src="/public/logo.png" alt="collection" width="150px" height="150px"/>
</p>
<br>

## Sobre

O projeto BtixBlog, é um blog fictício onde os usuários podem realizar a leitura de seus posts preferidos. O mesmo foi desenvolvido dentro de um período de 4 dias. <br><br>

## Descrição do teste:

A equipe recebeu uma demanda para desenvolver um front-end para uma API RESTful. No cenário proposto, a interface deve exibir posts de um blog e, ao clicar em um post, os comentários associados. 

Você ficou responsável pela demanda e sua tarefa é projetar uma interface para atender as necessidades. 

Acesso aos endpoints da api de consulta:<br>
https://docs.google.com/document/d/1zQcx1-cLA0UNoqIrcfVUjWEXFJfCHL41GVoAlpWea8k/edit


## Desenvolvimento

Aplicação foi desenvolvida de acordo com os critérios fornecidos para o teste.

Não foi estabelecido um design para a aplicação, logo, o desenvolvedor estava livre para utilizar a criatividade.

A aplicação foi desenvolvida utilizando o conceito de mobile first, logo a mesma está responsiva.

Na página de posts, foi adicionado a funcionalidade de páginação ( a api retorna uma lista de 100 posts),logo, houve uma tratativa para o não carregamento de todas os posts de uma única vez na interface da aplicação.

Ainda na página de posts, ao realizar um hover em cima do autor do post, será possível visualizar um card de informações sobre o autor.

Ao abrir um post específico, serão exibidos os comentários relacionados a aquele post e houve uma tratativa para o redirecionamento de página, caso o usuário tente acessar um post inexistente.

Foram desenvolvidos testes unitários.<br><br>

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Phosphor-react](https://phosphoricons.com/)

<br>

## Sobre as Tecnologias Utilizadas:

**React**: Biblioteca de criação de interfaces interativas.

**Next.js**: O framework para React, que permite utilizar do recurso de geração de páginas estáticas, além de realizar as renderizações ao lado do servidor assim garantindo dados para SEO, além de trazer de forma nativa a possibilidade de realizar estilização em nível de componente, entre outras vantagens.

**Typescript**: Superset para realizar a tipagem das informações.

**Sass**: Pré-processador css para realizar estilização da aplicação.

**Phosphor React**: Biblioteca de ícones.

**Jest e React Testing Library**: Biblioteca para realizar testes unitários.

<br>

## Como baixar o projeto

```bash
 # Clonar repositório
 $ git clone https://github.com/thyago608/btix-blog

 # Entrar no diretório da aplicação
 $ cd btix-blog

 # Baixar as dependências
 $ npm install

 # Executando a aplicação
 $ npm run dev
 
 # Acesse http://localhost:3000/ em seu navegador
 
 # Executando testes unitários
 $ npm run test
```
<br>

Desenvolvido por Thyago Ribeiro 👋
