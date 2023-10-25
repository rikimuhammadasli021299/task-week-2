const linkApi = 'https://jsonplaceholder.typicode.com/users';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    result.map((items) => console.log(`Name: ${items.name}`));
  } catch (error) {
    console.log(error.message);
  }
};

getData(linkApi);
