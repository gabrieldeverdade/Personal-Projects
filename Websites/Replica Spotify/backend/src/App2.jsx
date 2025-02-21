import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>Olá Mundo</h1>

// Nomeação de Componentes
// PascalCase

// Nomeação de variável, Função...
// camelCase

// export default posso importar com qualquer nome e sem chaves
// export "sem default" só posso importar entre chaves e com o nome exportado

// self closing tag <Header></Header> ou </Header>

// Nomeação de classes em CSS
// Metodologia BEM (BLOCKS, ELEMENTS, MODIFIERS)
// bloco__elementos--modificador
// header__link
// header__link--small
// item-list__header
// nomes compostos são separados por -

// tag vazia em React se chama Fragment

//Componentes recebem "props"

// Antes de fazer o MAP do ItemList
// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

// Spread Operator
// ...
