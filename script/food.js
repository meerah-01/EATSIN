const enter = document.querySelector('.searchBtn');

const food = async (search = '') => {
  try{
    let url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=824adab6e7ce4afe9b6a134beb53312c'

    if (search) {
      url += `&query=${search}`
    }
    const foodLink = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    })

    const displayFood = await foodLink.json();
    
    const render = document.querySelector('.select');
    
    render.innerHTML =  displayFood.results.map(recipe => 
      `<div class="options">
          <img class="foodPic" src="${recipe.image}"/>
          <p class="title">${recipe.title}</p>
          <p class="price">$${2000}</p>
          <button class="cartBtn"> Add to Cart </button>
      </div>`
    ).join('');

  }
  catch(error) {
    console.log(error)
  }
}

enter.addEventListener('click', () => {
  const search = document.getElementById('name').value;

  food(search);
})

food();

