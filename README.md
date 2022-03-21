# **Setup Inicial de um Projeto**

### Colinha para quando for criar novos projetos em node

---

-   Criar a pasta do projeto.
    -   Abrir a pasta nova.
    -   Chamar o VsCode abrindo a pasta.

```
mkdir nome
cd nome
code .
```

-   Inicializar o git

```
git init
```

-   Inicializar o npm/yarn

```
npm init -y
```

-   Instalar o typescript e inicializar

```
npm i typescript
tsc --init
```

-   (opcional) Instalar o express

```
npm i express
npm i -D @types/express
```

-   Instalar um "watcher" que re-executa o projeto quando acontecer uma modificação no código

```
npm i -D ts-node-dev
```

-   Atualizar o package com o script de inicialização

    -- respawn Reinicia o projeto totalmente, não deixa processos vivos

    -- transpile-only Faz com que o ts-node-dev não procure erros no código, só executa e deixa mais rápido. Erros de typagem podemos tratar num es-lint

    --ignore-watch node_modules Ignora modificações na pasta node_modules

```
{
...etc,
 "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules src/server.ts"
  },
 ...etc,
}
```

-   Atualizar o arquivo tsconfig.json

    -   target

    -   lib

    -   experimentalDecorators

    -   emitDecoratorMetadata

    -   rootDir

    -   allowJs

    -   removeComments

    -   outDir

    -   esModuleInterop

    -   forceConsistentCasingInFileNames

    -   strict Diego coloca false, mas acredito que desligar isso perde muito da funcionalidade do typescript de segurar erros. É mais recomendado para devs avançados.

    -   skipLibCheck

    -   resolveJsonModule

    -   baseUrl

    -   typeRoots

-   Adicionar o paths para determinar atalhos para importações.
-   Para ter compatibilidade com o ts-node-dev, instalar o tsconfig-paths e atualize o script

```
npm i -D ts-node-dev
```

```
{
...etc,
 "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules src/server.ts"
  },
 ...etc,
}
```

-   Instalar o es-lint e inicializar

```
npm i -D eslint
npm init @eslint/config
```

-   Instalar todos os pacotes de es-lint

```
eslint-config-airbnb-base
eslint-config-google
eslint-config-prettier
eslint-import-resolver-typescript
eslint-plugin-es
eslint-plugin-filenames
eslint-plugin-import
eslint-plugin-max-params-no-constructor
eslint-plugin-prettier
eslint-plugin-tsdoc
```

-   Instalar o jest
    -   Copiar como está o jest.config.json desse projeto, copie também os scripts de test e testWatch
    -   Lembre-se de configurar as importações que estamos fazendo via alias (propriedade moduleNameMapper) no jest.config.json

```
npm i -D jest
npx jest --init
```

-   Instalar o babel,
    -   Usado para fazer alguns ajustes no código JS que o typescript gera (como ajuste nas importações com @)
    -   Atualizar o comando de build no script do package, para ele executar o babel

```
npm i -D @babel/cli
@babel/node
@babel/preset-env
@babel/preset-typescript
babel-plugin-module-resolver
```

```
"scripts": {
    "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
    "start": "node dist/server.js",
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules src/server.ts",
    "lint": "eslint . --ext .ts --config .eslintrc.json",
    "lintFix": "eslint . --ext .ts --config .eslintrc.json --fix",
    "test": "jest --config jest.config.json",
    "testWatch": "jest --config jest.config.json --passWithNoTests --no-cache --runInBand --watch"
  },
```
