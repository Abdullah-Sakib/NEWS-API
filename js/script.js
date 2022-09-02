const search = ()=> {
  const inputValue = document.getElementById('input-field').value;
  loadData(inputValue);
};

document.getElementById('input-field').addEventListener('keypress', (e) => {
  const inputValue = document.getElementById('input-field').value;
  if(e.key === 'Enter'){
    loadData(inputValue);
  }
})

const loadData = topic => {
  fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=c612a5c4fb764d8c8dc0446a96051ee8`)
  .then(res => res.json())
  .then(data => displayNews(data.articles))
}


const displayNews = data => {
  // console.log(data);
  const notFoundImg = "https://cdn.dribbble.com/users/246611/screenshots/10742148/media/d64b1bc4087cbf2c574a1688ecabc8ee.png?compress=1&resize=400x300";
  const newsContainer = document.getElementById('news-container');
  newsContainer.textContent = '';
  data.forEach(element => {
    console.log(element.urlToImage);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
       <img src="${element.urlToImage === null ? notFoundImg : element.urlToImage}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p class="card-text">${element.content}</p>
       </div>
       <div class="card-footer">
        <small class="text-muted">${element.author === null ? 'Unknown' : element.author}</small>
       </div>
    </div>
    `;
    newsContainer.appendChild(div);
  });
}


