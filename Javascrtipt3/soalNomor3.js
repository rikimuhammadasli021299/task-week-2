const penjumlahan = (nilai1, nilai2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof nilai1 !== 'number' || typeof nilai2 !== 'number') {
        reject(new Error('Nilai harus number!'));
      } else {
        const hasil = nilai1 + nilai2;
        resolve(`Hasil: ${hasil}`);
      }
    }, 3000);
  });
};

penjumlahan(2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

const salam = (jam, nama) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jam > 4 && jam < 13) {
        resolve(`Selamat pagi ${nama}!`);
      } else if (jam > 12 && jam < 16) {
        resolve(`Selamat Siang ${nama}!`);
      } else if (jam > 15 && jam < 19) {
        resolve(`Selamat Sore ${nama}!`);
      } else if ((jam > 18 && jam < 25) || (jam <= 4 && jam >= 0)) {
        resolve(`Selamat Malam ${nama}!`);
      } else {
        reject(new Error(`Jam salah, tidak ada jam ${jam}!`));
      }
    }, 1000);
  });
};

salam(5, 'Budi')
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
