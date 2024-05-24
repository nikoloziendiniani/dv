// const personName = "Aleksandre";
// const surname = "Jelia";
// var age = 16;
// var height = 175;
// const eyeColor = `Brown`;
// var isEighteenOrNot = false;

// console.log("es aris " + personName + " " + surname + " " + age + " wlis");
// console.log(`me var ${personName} ${surname} ${age} wlis`);
// console.log(5 + "5");
// console.log(personName);
// console.log(surname);
// console.log(age);
// console.log(height);
// console.log(eyeColor);

// var cars1 = [
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
//   "Mercedes",
//   "Dodge",
//   "Toyota",
// ];

// let car1 = "Mercedes";
// let car2 = "Dodge";
// let car3 = "Toyota";

// var cars2 = [car1, car2, car3, 1, 2, 3];

// console.log(cars1);
// console.log(cars2);
// console.log(cars1[5]);
// console.log(cars2[4]);

// cars2[3] = 5;

// console.log(cars2);

// var cars3 = [];

// cars3[0] = "gio";
// cars3[1] = "nika";
// cars3[2] = "gio";

// console.log(cars3);

// console.log(cars2.toString());

// cars2.length;

const tqveniLeqtori = {
  name: "Aleksandre",
  surname: "Jelia",
  age: 16,
  height: 190,
  isEighteen: false,
  experience: ["js", "html", "css"],
  dzili: function sleep() {
    console.log("zzz");
  },
};

console.log(tqveniLeqtori.experience[1]);
tqveniLeqtori.name;
tqveniLeqtori.dzili();

const arr = [0, 1, 2];

console.log(arr.sort())
arr.sort();
// arr.filter();
// arr.concat();
// arr.length();
// arr.splice();
// arr.push();
// arr.pop();
// arr.unshift();
// arr.shift();

// arr.forEach();
// arr.map();

arr.sort();
//sort(): ახარისხებს მასივის ელემენტებს ადგილზე და აბრუნებს მასივს. ის არ იღებს რაიმე პარამეტრს ან აბრუნებს განუსაზღვრელს.

arr.filter(element => element > 1); // Example filter condition
//filter(): ქმნის ახალ მასივს ყველა ელემენტით, რომელიც გაივლის მოცემული ფუნქციით განხორციელებულ ტესტს.

arr.concat([3, 4]); // Example of concatenating another array
//concat(): აერთიანებს ორ ან მეტ მასივს და აბრუნებს ახალ მასივს. პარამეტრებად იღებს ერთ ან მეტ მასივს

arr.length; // Correct usage

arr.splice(1, 1, 3); // Example of removing one element at index 1 and adding 3
//splice(): ცვლის მასივის შიგთავსს არსებული ელემენტების 
//ამოღებით ან ჩანაცვლებით და/ან ახალი ელემენტების დამატებით. 
//სჭირდება დაწყების ინდექსი, წაშლის რაოდენობა და, სურვილისამებრ, ელემენტები დასამატებლად.

arr.push(3); // Example of adding an element
//push(): ამატებს ერთ ან მეტ ელემენტს მასივის ბოლოს და აბრუნებს მასივის ახალ სიგრძეს.

arr.pop(); // Removes the last element
//pop(): შლის ბოლო ელემენტს მასივიდან და აბრუნებს ამ ელემენტს.

arr.unshift(-1); // Example of adding an element to the beginning
//unshift(): ამატებს ერთ ან მეტ ელემენტს მასივის დასაწყისში და აბრუნებს მასივის ახალ სიგრძეს.

arr.shift(); // Removes the first element
//shift(): შლის პირველ ელემენტს მასივიდან და აბრუნებს ამ ელემენტს.

arr.forEach(element => console.log(element)); // Example usage
//forEach(): ახორციელებს მოწოდებულ ფუნქციას ერთხელ მასივის თითოეული ელემენტისთვის.

const newArr = arr.map(element => element * 2); // Example usage
//map(): ქმნის ახალ მასივს გამოძახების მასივის ყველა ელემენტზე მოწოდებული ფუნქციის გამოძახების შედეგებით.

console.log(arr); // Example usage
//console.log: ეს არის მეთოდი კონსოლში ნებისმიერი სახის ცვლადის ან შეტყობინებების დასაბეჭდად.
