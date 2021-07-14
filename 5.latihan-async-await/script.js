// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai!');
//     }, 1000);
// });
// console.log('satu');
// coba.then(() => console.log(coba));
// console.log('tiga');


function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000;
        if (waktu < 5000){
            setTimeout(() => {
                resolve('selesai!');
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));


async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.log(err);
    }
}

console.log('satu');
cobaAsync();
console.log('tiga');