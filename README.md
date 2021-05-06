# Curso Full Cycle 2.0

## Desafio II

Neste desafio a proposta era criar um container com Nginx (proxy reverso) para acessar uma plaicação em Node Js, que por sua vez, 
teria que acessar um outro container onde estaria rodando MySQL.

Quando acessar a aplicação Node Js, a mesma deveria criar um novo registro na table People no MySQL e depois apresentar uma mensagem para o usuário.

Fui um pouco além.

O que fiz é que quando acessamos a aplicação Node Js, via browser, ela apaga todos os registro da tabela e cria um novo registro na table. 
O nome pode ser alterado em uma variável (peoples) no index.js para o nome que quiser.
E depois do registro ser criado ele é apresentado como resultado na página do browser, como podem ver abaixo:

** Hello *nome*!! Full Cycle Rocks!! **

Foi um ótimo desafio e consegui contornar todos os problemas que tive. O problema que mais quebrei a cabeço, foi em função do meu setup, onde rodo o Docker em um servidor Ubuntu,
e não me toquei que teria que liberar a porta 3000 no firewall para o Node Js, uma vez que seria uma comunição interna entre container. Mas liberei a porta e tudo rodou limpo.

Busquei informações no pfa e o nosso amigo Google para utilizar o Dockerize para entender melhor o funcionamento dos container e a comunicação entre eles. Foi muito legal, adorei.

*Obs.: Mas lendo novamente o desafio, percebi que querem uma lista com todos os nomes que estão registrados no banco de dados. Irem fazer uma nova versão para cumprir as metas do desafio.*

*Obs.: Criei outputs de todos os processos do Node Js no terminal.*

# Rodar Aplicação

Para rodar a aplicação basta executar o comando abaixo:

docker-compose up --build (para ter o log no terminal)

docker-compose up -d --build (para liberar o terminal)

No browser: [http://localhost:8080](http://localhost:8080)

Obrigado e vamos nessa
