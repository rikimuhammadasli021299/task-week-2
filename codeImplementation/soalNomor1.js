import chalkAnimation from 'chalk-animation';

// DETEKSI PALINDROM
const cekPalindrom = (str) => {
  if (!str) {
    chalkAnimation.karaoke('Parameter tidak boleh kosong!');
  } else {
    const strLow = str.toString().toLowerCase();
    const strReverse = strLow.split('').reverse().join('');
    strLow === strReverse ? chalkAnimation.rainbow('Palindrom') : chalkAnimation.rainbow('Tidak Palindrom');
  }
};
cekPalindrom('Malam');

// REVERSE WORD
const reverseWord = (word) => {
  if (typeof word !== 'string' || !word) {
    chalkAnimation.karaoke('Paramater tidak boleh kosong dan harus bertipe string!');
  } else {
    const wordReverse = word.split(' ').reverse().join(' ');
    chalkAnimation.karaoke(wordReverse);
  }
};

reverseWord('Saya belajar Javascript');
