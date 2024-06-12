// Store data
localStorage.setItem("password", "1234");

// Retrieve data
var password = localStorage.getItem("password");

// Store object
var user = {firstName: "John", lastName: "Doe"};
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
var user = JSON.parse(localStorage.getItem("user"));
