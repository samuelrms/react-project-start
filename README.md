# Projeto React com Vite, Sass e React Router

Este é um projeto de boilerplate em React utilizando Vite para desenvolvimento rápido, **Sass** para o gerenciamento de estilos e **React Router** para navegação. Todas as rotas da aplicação são centralizadas no arquivo `src/routes/routes.jsx`, facilitando a manutenção e adição de novas rotas.

## Installation

### Pré-requisitos

- Node.js
- Yarn, pnpm ou npm (preferência pessoal)

### Passos para instalação

1. Clone o repositório

   1. Usando HTTPS

   ```bash
   git clone https://github.com/samuelrms/react-project-start.git
   ```

   2. Usando SSH

   ```bash
   git clone git@github.com:samuelrms/react-project-start.git
   ```

   3. Usando GitHub CLI

   ```bash
   gh repo clone samuelrms/react-project-start
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd react-project-start
   ```

3. Instale as dependências:

   1. Se estiver usando **_npm_**, execute:

   ```bash
   npm i
   ```

   2. Se estiver usando **_yarn_**, execute:

   ```bash
   yarn
   ```

   3. Se estiver usando **_pnpm_**, execute:

   ```bash
   pnpm i
   ```

### Use este template

Este template pode ser utilizado com os seguintes comandos:

```bash
npx degit samuelrms/react-project-start <NOME_DO_SEU_APP>
```

Esse comando usa o degit para clonar diretamente o projeto do repositório GitHub `react-project-start` para um novo diretório nomeado `<NOME_DO_SEU_APP>`. O degit é uma ferramenta de scaffolding para criar novos projetos a partir de um repositório git.

ou

```bash
npx create-next-app --example https://github.com/samuelrms/react-project-start <NOME_DO_SEU_APP>
```

Esse comando usa _**create-next-app**_ para criar uma nova aplicação Next.js usando o projeto `react-project-start` como template. O novo projeto será criado em um diretório nomeado `<NOME_DO_SEU_APP>`.

Ambos os comandos usam o _**npx**_, que permite executar pacotes sem instalá-los globalmente. Substitua `<NOME_DO_SEU_APP>` pelo nome desejado para o projeto.

Lembre-se de navegar até o novo diretório com `cd <NOME_DO_SEU_APP>` antes de iniciar o servidor de desenvolvimento com **`npm run dev`**, _**yarn dev**_ ou _**pnpm dev**_. Boa codificação! 😊

## Scripts disponíveis

No diretório do projeto, você pode executar:

### Start Project

1. npm

```bash
npm run dev
```

2. yarn

```bash
yarn dev
```

3. pnpm

```bash
pnpm dev
```

Executa o app no modo de desenvolvimento.
Abra <http://localhost:3000> para visualizá-lo no navegador.

### Build Project

1. npm

```bash
npm run build
```

2. yarn

```bash
yarn build
```

3. pnpm

```bash
pnpm build
```

Compila o app para produção.

## Configuração de Rotas

Todas as rotas estão centralizadas no arquivo `src/routes/routes.jsx`. Para adicionar ou alterar uma rota, basta editar esse arquivo:

```jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, About, NotFound } from "../shared/screens";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
```

No componente principal (`App.jsx`), o arquivo `routes.jsx` é importado e utilizado para mapear as rotas dinamicamente.

## Uso do Componente Stack

O componente `Stack` é um contêiner reutilizável para layouts flexíveis. Ele permite definir o tipo de elemento HTML e aplicar classes CSS adicionais.

### Exemplo de Uso

```jsx
import { Stack } from "./shared/components";

export const ExampleComponent = () => {
  return (
    <Stack elementType="section" className="custom-class">
      <p>Exemplo de uso do Stack</p>
    </Stack>
  );
};
```

### Props do Componente

- `elementType`: Define o tipo de elemento HTML (`div` por padrão).
- `className`: Adiciona classes CSS extras ao contêiner `Stack`.
- `children`: Elementos filhos renderizados dentro do contêiner.

## Estrutura Modular de Estilos

Este projeto utiliza **CSS Modules** com Sass. Para adicionar estilos:

1. Crie um arquivo `.module.scss` na pasta do componente.
2. Importe o `.module.scss` diretamente no componente.

Exemplo:

```jsx
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Página Inicial</h1>
    </div>
  );
};
```

- `src/assets/styles/main.scss`: Contém o reset CSS e estilos globais.
- `src/shared/screens/[Page]/[Page].module.scss`: Estilos específicos para cada página.

## Estrutura de Arquivos

Abaixo está a estrutura do projeto:

    .
    ├── pnpm-lock.yaml
    ├── .gitignore
    ├── package.json
    ├── src/
    │    ├── shared/
    │    │    ├── components/
    │    │    │    ├── index.js
    │    │    │    └── Stack/
    │    │    │        └── index.jsx
    │    │    └── screens
    │    │         ├── NotFound/
    │    │         │    ├── index.jsx
    │    │         │    └── NotFound.module.scss
    │    │         ├── About/
    │    │         │    ├── About.module.scss
    │    │         │    └── index.jsx
    │    │         └── Home/
    │    │              ├── Home.module.scss
    │    │              └── index.jsx
    │    ├── App.jsx
    │    ├── routes/
    │    │    └── routes.jsx
    │    ├── assets/
    │    │    ├── react.svg
    │    │    └── styles/
    │    │         └── main.scss
    │    ├── App.css
    │    ├── index.css
    │    └── main.jsx
    ├── eslint.config.js
    ├── public/
    │    └── vite.svg
    ├── LICENSE
    ├── vite.config.js
    ├── README.md
    └── index.html

## Exportações de Componentes e Telas

Para facilitar as importações, cada pasta contém um arquivo `index.js` que exporta todos os componentes e telas.

### Exemplo `src/shared/components/index.js`

```js
// TODO: Export all components from this file
export * from "./Stack";
```

### Exemplo `src/shared/screens/index.js`

```js
// TODO: Export all screens
export * from "./About";
export * from "./Home";
export * from "./NotFound";
```

## Licença

Este projeto está sob a licença MIT.
