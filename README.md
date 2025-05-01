# video-platform

Esse projeto foi feito para resolver o desafio técnico proposto pela BSA Tech e desenvolver uma plataforma de visualização de vídeos utilizando as tecnologias:

- JavaScript/TypeScript
- React
- Next.js 15
- React Query

O layout em si está simples, pois foquei nas funcionalidades e como não tinha um design a ser seguido, optei por deixar mais simples e direto. 

Foram utilizados dados mockados visando facilitar a replicação do projeto sem necessidade de criar chaves de API no google e poder executar o projeto diretamente.


## Requisitos para executar o projeto
Para rodar este projeto localmente, é necessário ter o Docker e o Docker Compose instalados em sua máquina.

Certifique-se de que ambos estejam instalados e funcionando corretamente antes de continuar.

## Requisitos de versão

- Docker: >= 20.10.0
- Docker Compose: >= 2.0.0

Você pode conferir suas versões executando:
`docker --version` e
`docker compose version`


## Instruções para executar o projeto localmente

Certifique-se de que a porta 3000 está disponível e, preferencialmente através do terminal, siga as instruções abaixo:

- Escolha a pasta onde deseja baixar o projeto e clone o repositório utilizando o comando `git clone git@github.com:renatoguedes-dev/video-platform.git`

- Acesse a pasta do projeto baixado com o comando `cd video-platform`

- Execute o comando do docker para iniciar o projeto `docker compose up --build`

- Acesse o endereço http://localhost:3000/ no seu navegador (preferencialmente o Google Chrome ou Firefox) para acessar o projeto.

- Para interromper a aplicação e remover os containers, pressione `Ctrl+C` no terminal ou execute `docker compose down`

- Caso deseje excluir a imagem criada após a utilização, a imagem ficará salva no docker com o nome "teste_tecnico_bsatech_renato_node"

## Possíveis problemas

- Em caso de erro de permissão com Docker Compose, execute o terminal como administrador (Windows) ou use sudo (Linux/Mac).