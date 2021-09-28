# :mouse2: Pokenitos  

## :page_with_curl: Descrição
Projeto desenvolvido usando a PokéAPI para apresentar dados dos 151 primeirospokémons da API externa em uma página, com possibilidade de filtrar os pokémons por nome. Após clicar no botão "Ver Evoluções", são mostradas informações adicionais sobre o pokémon (como o tipo, o habitat e uma breve descrição), além das evoluções da espécie.  
[Link da página](https://pokenitos.vercel.app)

## :books: Bibliotecas utilizadas
Para a parte visual, foram utilizadas as bibliotecas Material UI e Styled components, e para os testes, a biblioteca Jest.

## :game_die: Rotas utilizadas na API
[Listagem dos pokenitos](https://pokeapi.co/api/v2/pokemon?limit=151)  
[Detalhes da espécie](https://pokeapi.co/api/v2/pokemon-species/${id}/)  
[Tipo do Pokémon](https://pokeapi.co/api/v2/pokemon/${id})

## :wrench: Configuração do Projeto

```
yarn install
```

### Compila e faz hot-reloads para desenvolvimento
```
yarn start
```

### Lançar testes  
```
yarn test
```

### Compila e minimiza para produção
```
yarn build
```


## :white_check_mark: Testes  
- [X] EvolutionsResponseParser  
- [X] TypeResponseParser  
- [X] IdFinder  
- [X] Searchbox (filtragem)  
- [X] Listagem de pokémons  
- [X] Detalhes de pokémons  
- [X] Tipos de pokémons  
- [X] Evoluções de pokémons  
- [ ] PokemonCard

