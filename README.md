# **Setup Inicial de um Projeto**

### Colinha para quando for criar novos projetos em node

- Criar a pasta do projeto, e abrí-la

```
mkdir nome
cd nome
```

- Inicializar o git

```
git init
```

- Inicializar o npm/yarn

```
npm init -y
```

- Abra a pasta no VsCode

```
code .
```

- Instale o typescript e inicialize-o

```
npm i typescript
tsc --init
```

- (opcional) Instale o express

```
npm i express
npm i -D @types/express
```

- Instale um "watcher" que re-executa o projeto quando acontecer uma modificação no código

```
npm i -D ts-node-dev
```

- Atualize o package com o script de inicialização

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

Continuar daqui

https://youtu.be/rCeGfFk-uCk?t=517

```

```

Try to put a blank line before...

# Heading

...and after a heading.

...and after a heading.
