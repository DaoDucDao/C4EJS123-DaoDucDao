let htmlFav = '';
favListItems = document.getElementById('meal-fav-items');

let favRecipe = localStorage.getItem('favRecipe');  
favRecipe = JSON.parse(favRecipe);
console.log(favRecipe);

for (let i = 0; i < favRecipe.length; i++) {     // push the element in the array into Favourite html
    htmlFav += `
        <div class = "meal-item" id = "${favRecipe[i].idMeal}" >
            <div class = "meal-img">
                <img src = "${favRecipe[i].strMealThumb}" alt = "food">
            </div>
            <div class = "meal-name">
                <h3>${favRecipe[i].strMeal}</h3>
                <a href = "#" class = "recipe-btn">Get Recipe</a>
                <button type="button" class ="remove-fav-btn" id = "${favRecipe[i].idMeal}" 
                    >Remove from favourite</button>
            </div>
        </div>
    `;
}
favListItems.innerHTML = htmlFav;

if (favRecipe){
    removeEventforRemoveBtn();
}
function removeEventforRemoveBtn() {
    const removeFav = document.querySelectorAll('.remove-fav-btn');

    removeFav.forEach(removeFavBtn => {
        removeFavBtn.addEventListener('click', removeFromFavList);
    });
}

function removeFromFavList(e) {
    // e.preventDefault();
    console.log(e);
    // favRecipe.splice(  )
    const node = document.getElementById(e.target.id);
    favListItems.removeChild(node);
    const idx = favRecipe.findIndex(recipe => recipe.idMeal === e.target.id);
    favRecipe.splice(idx, 1);
    localStorage.setItem("favRecipe", JSON.stringify(favRecipe));
}
