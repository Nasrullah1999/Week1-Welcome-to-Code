// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 1;
console.log(`LOOPING MAJU`);
while (i <= 10) {
    console.log(i);
    ++i;
}
console.log(`LOOPING MUNDUR`);
while (i > 0) {
    console.log(i - 1);
    --i;
}

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('LOOPING PERTAMA');
let j
for (j = 1; j <= 5;) {
    console.log(j);
    j++;
}

console.log('LOOPING KEDUA');
for (j = 8; j >= 1;) {
    for (i = 1; i >= j;) {
        console.log(' ');
        j++;
    }
    console.log(j);
}
