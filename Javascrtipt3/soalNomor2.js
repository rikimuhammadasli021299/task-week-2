const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['January', 'February', 'Maret', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found'), []);
    }
  }, 4000);
};

const showMonths = (error, months) => {
  if (error) {
    console.log(error.message);
  } else {
    months.map((month, i) => console.log(`${i + 1}. ${month}`));
  }
};

getMonth(showMonths);
