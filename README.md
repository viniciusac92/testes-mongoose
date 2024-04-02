# Interagindo com MongoDB via Mongoose

Este repositório contém um script de teste em Node.js para verificar a integridade e o funcionamento de um banco de dados MongoDB usando o pacote Mongoose.

## Pré-requisitos

Certifique-se de ter o Node.js e o Docker instalados em sua máquina antes de prosseguir.

## Utilização

Para utilizar o script, siga estas etapas:

1. Com a porta 27017 livre, inicie um contêiner Docker com uma instância do MongoDB:

```bash
docker run --detach --name novo-mongodb-em-container-docker -p 27017:27017 mongo:latest


"Se desejar acompanhar logs do container:"

docker run --name novo-mongodb-em-container-docker -p 27017:27017 mongo:latest
```

2. Instale o mongoose:

```bash
npm install
```

3. Execute o script:

```bash
npm start
```
