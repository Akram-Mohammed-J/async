// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", (e) => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   } else if (request.readyState === 4) {
//     console.log("could not fetch the data");
//   }
// });
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send();

//********CALLBACK FUNCTION EXAMPLE***********/
//DEFNITION OF ASYNC : START NOW AND FINISH IT LATER NON BLOCKING CODE
// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", (e) => {
//     if (request.readyState === 4 && request.status === 200) {
//       //   console.log(request.responseText);
//       callback(undefined, request.response);
//     } else if (request.readyState === 4) {
//       //   console.log("could not fetch the data");
//       callback("could not fetch the data", undefined);
//     }
//   });
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   request.send();
// };
// console.log(1);
// console.log(2);
// console.log(3);
// getTodos((err, data) => {
//   console.log(err, data);
// });
// console.log(4);
// console.log(5);
// console.log(6);

//CALLBACK HELL
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      callback(undefined, request.response);
    } else if (request.readyState === 4) {
      //   console.log("could not fetch the data");
      callback("could not fetch the data", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};
getTodos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
  console.log(data);
  getTodos("https://jsonplaceholder.typicode.com/todos/2", (err, data) => {
    console.log(data);
    getTodos("https://jsonplaceholder.typicode.com/todos/3", (err, data) => {
      console.log(data);
    });
  });
});
