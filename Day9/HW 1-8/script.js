// 1) Learning promise
{
    let promise = new Promise(function(resolved, reject) {
        setTimeout(() =>  {
            resolved('Promise syntax is the greatest');
        }, 5000);
        console.log(resolved);
    });
    
    async function promiseTest() {
        console.log('pending');
        let result = await promise;
        console.log(result);
    }
    promiseTest();
    
    promise.then(
        result => {console.log(result)},
        error => {console.log(error)}
        )
    }
// 2) FETCH 
{
    async function fetchThis() {
        console.log('loading');
        const result = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php'); 
        return await result.json();
    }
    fetchThis().then(
        result => console.log(result)
        );
    }
// 4)
{
    const randomNum = () =>{
        return Math.floor(Math.random()*(20-10+1)+10);
    }
    const x = randomNum();
    if (x < 10) {
        console.log('Failed, x is smaller than 10');
    } else if (x > 20) {
        console.log('Failed, x is bigger than 20');
    } else {
        console.log('Passed!');
    }
}
// 5)
{
   const randomNumAB = (a,b) =>{
        return Math.floor(Math.random()*(a-b+1)+b);
    }
    const x = randomNumAB(55,85);
    if (x < 55) {
        console.log('Failed, x is smaller than 55');
    } else if (x > 85) {
        console.log('Failed, x is bigger than 85');
    } else {
        console.log('Nice! Passed!');
    }
}
// 6)
    // const distance  = (x1, y1, x2, y2) => {
    //     return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    // }
    {
            function getDistance(x1, y1, x2, y2) {
                 return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
            }
            const d = getDistance(3, 10, 0, 6);
            if (d != 5) {
            console.log('Failed: the calculation is wrong');
            } else {
            console.log('Passed, bravo');
            }
        }
// 7) 
{
    async function fetchApi() {
        let fetchData = await fetch('http://quotes.rest/qod.json');
        return await fetchData.json();
    }
    fetchApi().then (
        data => {
            document.getElementById('quote_content').innerHTML = data['contents']['quotes'][0]['quote'];
            document.getElementById('quote_author').innerHTML = data['contents']['quotes'][0]['author'];
        },
    )
      
}