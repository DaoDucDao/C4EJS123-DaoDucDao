// const favRecipe = [];


// window["favRecipe"] = eval("(" + localStorage.getItem("favRecipe") + ")");
// window["pushIntoArray"] = eval(localStorage.getItem("pushIntoArray"));

favListItems = document.getElementById('meal-fav-items');

function addEventForAddToFavBtn() {
    const Favlist = document.getElementById('action_add_favourite');
    const getFav = document.querySelectorAll('#add-to-Fav')

    getFav.forEach(addFavBtn => {
        addFavBtn.addEventListener('click', addtoFavList);
    });

    function addtoFavList(e) {
        e.preventDefault();
            let mealItem = e.target.parentElement.parentElement;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.meals); // check what is the data meal
                    const arrId = favRecipe.map(recipe => recipe.idMeal);
                    if (data.meals.length > 0 && !arrId.includes(data.meals[0].id)) {
                        favRecipe.push(data.meals[0]);
                        console.log(favRecipe); //check the array 
                    }
                });
    }
}

let htmlFav = '';
for (let i =0 ; i < favRecipe.length; i++){     // push the element in the array into Favourite html
    html1 += `
                    <div class = "meal-item" data-id = "${favRecipe[i].idMeal}">
                        <div class = "meal-img">
                            <img src = "${favRecipe[i].strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${favRecipe[i].strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                            <button type="button" class ="remove-fav-btn" id = "remove-from-Fav">Remove from favourite</button>
                        </div>
                    </div>
                `;
}

favListItems.innerhtml= htmlFav;  // overwrite the html with above content

