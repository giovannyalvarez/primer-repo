//Acceder a un alemento por el id
let title = document.getElementById("title");
console.log(title); //Muestra el elemento h1 en la consola

let content = document.getElementsByClassName("content");
console.log(content) //Muestra un HTMLCollection con todos los elementos que tienen la clase content

//Cambiar el contenido del elemento
title.textContent = "Hola mundo";

//Cambiar el color del elemento
title.style.color = "red";

//Agregar una nueva clase al elemento
title.classList.add("big-title");

