// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User(7, 'bohdan1', 'lopit1', 'retegrfie@gmail.com', '+3800000000'),
//     new User(3, 'bohdan2', 'lopit2', 'retehgjhjkmgrfe@gmail.com', '+3800000000'),
//     new User(8, 'bohdan3', 'lopit3', 'retegrfhghe@gmail.com', '+3800000000'),
//     new User(5, 'bohdan4', 'lopit4', 'rettrgfghegrfe@gmail.com', '+3800000000'),
//     new User(9, 'bohdan5', 'lopit5', 'retegrfe@gmail.com', '+3800000000'),
//     new User(6, 'bohdan6', 'lopit6', 'retegrfgdfczqqfe@gmail.com', '+3800000000'),
//     new User(4, 'bohdan7', 'lopit7', 'retegrjghjghfe@gmail.com', '+3800000000'),
//     new User(1, 'bohdan8', 'lopit8', 'retegr23423fe@gmail.com', '+3800000000'),
//     new User(10, 'bohdan9', 'lopit9', 'rete@gmail.com', '+3800000000'),
//     new User(2, 'bohdan10', 'lopit10', 'rettyytu5hgtegrfe@gmail.com', '+3800000000'),
// ];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let usersFilter = users.filter(value => value.id % 2 === 0);
// console.log(usersFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let usersSort = users.sort((a, b) => a.id - b.id);
// console.log(usersSort);

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [
//     new Client(7, 'bohdan1', 'lopit1', 'retegrfie@gmail.com', '+3800000000',['book','pen','meat','bread']),
//     new Client(3, 'bohdan2', 'lopit2', 'retehgjhjkmgrfe@gmail.com', '+3800000000',['book','pen','water']),
//     new Client(8, 'bohdan3', 'lopit3', 'retegrfhghe@gmail.com', '+3800000000',['book']),
//     new Client(5, 'bohdan4', 'lopit4', 'rettrgfghegrfe@gmail.com', '+3800000000',['book','pen','meat','water','bread']),
//     new Client(9, 'bohdan5', 'lopit5', 'retegrfe@gmail.com', '+3800000000',['book','pen','plane']),
//     new Client(6, 'bohdan6', 'lopit6', 'retegrfgdfczqqfe@gmail.com', '+3800000000',['book','pen',]),
//     new Client(4, 'bohdan7', 'lopit7', 'retegrjghjghfe@gmail.com', '+3800000000',['book','pen']),
//     new Client(1, 'bohdan8', 'lopit8', 'retegr23423fe@gmail.com', '+3800000000',['book','pen']),
//     new Client(10, 'bohdan9', 'lopit9', 'rete@gmail.com', '+3800000000',['book','pen']),
//     new Client(2, 'bohdan10', 'lopit10', 'rettyytu5hgtegrfe@gmail.com', '+3800000000',['book','pen']),
// ];
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clientsSort=clients.sort((a,b)=>a.order.length-b.order.length);
// console.log(clientsSort);