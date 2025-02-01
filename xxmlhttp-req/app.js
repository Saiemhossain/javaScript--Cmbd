const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

const sendRequest = function (method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';

    if (method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(`Error: ${xhr.status}`);
      }
    };

    xhr.onerror = function () {
      reject('Something went wrong!');
    };
  });

  return promise;
};

const getData = function () {
  sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

const sendData = function () {
  const newTodo = {
    userId: 1,
    title: 'New Task',
    completed: false,
  };

  sendRequest('POST', 'https://jsonplaceholder.typicode.com/todos', newTodo)
    .then(response => {
      console.log('Data Sent:', response);
    })
    .catch(error => {
      console.error(error);
    });
};

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);
