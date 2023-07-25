var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// IMPRIMIR LA EDAD DE JOHN
console.log("Edad de John:", users[1].age);

// IMPRIMIR EL NOMBRE DEL PRIMER OBJETO
console.log("Nombre del primer objeto:", users[0].name);

// IMPRIMIR NOMBRE Y EDAD DE CADA USUARIO
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name + " - " + users[i].age);
}

// IMPRIMIR NOMBRE DE LOS MAYORES DE EDAD
console.log("Nombres de los mayores de edad:");
for (var i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
    console.log(users[i].name);
    }
}
