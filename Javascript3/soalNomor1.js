const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
};

// Handle promise menggunakan Than Catch
cekHariKerja('senin')
  // Jika keadaan promise mengembalikan nilai resolve (tidak ada error), maka kode then akan dijalankan
  .then((res) => console.log(res))
  // Jika keadaan promise mengembalikan nilai reject (terjadi error), maka kode catch akan dijalankan
  .catch((err) => console.log(err.message));

// Handle promise menggunakan Try Catch
const handlePromise = async (day) => {
  // Blok kode try dijalankan untuk mengecek apakah promise mengembalikan nilai reject atau resolve
  // Jika promise mengembalikan resolve, maka block kode catch tidak akan dijalankan
  // Jika promise mengembalikan reject, kode dalam block try akan diskip dan menjalankan block kode catch
  // Blok kode finally akan selalu dijalankan baik promise mengembalikan nilai resolve (tidak ada error) ataupun reject (terjadi error)
  try {
    const result = await cekHariKerja(day);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('fungsi selesai dijalankan');
  }
};

handlePromise('sabtu');
