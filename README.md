# Quanto vou pagar?

Página desenvolvida em ReactJs para simular o valor de uma ligação para determinados DDDs, respeitando as seguintes regras:

1. O DDD 11 pode realizar chamada para todos, exceto pra ele mesmo;
2. Todos os outros DDDs podem realizar chamada para o 11;
3. Todos os campos são obrigatórios;

### Exemplos de simulações

| Origem | Destino | Minutos | Plano        | Valor Sem Plano | Valor Com Plano |
| ------ | ------- | ------- | ------------ | --------------- | --------------- |
| 011    | 016     | 53      | FaleMais 30  | R\$100,70       | R\$48,07        |
| 011    | 017     | 99      | FaleMais 60  | R\$168,30       | R\$72,93        |
| 018    | 016     | 25      | FaleMais 60  | -               | -               |
| 017    | 011     | 145     | FaleMais 120 | R\$391,50       | R\$74,25        |
| 018    | 011     | 15      | FaleMais 30  | R\$28,50        | R\$0,00         |

## Instalação/Execução

### Versão Online

- Para visualizar a versão online do projeto hospedada no [Heroku](https://heroku.com), acesse: [Callprice](https://callprice.herokuapp.com/)

### Servidor local

- Acesse a pasta onde foi descompactado o projeto
- Execute o comando abaixo para instalar as dependências:

```
npm install
or
yarn install
```

- Agora é só rodar o comando:

```
npm run start
or
yarn start
```

## Planos e valores

Foi criado um arquivo chamado **database.json** dentro do diretório **_src_**, que armazena as informações de valores para cada tipo de ligação e também de planos existentes.
Caso seja necessário alterar ou adicionar novas informações de valores e planos, basta editar este arquivo.

## Testes

Para executar os testes, acesse a pasta do projeto e execute o seguinte comando:

```
npm run test
or
yarn test
```

Após rodar os testes, é gerado um relatório em formato _HTML_ que pode ser encontrado na pasta:

```
__tests__/coverage/lcov-report/index.html
```
