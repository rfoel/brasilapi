# brasilapi

[![npm](https://img.shields.io/npm/v/brasilapi)](https://www.npmjs.com/brasilapi)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/brasilapi)](https://www.npmjs.com/brasilapi)
[![NPM](https://img.shields.io/npm/l/brasilapi)](LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Vamos transformar o Brasil em uma API?

Essa biblioteca é um wrapper da REST API do [BrasilAPI](https://github.com/BrasilAPI/BrasilAPI).

## Instalação

Para instalar o pacote rode:

```
npm install brasilapi
```

ou

```
yarn add brasilapi
```

## Início rápido

```js
import { BrasilAPI } from 'brasilapi'

const brasilapi = new BrasilAPI()

;(async () => {
  try {
    const data = await brasilapi.cep('01001-000')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()
```

## Métodos disponíveis

### CEP

Busca por CEP com múltiplos providers de fallback.

#### Exemplo

```js
brasilapi.cep('01001-000')
```

### Bancos

Busca por dados dos bancos brasileiros direto na base de dados do Bacen.

#### Lista de bancos

```js
brasilapi.banks()
```

#### Busca por um banco específico passando o código

```js
brasilapi.banks('260')
```

## Contribuindo

Issues e Pull requests são bem-vindos.

## Licença

[MIT](https://github.com/rfoel/brasilapi/blob/main/LICENSE)
