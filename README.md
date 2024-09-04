# React: Local Storage, Eventos e estado global

## Desafio DSFilter
Você deverá criar um projeto ReactJS, usando o Vite, estruturado em componentes. Você deve usar o script abaixo para implementar a base de dados de produtos, 
bem como a função que busca os produtos por preço:

https://gist.github.com/acenelio/fa7d03cb660b35cd9986623f1f07aeb3

![image](https://raw.githubusercontent.com/anderson-aguiar/dsfilter/main/src/assets/img1.png)

O corpo da tela deve ser um componente (na imagem abaixo: ListingBody) que possui dois filhos: o card de filtro, e o card de listagem. Você DEVE implementar um
evento para fazer o componente de filtro notificar os parâmetros de filtragem dos produtos:

![image](https://raw.githubusercontent.com/anderson-aguiar/dsfilter/main/src/assets/img2.png)

No cabeçalho DEVE aparecer o número de produtos listados. Esse número DEVE observar e reagir às mudanças na listagem. Para isto, mantenha um estado global 
utilizando a Context API.

![image](https://raw.githubusercontent.com/anderson-aguiar/dsfilter/main/src/assets/img3.png)

Checklist:
1) O projeto deve conter os componentes principais (pode haver outros conforme você quiser):
- Cabeçalho
- Corpo da tela de listagem
- Card de filtro
- Card de listagem
2) A lista de produtos deve ser passada como Prop para o card de listagem.
3) O card de filtro deve emitir um evento onFilter(min, max). Este evento serve para comunicar os preços mínimo e máximo sempre que o formulário for submetido.
4) Context API utilizada para manter o estado global do número de produtos mostrados na tela. Sempre que for feita uma nova filtragem e o número de produtos
listados mudar, o número deve ser atualizado no cabeçalho.

Criar conforme design Figma abaixo:

[Ver o layout no figma...](https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter)
