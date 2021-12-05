// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(`модель-${this.model}, виробник-${this.producer}, рік-${this.year}, об'єм двигуна-${this.volume}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarClass {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info() {
//         console.log(`модель-${this.model}, виробник-${this.producer}, рік-${this.year}, об'єм двигуна-${this.volume}`);
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella{
//     constructor(name,age,size) {
//         this.name=name;
//         this.age=age;
//         this.size=size;
//     }
// }
//
// let cinderellas=[
//     new Cinderella('Cinderella1', 19, 36),
//     new Cinderella('Cinderella2', 18, 38),
//     new Cinderella('Cinderella3', 23, 39),
//     new Cinderella('Cinderella4', 18, 41),
//     new Cinderella('Cinderella5', 21, 40),
//     new Cinderella('Cinderella6', 18, 37),
//     new Cinderella('Cinderella7', 19, 31),
//     new Cinderella('Cinderella8', 22, 35),
//     new Cinderella('Cinderella9', 19, 37),
//     new Cinderella('Cinderella10', 20, 34)
// ];
//
// class Prince{
//     constructor(name,age,shoe) {
//         this.name=name;
//         this.age=age;
//         this.shoe=shoe;
//     }
// }
//
// let princeFind=new Prince('prince',25,36);
// console.log(cinderellas.find(value => value.size === princeFind.shoe));
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
