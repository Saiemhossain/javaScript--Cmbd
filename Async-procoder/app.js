/*
* Async function 
*/
async function randomUser() {
 let urlApi = await fetch('https://randomuser.me/api/')

  let rawData = await urlApi.json();
  console.log(rawData);

  console.log(
    `${rawData.results[0].name.title}  ${rawData.results[0].name.first}  ${rawData.results[0].name.last}  `
  );
}

randomUser();