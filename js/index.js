const lodeAllData = (searchMeals) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`
     fetch(url)
     .then(res =>res.json())
     .then(data => disPlayModifayData(data.meals))

}
const disPlayModifayData = meals =>{
  const cardBody =  document.getElementById('body-title')
  cardBody.innerText ='';
meals.forEach(meal => {
    // console.log(meal)
    const mealsDiv = document.createElement('div')
  
    mealsDiv.classList.add('col')
    mealsDiv.innerHTML = `
    <div class="col">
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p onclick="lodeModalData(${meal.idMeal})" class="text-warning text-decoration-underline" data-bs-toggle="modal" data-bs-target="#mealsDitels">View Details</P>

      </div>
    </div>
  </div>
    
    `
    cardBody.appendChild(mealsDiv)
    
});


}

const searchItems = () =>{
 const search = document.getElementById('search-bar').value
 console.log(search)
 lodeAllData(search)
 
}
const lodeModalData = idMeal =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch (url)
  .then(res => res.json())
  .then(data =>displayModelData(data.meals[0]));

}
const displayModelData = meal =>{
  document.getElementById('mealsDitelsLabel').innerText = meal.strMeal
  console.log(meal)

     const mealsModifay = document.getElementById('modal-modifayy')
     mealsModifay.innerHTML=`
     <img src="${meal.strMealThumb}" class="img-fluid" alt="...">
     <P> <span class="fw-bold"> Category :</sapn>${meal.strArea} </p>
     <P> <span class="fw-bold"> Instructions :</sapn> AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

     <P><span class=""> YouTube :<a href="${meal.strYoutube}">${meal.strYoutube}</a></sapn></p>
     

     
     `
  

}



lodeAllData('chi')