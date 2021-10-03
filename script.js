
let day = new Date();
let date = day.toDateString();
document.getElementById("date").innerHTML = date;

let home = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let world = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let politics = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let magazine = 'https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let health = 'https://api.nytimes.com/svc/topstories/v2/health.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let food = 'https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let sci = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let tech = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let arts = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let fashion = 'https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let travel = 'https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

let sports = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=Zr3pzfLD82dDoMO0LLR7IvpjcbxXixkQ'

toogle(home);

function toogle(url) {

  fetch(url).then((data) => {
    console.log(data);
    return data.json();
  }).then((completedata) => {
    // console.log(completedata);
    // console.log(completedata.results[0].title);
    // console.log(completedata.results[0].abstract);
    // console.log(completedata.results[0].multimedia[0].url);
  
    

    let data1="";
    completedata.results.map((values)=> {
      data1 += `<div class="card mb-3" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title text-uppercase">${values.section}</h4>
            <h5 class="card-title ">${values.title}</h5>
            <h6 class="card-title fst-italic"> - ${values.byline}</h6>
            <p class="card-text text-muted fst-italic">${values.created_date}</p>
            <h6 class="card-title">${values.item_type}</h6>
            <p class="card-text">${values.abstract}</p>
            <a href="${values.short_url}" target="_blank" >continue reading</a>
          </div>
        </div>
        <div class="col-md-4">
          <img src="${values.multimedia[0].url}" class="img-fluid  img-thumbnail" alt="image" title="${values.multimedia[0].caption}">
        </div>
      </div>
    </div>
    `
    });
    document.getElementById("cards").innerHTML=data1;
    
    const loading = document.getElementById("load")
    const content = document.getElementById("cards")
    setTimeout(() =>{
       loading.remove();
        content.style.display = "block";
       },1000)

  })
}


function toogle1(url) {

  fetch(url).then((data) => {
    // console.log(data);
    return data.json();
  }).then((completedata) => {
    // console.log(completedata);
    // console.log(completedata.results[0].title);
    // console.log(completedata.results[0].abstract);
    // console.log(completedata.results[0].multimedia[0].url);
  
    

    let data2="";
    completedata.results.map((values)=> {
      data2 += `<div class="card mb-3" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title text-uppercase">${values.section}</h4>
            <h5 class="card-title ">${values.title}</h5>
            <h6 class="card-title fst-italic"> - ${values.byline}</h6>
            <p class="card-text text-muted fst-italic">${values.created_date}</p>
            <h6 class="card-title">${values.item_type}</h6>
            <p class="card-text">${values.abstract}</p>
            <a href="${values.short_url}" target="_blank" >continue reading</a>
          </div>
        </div>
        <div class="col-md-4">
          <img src="http://ropercenter.cornell.edu/sites/default/files/styles/800x600/public/Images/New-York-Times-Logo8x6_0.png?itok=7YqGOSMA" class="img-fluid  img-thumbnail" alt="image" >
        </div>
      </div>
    </div>
    `
    });
    document.getElementById("cards").innerHTML=data2;
    

  })
}
toogle1();

