const tossCoin = () => (Math.random() > 0.5 ? "heads" : "tails");

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            if(attempts > 100) reject(new Error("Más de 100 intentos"));
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        resolve (`Se necesitaron ${attempts} intentos para sacar 5 "heads" seguidos`);
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );