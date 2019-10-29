# Backend

Código do backend para o [aplicativo](http://github.com) e [dashboard](http://github.com) do Insper Mileage.

*Link encurtado: [`https://git.io/0`](https://git.io/0)*

*Read this in [**English**](README.md) and [**Portuguese**](README.pt.md)*

## Começando

Essas instruções vão fazer com que você tenha uma cópia do projeto rodando em sua máquina local para desevolvimento e testes. 
Veja o tópico de [*deployment*](#deployment) para ver como colocar o projeto em produção.

### Pré-Requisitos

Para executar o projeto, você precisa ter instalado em sua máquina: NodeJS e Yarn ou Docker, que criará um container com as dependências:

#### NodeJS (v10.x.x)
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Yarn (v1.16.0)
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```

#### Docker e Docker Compose
Para facilitar a instalação em um sistema Ubuntu 18.04 - 18.10, execute o programa:
```
./docker-install
```

### Instalação e execução
Crie um arquivo .env com o seguinte texto:
```
MONGO_URL=<URL_DO_BANCO_DE_DADOS_MONGO>
PORT=3333
```

#### Executando na máquina local
Para instalar as dependências do projeto e executá-lo:
```
$ yarn
$ yarn start
```

Para executar em modo desenvolvedor, em que a cada modificação de arquivo o programa é reiniciado:
```
$ yarn dev
```

#### Executando em Docker
Para executar o projeto utilizando Docker, builde a imagem:
```
$ docker-compose build
```

Para iniciar o container:
```
$ docker-compose up -d
```
**obs:** Utilize a flag -d para executar em segundo plano.


### Demonstração


## Integridade do projeto

### Testes

[Quais são os testes e porque são importantes]

### Executando os testes

[Como executar testes automatizados do projeto]


## Deployment

[Como fazer o deploy do projeto para um ambiente de produção]


## Desenvolvido com
* NodeJS (Express, Mongoose)
* MongoDB
* Docker

## Contribuindo

Por favor leia [CONTRIBUTING](https://gist.github.com/PurpleBooth/b24679402957c63ec426) para mais detalhes sobre o nosso código de conduta e processo para submeter um *Pull Request*.


## Licença
Esse projeto está licenciado sobre a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
