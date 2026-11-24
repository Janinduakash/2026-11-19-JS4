// console.log("Hello, World!");

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

// let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

// function btnAddCustomrOnAction() {
//    //alert("add customer");

//    let customer = {
//       id: document.getElementById("txtid").value,
//       name: document.getElementById("txtname").value,
//       age: document.getElementById("txtage").value,
//       address: document.getElementById("txtaddress").value,
//    }

//    //console.log.(customer);
//    customerList.push(customer);
//    //console.log(customerList);
//    localStorage.setItem("customerList", JSON.stringify(customerList));
//    btnLoadTableOnAction();


// }

// function btnSearchCustomrOnAction() {
//    //alert("search customer");

//    let id = document.getElementById("txtid").value

//    let customer = customerList.find(customer => customer.id === id);
//    if (customer) {
//       document.getElementById("txtname").value = customer.name;
//       document.getElementById("txtage").value = customer.age;
//       document.getElementById("txtaddress").value = customer.address;

//    } else {
//       alert("Customer not found");
//    }



// }

// function btnDeleteCustomrOnAction() {
//    //alert("delete customer");
//    let id = document.getElementById("txtid").value
//    let index = customerList.findIndex(c => c.id === id);
//    if (index !== -1) {
//       customerList.splice(index, 1);
//       localStorage.setItem("customerList", JSON.stringify(customerList));
//       btnLoadTableOnAction();
//    } else {
//       alert("Customer not found");
//    }
// }

// function btnUpdateCustomrOnAction() {
//    //alert("update customer");
//    let id = document.getElementById("txtid").value
//    let customer = customerList.find(c => c.id === id);

//    if (customer) {
//       customer.name = document.getElementById("txtname").value;
//       customer.age = document.getElementById("txtage").value;
//       customer.address = document.getElementById("txtaddress").value;

//       localStorage.setItem("customerList", JSON.stringify(customerList));
//       btnLoadTableOnAction();
//    } else {
//       alert("Customer not found");
//    }


// }

// function btnClearCustomrOnAction() {
//    alert("clear customer");
// }

// function btnLoadTableOnAction() {
//    // alert("load table");

//    let tblbdy = "";
//    customerList.forEach(customer => {
//       tblbdy += `
//          <tr>
//             <td>${customer.id}</td>
//             <td>${customer.name}</td>
//             <td>${customer.age}</td>
//             <td>${customer.address}</td>
//          </tr>
//       `;
//    });
//    document.getElementById("tblCustomer").innerHTML = tblbdy;
// }

// btnLoadTableOnAction();



//-------------------Weather API-----------------

const apiKey = "6c240a00690346fa8d4153923262111";
const baseUrl = "http://api.weatherapi.com/v1";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=Agalawatta`).then(res => res.json()).then(data => {
   console.log(data);

   document.getElementById("weatherInfo").innerHTML = `
   <div id="weatherInfo">
      <h1>${data.current.condition.text}</h1>
      <img src="${data.current.condition.icon}" alt="">
      <p>${data.current.temp_c}°C</p>
      <p>${data.current.humidity}%</p>
    </div>

   `
})


