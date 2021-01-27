# Desafio Software Engineer - BemolTalk

## Descrição

_BemolTalk_ é uma aplicação para a interação entre funcionários e clientes da Bemol através de canais.

Por enquanto, apenas uma amostra da criação, listagem e exclusão de usuários é apresentada neste projeto.

A execução do projeto é explicada nas seções a seguir.

## Backend

- O código do backend foi desenvolvido utilizando a versão 3.8 do Python e a versão 3.1.5 do [Django Framework](https://www.djangoproject.com/);
- Dentro da pasta _backend_, executar os seguintes comandos:

$ ```python manage.py migrate user```

$ ```python manage.py runserver```

- Após isto, o backend deve estar sendo executado com sucesso na porta 8000 do localhost.

## Frontend

- O código do frontend foi desenvolvido utilizando [React](https://pt-br.reactjs.org/), na versão 15.6 do node e 7.4 do npm;
- Para a demonstração de funcionamento do código, executar os seguintes comandos no diretório _bemol-front_:

$ ```npm install```

$ ```npm start```

- Após isto, o frontend do sistema deve estar sendo executado na porta 3000 do localhost.