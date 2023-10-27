import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

// VALIDASI
const validasi = (harga, jarak, pajak) => {
  if (typeof harga !== 'number' || !harga) {
    let pesanError = 'Harga harus bertipe number dan tidak boleh kosong!';
    return pesanError;
  } else if (typeof jarak !== 'number') {
    let pesanError = 'Jarak harus bertipe number!';
    return pesanError;
  } else if (typeof pajak !== 'boolean') {
    let pesanError = 'Pajak harus bertipe boolean!';
    return pesanError;
  } else {
    return false;
  }
};

// MENGHITUNG NILAI POTONGAN VOUCHER
const hitungVoucher = (voucher, harga) => {
  if (voucher === 'PIJARFOOD5') {
    if (harga >= 50000) {
      let potonganVoucher = harga * (50 / 100);
      if (potonganVoucher > 50000) {
        return (potonganVoucher = 50000);
      }
      return potonganVoucher;
    }
  } else if (voucher === 'DITRAKTIRPIJAR') {
    if (harga >= 25000) {
      let potonganVoucher = harga * (60 / 100);
      if (potonganVoucher > 30000) {
        return (potonganVoucher = 30000);
      }
      return potonganVoucher;
    }
  }
  let potonganVoucher = 0;
  return potonganVoucher;
};

// MENGHITUNG NILAI ONGKOS KIRIM
const hitungOngkir = (jarak) => {
  if (jarak > 2) {
    let ongkosKirim = (jarak - 2) * 3000 + 5000;
    return ongkosKirim;
  } else {
    let ongkosKirim = 5000;
    return ongkosKirim;
  }
};

const pijarFood = (harga, voucher, jarak, pajak = false) => {
  const error = validasi(harga, jarak, pajak);

  if (error) {
    chalkAnimation.pulse(error);
  } else {
    const potonganVoucher = hitungVoucher(voucher, harga);
    const ongkosKirim = hitungOngkir(jarak);
    const biayaPajak = pajak ? (5 / 100) * harga : 0;
    const subTotal = harga - potonganVoucher + ongkosKirim + biayaPajak;

    console.log(chalk.blue(`Harga       : ${harga} `));
    console.log(chalk.blue(`Potongan    : ${potonganVoucher} `));
    console.log(chalk.blue(`Biaya Antar : ${ongkosKirim} `));
    console.log(chalk.blue(`Pajak       : ${biayaPajak}  `));
    chalkAnimation.neon(chalk.bgHex('#FB7203').italic(`SubTotal    : ${subTotal} `));
  }
};

pijarFood(75000, 'PIJARFOOD5', 5, true); // Menggunakan voucher dan pajak true
// pijarFood(175000, 'PIJARFOOD5', 3, true); // Potongan harga mencapai batas maksimal
// pijarFood(45000, 'PIJARFOOD5', 2); // Menggunkan voucher, tetapi tidak memenuhi pesanan minimal dan tidak ada pajak
// pijarFood(175000, '', 5, true); // Tidak menggunakan voucher

// pijarFood(25000, 'DITRAKTIRPIJAR', 2, true); // Menggunakan voucher dan ada pajak
// pijarFood(250000, 'DITRAKTIRPIJAR', 3, true); // Potongan harga mencapai batas maksimal
// pijarFood(20000, 'DITRAKTIRPIJAR', 7, false); // Menggunkan voucher, tetapi tidak memenuhi pesanan minimal dan tidak ada pajak
