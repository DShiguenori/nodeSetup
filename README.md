# **Setup Inicial de um Projeto**

### Colinha para quando for criar novos projetos em node

-   Cria a pasta do projeto. Abre a pasta nova. Chama o VsCode abrindo a pasta.

```
mkdir nome
cd nome
code .
```

-   Inicializa o git

```
git init
```

-   Inicializa o npm/yarn

```
npm init -y
```

-   Instale o typescript e inicialize-o

```
npm i typescript
tsc --init
```

-   (opcional) Instale o express

```
npm i express
npm i -D @types/express
```

-   Instale um "watcher" que re-executa o projeto quando acontecer uma modificação no código

```
npm i -D ts-node-dev
```

-   Atualize o package com o script de inicialização

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

-   Atualizando o arquivo tsconfig.json

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

-   Adicione o paths para determinar atalhos para importações.
-   Para ter compatibilidade com o ts-node-dev, instale o tsconfig-paths e atualize o script

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

-   Instale o es-lint e dê um start

```
npm i -D eslint
npm init @eslint/config
```

-   Instale todos os pacotes de es-lint

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

-   Instale o jest

```
npm i -D jest
npx jest --init
```
