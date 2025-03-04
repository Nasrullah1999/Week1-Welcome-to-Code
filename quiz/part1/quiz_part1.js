let nama = "John";
const peran = ["Ksatria","Penyihir","Tabib"];
peran = [1];
if (nama === "") {
  console.log("Nama harus diisi!");
}else if (peran === null) {
console.log("Pilih Peranmu untuk memulai game!");
}
switch (peran) {
  case "Ksatria":
    console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
    break;
    case "Penyihir":
    console.log("Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
    break;
    case "Tabib":
    console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
    break;
    default:
    console.log("kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    break;
}
