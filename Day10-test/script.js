const urlApi = 'https://tobitheme.net/api/characters.json';
fetch(urlApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(harryPotter) {
        console.log(harryPotter);
        let nhanVat = harryPotter.data;
        console.log(nhanVat);
        let htmls = nhanVat.map(function(nhanVat) {
            return `<div>
            <div>
            <ul>
            <h2>${nhanVat.name}</h2>
            <p>${nhanVat.house}</p>
            </ul>
            </div>
            <div><img src="${nhanVat.image}" alt="${nhanVat.name}"></div>
            </div>`;
        });
        let html = htmls.join('');
        document.getElementById('character').innerHTML = html;
    })
    .catch(function(err) {
        console.log('Lỗi');
    })