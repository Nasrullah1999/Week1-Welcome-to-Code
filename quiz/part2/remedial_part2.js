/*
//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!


*/
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);

// ## Soal 2. Index Accessing - 1 by 1

// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!
let kata = 'wow JavaScript is so cool';

console.log(
    kata[0]+kata[1]+kata[0]+
    kata[3]+
    kata[4]+kata[5]+kata[6]+kata[5]+kata[8]+kata[9]+kata[10]+kata[11]+kata[12]+kata[13]+
    kata[3]+
    kata[11]+kata[16]+
    kata[3]+
    kata[16]+kata[1]+
    kata[3]+
    kata[9]+kata[1]+kata[1]+kata[24]
);

// ## Soal 3. Breaking Sentence (Again) using Substring

// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

console.log(
    kata.substring(0,3)+' '+
    kata.substring(4,14)+' '+
    kata.substring(15,17)+' '+
    kata.substring(18,20)+' '+
    kata.substring(21,25)
);

// ## Soal 4. Breaking Sentence (yet Again) and Count Each Length

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';

let kata1 = word4.substring(0, 3);
let panjang_kata = kata1.length;
console.log(`kata pertama ${kata1}`+' dengan panjang kata '+panjang_kata);

let kata2 = word4.substring(4,14);
let panjang_kata2 = kata2.length;
console.log(`kata kedua ${kata2} dengan panjang kata ${panjang_kata2}`);

let kata3 = word4.substring(15,17);
let panjang_kata3 = kata3.length;
console.log(`kata ketiga ${kata3} dengan panjang kata ${panjang_kata3}`);

let kata4 = word4.substring(18,20);
let panjang_kata4 = kata4.length;
console.log(`kata keempat ${kata4} dengan panjang kata ${panjang_kata4}`);

let kata5 = word4.substring(21,25);
let panjang_kata5 = kata5.length;
console.log(`kata kelima ${kata5} dengan panjang kata ${panjang_kata5}`);