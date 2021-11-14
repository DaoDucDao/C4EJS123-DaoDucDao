function addEventForAddToFavBtn() {
    const favRecipe = [];
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
                    console.log(data.meals);
                    const arrId = favRecipe.map(recipe => recipe.idMeal);
                    if (data.meals.length > 0 && !arrId.includes(data.meals[0].id)) {
                        favRecipe.push(data.meals[0])
                    }


                //    for ( recipe of favRecipe) {
                //        if (favRecipe.includes(data.meals)){

                //        }
                //    }
                    
                });
    }
}

// const addFavouriteRecipe = (recipe) => {
//     const newFavouritelist = [ ...favRecipe];
//     setFavourites(newFavouritelist);
//     return (
//         <div className='container-fluid recipe-app'>
//             <div className='row'>
//                 <Recipelist
//                     handleFavouritesClick={addFavouriteRecipe}
//                 />
//             </div>
//             <div className='row d-flex align-items-center mt-4 mb-4'>
//                 <REcipeListHeading heading='Favourites' />
//             </div>
//         </div>
//     );
// }

// export default addfavourite; 
