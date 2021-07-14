//Menggunakan JQuery

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=13c45572&s=avenger',
//     success: movies => {
//         console.log(movies);
//     }
// });

//Menggunakan Fetch

// fetch('http://www.omdbapi.com/?apikey=13c45572&s=avenger')
//     .then(response => response.json())
//     .then(response => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang Asynchronous di masa akan datang
// janji (terpenuhi, ingkar)

// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
//let ditepati = true;

// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati){
//         resolve("Janji ditepati!");
//     } else {
//         reject("Ingkar janji");
//     }
// });

// janji1
//     .then(response => console.log('OK! '+ response))
//     .catch(response => console.log('NOT OK! '+ response));


// Contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati){
//         setTimeout(() => {
//             resolve('Janji ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Janji tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// //console.log(janji2.then(()=> console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then((response) => { console.log('OK! : '+response) })
//     .catch((response) => { console.log('NOT OK! : '+response) });
// console.log('selesai');

const film = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            pemeran: 'Rexy'
        }]);
    }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandar Lampung',
            temp: 29,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    //.then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })