function clickHandler(searchTaxt) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTaxt}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displyData(data.meals))
}
const displyData = (meals) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    meals.forEach(meal => {
        const meslDiv = document.createElement('div');
        meslDiv.classList.add('col');
        meslDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p>${meal.idMeal}</p>
          <p>${meal.strArea}</p>
          <p>${meal.strCategory}</p>
          <button type="button" class="btn btn-primary" onclick="loadModelDetels2(${meal.idMeal})" data-bs-toggle="modal" data-bs-target="#mealsModal">
            Launch static backdrop modal</button>
        </div>
      </div>
        `
        cardContainer.appendChild(meslDiv)
    });
}
const SearchHendel = () => {
    const SearchFild = document.getElementById('Search-fild');
    const SearchFildText = SearchFild.value;
    SearchFildText.value = '';
    clickHandler(SearchFildText)
}

// const loadModelDetels = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => desplayMealDetels(data.meals[0]))
//         .catch(error => console.log(error))
// }

const loadModelDetels2 = async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        desplayMealDetels(data.meals[0]);
    }
    catch(error){
        console.log(error)
    }
}
const desplayMealDetels = meal => {
    const modelTitel = document.getElementById('mealsModalLabel');
    modelTitel.innerText = meal.strMeal;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}"/>
 `
}
clickHandler('fish')