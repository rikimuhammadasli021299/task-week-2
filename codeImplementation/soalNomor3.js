import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

const divideAndSort = (deretAngka) => {
  if (typeof deretAngka !== 'number') {
    chalkAnimation.pulse('Parameter harus bertipe number!');
  } else {
    if (deretAngka > Number.MAX_SAFE_INTEGER) {
      chalkAnimation.pulse('Angka tidak boleh lebih dari 9007199254740991');
    } else {
      const pisahAngka = deretAngka.toString().split(0); // Memisahkan deret angka dengan angka 0 sebagai pemisahnya
      const urutAngka = pisahAngka.map((items) => items.split('').sort().join('')); // Mengurutkan deretan angka yang sudah dipisahkan
      const hasil = urutAngka.join(''); // Menggabungkan deret angka
      console.log(chalk.cyan.italic(parseInt(hasil)));
    }
  }
};

divideAndSort(5956560159466056);
