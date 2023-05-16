const cat=document.querySelector(".cat")
axios.get('https://jsonplaceholder.typicode.com/posts').then(resp =>{
    //console.log(resp.data[5].title)
    for (let i = 0; i < resp.data.length; i++) {
        cat.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src="https://images.gawker.com/1420725738730772911/original.jpg" alt="...">
        <div class="card-body">
          <h5 class="card-title">Who is cat?</h5>
          <p class="card-text">${resp.data[i].body}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">${resp.data[i].title}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
    }
})
