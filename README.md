## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [Nestjs](https://nestjs.com)
- [MySQL](https://www.mysql.com)
- [Prisma](https://www.prisma.io)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Brunoocn/viagens-promo-case-back.git
$ cd viagens-promo-case-back
```

Para iniciá-lo, siga os passos abaixo:

```bash
# subir o banco com o docker
$ docker-compose up -d
# Instalar as dependências
$ yarn install
# Execute o seed para popular o banco com os produtos
$ yarn seed
# Iniciar o projeto
$ yarn start:dev
```

O server irá subir na porta http://localhost:3005.

Vale lembrar que você deve configurar .env como o .env.exemple