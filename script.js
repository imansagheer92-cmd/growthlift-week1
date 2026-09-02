let name = "Iman Sagheer";
const site = "GrowthLift";
var oldway = "Avoid It";

let greeting = "Hello";
let price = 15000;
let isOnline = true;
let skills = ["HTML", "CSS", "JS"];
let intern = {
    name: "Iman",
    week: 2,
    Location: "Lahore"
};

function greet(name){
    return "Hello " + name;
}

console.log(greet("Iman"));

const welcome = (name) => {
    return "Welcome " + name;
};

console.log(welcome("Iman"));



for (let i = 0; i < 5; i++){
    console.log(i);
}



skills.forEach(skill => {
    console.log(skill);
});



if (isOnline){
    console.log("User is Online");
}
else {
    console.log("User is Offline");
}


console.log(`Welcome to ${site}, ${name}!`);


