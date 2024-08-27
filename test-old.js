const Quiz = require('./app/models/Quiz');
const User = require('./app/models/User');

const quiz = new Quiz({
    title: 'title',
    description: 'description',
    user_id: 3,
    created_at: 'now',
    updated_at: 'now',
});

console.log(quiz);

// const user = new User({
//     firstname: 'Lorenzo',
//     lastname: 'oclock',
//     email: '@oclocl.com',
//     password: 'SECRET',
// });

// console.log(user);

// // On se sert de l'accesseur comme d'une propriété pour lire #password
// console.log(user.password);
class Category {
    name;

    constructor(name) {
        this.name = name;
    }
}

class Product {
    SKU;
    title;
    description;
    prix_ht;

    constructor(options) {
        this.title = options.title;
        this.SKU = options.SKU;
    }
}

const cat = new Category('Video Games');
console.log(cat);

const p = new Product({ title: 'Mario', SKU: 'poknrsgpk' });
console.log(p);

const p2 = new Product('Mario Kart');
