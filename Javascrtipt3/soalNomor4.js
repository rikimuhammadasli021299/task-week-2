const linkApi = 'https://jsonplaceholder.typicode.com/users';

const getData = async () => {
  try {
    const response = await fetch(linkApi);
    const result = await response.json();
    result.map((items) => console.log(`Name: ${items.name}`));
  } catch (error) {
    console.log(error.message);
  }
};

getData();
