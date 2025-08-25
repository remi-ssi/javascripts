let ticket = {from:"Manila", to: "Laguna", price: 200}

console.log(ticket)
console.log("The ticket is from: " , ticket.from)
console.log(`The ticket is to ${ticket.to}`)
console.log(`The price is ${ticket.price}`)

let person = {};
person.name = "reymie";
person.surname = "gonzaga";
console.log(person)
console.log(`Hi I am ${person.surname}, ${person.name}`);

let books = [["Speaking Javascript"," Axel Rauschmayer", 460], ["Programming Javascript Applications", "Eric Elliot", 254], ["Understanding ECMAScript", "NIckolas Zakas", 352]];

books.push (["Learning Javascript Design Patterns", "Addy Osmani", 254]);
console.log(books)