let pizzaPlace = "Buck's Pizza" ;
let numberOfToppings= 8 ;

console.log(pizzaPlace, numberOfToppings, typeof pizzaPlace, typeof numberOfToppings)

console.log("Welcome to " +pizzaPlace + ". We only have " + numberOfToppings + " toppings...")

if (numberOfToppings<10) {
  console.log("Quality, not quantity.")
} else {
  console.log("It's a whole lot to choose from.")
}

i = 0

while (i < numberOfToppings-1){
  i +=2;
  console.log(i)
}
