console.log("Hello, World!");

//add data to localStorage

// localStorage.setItem("name", "Janidu Akash");
// localStorage.setItem("age", "20");
// localStorage.setItem("city", "Matugama");

//retrieve localStorage items
//localStorage.removeItem("age");

//data read from localStorage

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let city = localStorage.getItem("city");
// console.log(name, age, city);

//localStorage.clear();

//Objects in localStorage
// let customer=[{
//     name: "Janidu",
//     age:20,
//     isMarried : false,
// },
// {   name:"Kamal",
//     age:30,
//     isMarried: true,
// },
// {
//     name:"Manula",
//     age: 30,
//     isMarried:false,
// }]

// localStorage.setItem("customer",customer);

// // 1st step : convert object to string
// let stringCustomer =  JSON.stringify(customer);
// //2nd step : store string in localStorage
// localStorage.setItem("customer",stringCustomer);


// //---get customer from localStorage--
// //1st step: retrieve string from localStorage
// let getcustomer =  localStorage.getItem("customer");
// //2nd step: convert string back to object
// let parsedCustomer =  JSON.parse(getcustomer);
// console.log(parsedCustomer);







//=========================================================================
//----------------CRUD operation in localStorage--------------------------

function btnAddCustomrOnAction(){
   alert("add customer"); 
}

function btnSearchCustomrOnAction(){
   alert("search customer"); 
}

function btnDeleteCustomrOnAction(){
   alert("delete customer"); 
}

function btnUpdateCustomrOnAction(){
   alert("update customer"); 
}

function btnClearCustomrOnAction(){
   alert("clear customer"); 
}

function btnLoadTableOnAction(){
   alert("load table"); 
}

