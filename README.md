# Projeto React com Vite, Sass e React Router

Este é um projeto de boilerplate em React utilizando Vite para desenvolvimento rápido, **Sass** para o gerenciamento de estilos e **React Router** para navegação. Todas as rotas da aplicação são centralizadas no arquivo `src/routes/routes.jsx`, facilitando a manutenção e adição de novas rotas.

## Como Usar

1. **Instalação das Dependências**
   Instale as dependências do projeto com o comando:

   ```bash
   npm install
   #or
   pnpm install
   #or
   yarn install
   ```

2. **Executar o Projeto**
   Para iniciar o projeto em modo de desenvolvimento, use:

   ```bash
   npm run dev
   #or
   pnpm dev
   #or
   yarn dev
   ```

3. **Configuração de Rotas**
   Todas as rotas estão centralizadas no arquivo src/routes/routes.jsx. Para adicionar ou alterar uma rota, basta editar esse arquivo. Aqui está um exemplo de como o arquivo routes.jsx está configurado:
   src/routes/routes.jsx

   ```jsx
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

   No componente principal (App.jsx), o arquivo routes.jsx é importado e utilizado para mapear as rotas dinamicamente.

4. **Estilos com Sass**
   O arquivo principal de estilos é src/assets/styles/main.scss. Esse arquivo é importado no App.jsx, permitindo a aplicação de estilos globais.

## Uso do Componente Stack

O componente Stack é um contêiner reutilizável para layouts baseados em flexbox com orientação em coluna. Ele permite definir o tipo de elemento HTML e aplicar classes CSS adicionais, facilitando a criação de layouts flexíveis.

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

- elementType: Define o tipo de elemento HTML (div por padrão).
- className: Adiciona classes CSS extras ao contêiner Stack.
- children: Elementos filhos que serão renderizados dentro do contêiner.

## Dependências Utilizadas

- react-router-dom: Para gerenciamento de rotas.
- sass: Para uso de estilos com Sass.
- vite: Ferramenta de desenvolvimento para bundling rápido.

## Estrutura de Telas

Os componentes de página estão organizados na pasta src/shared/screens para uma estrutura mais modular e fácil de navegar.

## Estrutura Modular de Estilos

Este projeto utiliza **CSS Modules** com Sass para cada página e componente, garantindo que os estilos sejam aplicados de forma isolada e modular. Para adicionar estilos a uma nova página ou componente:

1. Crie um arquivo `.module.scss` na pasta do componente ou página.
2. Importe o arquivo `.module.scss` diretamente no componente para que os estilos sejam aplicados de forma escopada.

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

- src/assets/styles/main.scss: Contém o reset CSS e estilos globais.
- src/shared/screens/[Page]/[Page].module.scss: Contém estilos específicos e locais para cada página.

### Componentes Exemplo

- Home: Página inicial (/).
- About: Página “Sobre nós” (/about).
- NotFound: Página de erro para rotas não encontradas (\*).

## Observações

Este boilerplate foi configurado para simplificar a adição de novas rotas e a aplicação de estilos com Sass, aproveitando o desempenho do Vite para um desenvolvimento mais ágil.

## Estrutura de Arquivos

Abaixo está a estrutura do projeto:

    .
    ╠══ pnpm-lock.yaml
    ╠══ .gitignore
    ╠══ package.json
    ╠══ src/
    ║    ╠══ shared/
    ║    ║    ╠══ components/
    ║    ║    ║    ╠══ index.js
    ║    ║    ║    ╚══ Stack
    ║    ║    ║    ║    ╚══ index.jsx
    ║    ║    ╚══ screens
    ║    ║    ║    ╠══ NotFound/
    ║    ║    ║    ║    ╠══ index.jsx
    ║    ║    ║    ║    ╚══ NotFound.module.scss
    ║    ║    ║    ╠══ About/
    ║    ║    ║    ║    ╠══ About.module.scss
    ║    ║    ║    ║    ╚══ index.jsx
    ║    ║    ║    ╠══ Home/
    ║    ║    ║    ║    ╠══ Home.module.scss
    ║    ║    ║    ║    ╚══ index.jsx
    ║    ║    ║    ╚══ index.js
    ║    ╠══ App.jsx
    ║    ╠══ routes/
    ║    ║    ╚══ routes.jsx
    ║    ╠══ assets/
    ║    ║    ╠══ react.svg
    ║    ║    ╚══ styles
    ║    ║    ║    ╚══ main.scss
    ║    ╠══ App.css
    ║    ╠══ index.css
    ║    ╚══ main.jsx
    ╠══ eslint.config.js
    ╠══ public/
    ║    ╚══ vite.svg
    ╠══ LICENSE
    ╠══ vite.config.js
    ╠══ README.md
    ╚══ index.html

## Exportações de Componentes e Telas

Para facilitar as importações, cada pasta contém um arquivo index.js que exporta todos os componentes e telas

### Exemplo src/shared/components/index.js

```js
// TODO: Export all components from this file
export * from "./Stack";
```

### Exemplo src/shared/screens/index.js

```js
// TODO: Export all screens
export * from "./About";
export * from "./Home";
export * from "./NotFound";
```

## Licença

Este projeto está sob a licença MIT.
