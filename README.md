# vaggon-desafio-back

Passos para configurar e executar o projeto:

1. Criar um arquivo .env na raíz do projeto e adicionar as seguintes linhas:

>SERVER_PORT=8000<br>
DB_USERNAME=root<br>
DB_PASSWORD=<br>
DB_NAME=vaggondb<br>
DB_HOST=127.0.0.1<br>
SECRET_JWT=código-aqui<br>

2. Iniciar o MySQL, criar o banco de acordo com o nome descrito no .env e executar o comando ``npx sequelize-cli db:migrate`` no terminal

3. Executar o comando ``npm start``
