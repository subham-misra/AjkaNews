// bc99c182a4ca4c1e92d590e99b6e062c
// link- https://newsapi.org/v2/top-headlines?country=in&apiKey=bc99c182a4ca4c1e92d590e99b6e062c
//console.log("hhj");

let accordion = document.getElementById('accordion');
//console.log(accordion);
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bc99c182a4ca4c1e92d590e99b6e062c", true);
xhr.onreadystatechange = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        let articles = obj.articles;
        let newshtml = "";
        console.log(articles);
        articles.forEach(function(element,index) {
            
        
            //console.log(articles[news]);
            
            let str = `<div class="card">
            <div class="card-header" id="heading${index}">
            <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            ${element["title"]}
            </button>
            </h5>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
             <div class="card-body">
             ${element["content"]}.<a href="${element['url']}" target="_blank">Read More....</a>
            </div>
            </div>
            </div>`;

            newshtml+=str;
        });

        accordion.innerHTML=newshtml;
        
    }
    else {
        console.log("error!!!!");
    }
}
xhr.send();

