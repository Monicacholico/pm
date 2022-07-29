export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

let today = new Date().toDateString();
let today1 = new Date().toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric'});
let today2 = new Date().toISOString();
console.log(today);
console.log(today1);
console.log(today2);
let todayDate = today2.slice(0, 10);
console.log(today2.slice(0, 10));

const articleTemplate = document.getElementById('article');
const articleDisplayer = document.getElementById('articles');
// const API_KEY = 7d3296e1e55d4d57a6c3c7c7e814f2fd;
const executeApiEn = () => {
  const url = `https://newsapi.org/v2/everything?q=gender&from=${todayDate}&to=${todayDate}&searchIn=title&apiKey=7d3296e1e55d4d57a6c3c7c7e814f2fd`;
  const options = {
    method: "GET",
    header: {
      accept: "application/json"
    }
  }
  return fetch(url, options).then(
    response => {
      return response.json();
    }
  ).then(data => {
    console.log(data);
    const allArticles = data.articles;
    const eachArticle = allArticles.map( article => {
      const articleEl = document.importNode(articleTemplate.content, true);
      console.log(articleEl)
      articleEl.querySelector('h2').textContent = article.title;
      articleEl.querySelector('p').textContent = article.content;
      articleEl.querySelector('small').textContent = article.author;
      articleDisplayer.append(articleEl);
    })
    // console.log(eachArticle);

  })

} 

executeApiEn();

const articleTemplateEs = document.getElementById('articleES');
const articleDisplayerEs = document.getElementById('articlesEs');
// const API_KEY = 7d3296e1e55d4d57a6c3c7c7e814f2fd;
const executeApiEs = () => {
  const url = `https://newsapi.org/v2/everything?q=genero&searchIn=title&language=es&apiKey=7d3296e1e55d4d57a6c3c7c7e814f2fd`;
  const options = {
    method: "GET",
    header: {
      accept: "application/json"
    }
  }
  return fetch(url, options).then(
    response => {
      return response.json();
    }
  ).then(data => {
    console.log(data);
    const allArticlesEs = data.articles;
    const eachArticleEs = allArticlesEs.map( articleEs => {
      const articleElEs = document.importNode(articleTemplateEs.content, true);
      console.log(articleElEs)
      articleElEs.querySelector('h2').textContent = articleEs.title;
      articleElEs.querySelector('p').textContent = articleEs.content;
      articleElEs.querySelector('small').textContent = articleEs.author;
      articleDisplayerEs.append(articleElEs);
    })
    // console.log(eachArticle);

  })

} 

executeApiEs();