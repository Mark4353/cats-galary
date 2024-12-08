const cats = [
  {
    catBreed: "Мейкун",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Британська короткошерста",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Сіамська кішка",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Сфінкс (канадський сфінкс)",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Бенгальська кішка",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Персидська кішка",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Абіссінська кішка",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Шотландська висловуха",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
  {
    catBreed: "Рэгдолл (лялькова кішка)",
    catPhoto: `https://www.google.com/imgres?q=%D0%9C%D0%B5%D0%B9%D0%BD%20%D0%9A%D1%83%D0%BD&imgurl=https%3A%2F%2Fzoobonus.ua%2Fstorage%2Fbreeds%2Fimages%2Fbig%2FwpVaiFh2aXwsgglP51mV8GDTGehnbXn51Q2fisUf.jpeg&imgrefurl=https%3A%2F%2Fzoobonus.ua%2Fru%2Fbreed%2Fmein-kun&docid=ol9SAMMsrpmc6M&tbnid=B6Keg8M86W2ycM&vet=12ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA..i&w=815&h=815&hcb=2&ved=2ahUKEwi4yoCwhZiKAxUCGxAIHYhaEP8QM3oECFQQAA`,
  },
];
const listElement = document.createElement("ul");
cats.forEach((cat) => {
  listElement.insertAdjacentHTML(
    "beforeend",
    `<li><article><h2>${cat.catBreed}</h2><img src = "${cat.catPhoto}"/></article></li>`
  );

});
console.log(listElement);

const page = document.querySelector("body").prepend(listElement);

// const listElement = document.createElement("ul");
// cats.map(({catBreed, catPhoto}) =>{
//     const liElement = `<li><article><h2>${catBreed}</h2><img src = "${catPhoto}"/></article></li>`
// return liElement;
// });


