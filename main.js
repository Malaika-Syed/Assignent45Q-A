var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// task 2  personal message //
var person_name = "Hello Eric, would you like to learn some Python today?";
console.log(person_name);
//task3 name case //
var person_name2 = "Malaika Syed";
console.log(person_name2.toLowerCase());
console.log(person_name2.toUpperCase());
console.log(console.log(person_name2.charAt(0).toUpperCase() + person_name2.slice(1).toLowerCase()));
//task 4 famous quote//
console.log('Robert J Oppenhiemer once said" Now I become death , Destroyer of world"');
//task 5 famous quote //
var famous_person = 'Robert J Oppenhiemer';
console.log("".concat(famous_person, " once said\" Now I become death , Destroyer of world \" "));
//task 7 and task 8 operators //
console.log(4 + 4);
console.log(10 - 2);
console.log(16 / 2);
console.log(4 * 2);
//task 9 favorite number // 
var favorite_number = 1;
console.log("My Favorite Number is: ".concat(favorite_number, " because I'm always No ").concat(favorite_number));
//task 10 dding comments //
var person_name1 = "Malaika Syed";
console.log(4 + 4); //add two number
console.log(10 - 2); //sub two number
console.log(16 / 2); //div number
console.log(4 * 2); //multiply two number
console.log(person_name1.toLowerCase()); // display message in lowercase 
console.log(person_name1.toUpperCase()); // display message in upper case
console.log(person_name1.charAt(0).toUpperCase()); // display message in Title case
//task 11 store names of friends in array
var names = ["Mumtaz", "Areeba", "Laviza"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//task 12 same as task 11 but we print msg as well //
var friends = ["Mumtaz", "Areeba", "Laviza"];
for (var i = 0; i < friends.length; i++) {
    console.log("Will See You Soon", friends[i]);
}
//task 13 favorite mode of traansportation //
var transportation = ["Ducatti", "KTM", "Kavasaki Ninja"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i]));
}
//task 14
var guest = ["Areej", "Armeen", "Zunaira"];
for (var i_1 = 0; i_1 < guest.length; i_1++) {
    console.log("".concat(guest[i_1], " I would like to invite you on dinner"));
}
// task 15 chaanging guest list //
var guest_list = ["Maria ", "Mehwish", "Kinza", "Bareera"];
for (var i_2 = 0; i_2 < guest_list.length; i_2++) {
    console.log("Dear ".concat(guest_list[i_2], ", I would like to invite you to dinner"));
}
var a = Math.round(Math.random() * (guest_list.length - 1));
console.log("".concat(guest_list[a], " can't make it"));
guest_list.splice(a, a, "Areej");
console.log("Dear ".concat(guest_list[a], ", I would like to invite you to dinner"));
//task 16 more guests ///
var guest_list1 = ["Amna", "Eman", "Safia", "Ayesha"];
for (var i_3 = 0; i_3 < guest_list1.length; i_3++) {
    console.log("Dear ".concat(guest_list1[i_3], ", I would like to invite you to dinner"));
}
var b = Math.round(Math.random() * (guest_list1.length - 1));
console.log("".concat(guest_list1[a], " can't make it"));
guest_list1.splice(a, a, "Amna");
console.log("Dear ".concat(guest_list1[a], ", I would like to invite you to dinner"));
console.log("I have found bigger table");
guest_list1.unshift("Areej");
guest_list1.splice(3, 0, "Bareera");
guest_list1.push("Anaya");
console.log(guest_list);
for (var i_4 = 0; i_4 < guest_list1.length; i_4++) {
    console.log("Dear ".concat(guest_list1[i_4], ", I would like to invite you to dinner"));
}
//task 17 shrinking guest list //
var guest_list2 = ["Ahmed", "Khan", "Muqeet", "Burki"];
for (var i_5 = 0; i_5 < guest_list2.length; i_5++) {
    console.log("Dear ".concat(guest_list2[i_5], ", I would like to invite you to dinner"));
}
var c = Math.round(Math.random() * (guest_list2.length - 1));
console.log("".concat(guest_list2[a], " can't make it"));
guest_list.splice(a, a, "Rehmat");
console.log("Dear ".concat(guest_list2[a], ", I would like to invite you to dinner"));
console.log("I have found bigger table");
guest_list2.unshift("Amir");
guest_list2.splice(3, 0, "Baber");
guest_list2.push("Abdullah");
console.log(guest_list);
for (var i_6 = 0; i_6 < guest_list2.length; i_6++) {
    console.log("Dear ".concat(guest_list2[i_6], ", I would like to invite you to dinner"));
}
console.log("I can invite only two people for dinner");
console.log(guest_list2.length);
while (guest_list2.length > 2) {
    var removed_guest = guest_list2.pop();
    if (removed_guest) {
        console.log("Sorry, ".concat(removed_guest, ", I can't invite you to dinner."));
    }
}
console.log("The final two guests are:", guest_list2);
for (var i_7 = 0; i_7 < guest_list2.length; i_7++) {
    console.log("Dear ".concat(guest_list2[i_7], ", you are still invited"));
}
guest_list.pop();
guest_list.pop();
console.log(' we have following guests in list :', guest_list2);
//task 18 five places in the world you like to visit using array //
var favorite_places = ["Palestine", "Saudi-Arabia", "Kuwait", "Yemen", "Syria"];
console.log(favorite_places);
var sorted_favorite_places = __spreadArray([], favorite_places, true).sort();
console.log(sorted_favorite_places);
console.log(favorite_places);
var reverse_sorted_favorite_places = sorted_favorite_places.reverse();
console.log(reverse_sorted_favorite_places);
favorite_places.reverse();
console.log(favorite_places);
favorite_places.reverse();
console.log(favorite_places);
favorite_places.sort();
console.log(favorite_places);
favorite_places.reverse();
console.log(favorite_places);
//task 20 to 22 list of mountain //
var mountainObjects = [
    { name: "Everest", height: 8848 },
    { name: "K2", height: 8611 },
    { name: "Kangchenjunga", height: 8586 },
    { name: "Lhotse", height: 8516 },
    { name: "Makalu", height: 8485 }
];
console.log("Mountain objects:", mountainObjects);
console.log(mountainObjects[7]["height"]);
//task 23 conditional test //
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'kawasaki'? I predict False.");
console.log(car == 'kawasaki');
console.log("Is five grater than 4? I predict True.");
console.log(5 > 4);
console.log("Is 10 less than 20? I predict True.");
console.log(10 < 20);
console.log("Is mango start with n? I predict False.");
console.log("mango".startsWith("n"));
console.log("Is mango end with o? I predict True.");
console.log("mango".endsWith("o"));
console.log("Is mango contain t? I predict False.");
console.log("mango".includes("t"));
console.log("Is true && false? I predict False.");
console.log(true && false);
console.log("Is true || false? I predict True.");
console.log(true || false);
console.log("Is false ? I predict False.");
console.log(false);
//task 24 more conditionl test //
var fruit_king = "Mango";
console.log("Is Apple is king of fruit? I predict False.");
console.log("Apple" == fruit_king);
console.log("Is Mango is king of fruit? I predict True.");
console.log("Mango" == fruit_king);
var my_name = "Ahmed";
console.log("Is ahmed is my name in lowercase? I predict True.");
console.log(my_name.toLowerCase() == "ahmed");
console.log("Is Ahmed is my name in lowercase? I predict False.");
console.log(my_name.toLowerCase() == "Ahmed");
console.log("is Six greater than two? I predict True.");
console.log(6 > 2);
console.log("is Six lesser than two? I predict False.");
console.log(6 < 2);
console.log("is Six divisible by two? I predict True.");
console.log(6 % 2 == 0);
console.log("is seven is divisible by two? I predict False.");
console.log(7 % 2 == 0);
console.log("is israel is State? i predict False.");
console.log(true && false);
console.log("is Palestine is State? i predict True.");
console.log(true || false);
var fruits = ["Apple", "Mango", "Orange", "Banana"];
console.log("Is Apple in fruits? I predict True.");
console.log(fruits.includes("Apple"));
console.log("Is Car in fruits? I predict False.");
console.log(fruits.includes("Car"));
//task 25
//pass version // 
var alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)];
if (alien_color === 'green') {
    console.log("that the player just earned 5 points");
}
// fail version //
var alien_color1 = 'red';
if (alien_color1 === 'yellow') {
    console.log("that the player just earned 10 points");
}
//task 26 
var alien_color2 = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)];
if (alien_color2 === 'green') {
    console.log("The player just earned 5 points");
}
else if (alien_color2 === 'yellow') {
    console.log("The player just earned 10 points");
}
//task 27
var alien_color3 = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)];
if (alien_color3 === 'green') {
    console.log("The player just earned 5 points");
}
else if (alien_color3 === 'yellow') {
    console.log("The player just earned 10 points");
}
else if (alien_color3 === 'red') {
    console.log("The player just earned 15 points");
}
// task 28 //
var age = 10;
if (age <= 2) {
    console.log("the person is a baby");
}
else if (age > 2 && age <= 4) {
    console.log("the person is a toddler");
}
else if (age > 4 && age <= 13) {
    console.log("the person is a kid");
}
else if (age > 13 && age <= 20) {
    console.log("the person is a teenager");
}
else if (age > 20 && age <= 65) {
    console.log("the person is an adult");
}
else if (age > 65) {
    console.log("the person is an elder");
}
//task 29 favorite fruit //
var favorite_fruits = ["Mango", "Apple", "Banana"];
if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apple");
}
if (favorite_fruits.includes("Pomegranate")) {
    console.log("You really like Pomegranate");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Banana");
}
//task 30 hello admin // 
var usernames = ["Ahmed", "admin", "Taha", "Baber", "Taimur"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//task 31 no user //
var user_names = ["Ahmed", "admin", "Taha", "Baber", "Taimur"];
for (var i_8 = user_names.length; i_8 > 0; i_8--) {
    user_names.pop();
}
if (user_names.length > 0) {
    for (var _a = 0, user_names_1 = user_names; _a < user_names_1.length; _a++) {
        var user_name = user_names_1[_a];
        if (user_name == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user_name, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users");
}
//task 32 checking username //
var current_users = ["Ahmed", "Taha", "Baber", "Taimur", "Shahiryar"];
var new_users = ["Muqeet", "Hammad", "Asif", "Baber", "Taha"];
var _loop_1 = function (new_user) {
    if (current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("The user name ".concat(new_user, " is not available. please try something new"));
    }
    else {
        console.log("The user name ".concat(new_user, " is available"));
    }
};
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    _loop_1(new_user);
}
//task 33 ordinal number //
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i_9 = 0; i_9 < numbers.length; i_9++) {
    if (numbers[i_9] === 1) {
        console.log("".concat(numbers[i_9], "st"));
    }
    else if (numbers[i_9] === 2) {
        console.log("".concat(numbers[i_9], "nd"));
    }
    else if (numbers[i_9] === 3) {
        console.log("".concat(numbers[i_9], "rd"));
    }
    else
        console.log("".concat(numbers[i_9], "th"));
}
//task 34 think of at least 3 pizzas //
var favorite_pizza = ["Roman pizza", "Hawaian pizza", "Mexican pizza"];
for (var i_10 = 0; i_10 < favorite_pizza.length; i_10++) {
    console.log("I like ".concat(favorite_pizza[i_10]));
}
console.log('i really love Pizza');
//task 35 store the name  of animals in lsit then use for loop to print //
var animal = ["goat", "sheep", "markhor"];
for (var i_11 = 0; i_11 < animal.length; i_11++) {
    console.log(animal[i_11]);
}
for (var i_12 = 0; i_12 < animal.length; i_12++) {
    console.log("I would like to own a ".concat(animal[i_12]));
}
console.log("They are cute and fluffy");
//task 36 T-shitr //
function make_shirt(size, text) {
    console.log("The size of the shirt is ".concat(size, " and the text on the shirt is ").concat(text));
}
make_shirt("large", "i love typescript");
//task 37 large shirt //
function make_shirt1(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("make the shirt in size in ".concat(size, " and have message ").concat(text));
}
make_shirt1();
make_shirt("medium", "I love old Karachi kings");
//task 38 function called decsribe_city // 
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("The ".concat(city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city("Lahore");
describe_city("Jerusalem", "Palestine");
//task 39 city names //
function city_country(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\"".concat(city, ",").concat(country, "\""));
}
city_country();
city_country("Palestine", "Jerusalem");
city_country("Madina and Makkah", "Saudi Arabia");
//task 40 function called make album //
function make_album(name, album_title, tracks) {
    var artist = {
        name: name,
        album_title: album_title
    };
    if (tracks !== undefined) {
        artist.tracks = tracks;
    }
    return artist;
}
// task 41 array of magicians names //
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magi = ["Merlin the Magnificent", "Mystique the Enchanter", "Zephyr the Illusionist", "Celestia the Sorceress", "Thaddeus the Wizard"];
show_magicians(magi);
//task 42 great magicians //
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
function show_magicians1(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magi1 = ["Merlin the Magnificent", "Mystique the Enchanter", "Zephyr the Illusionist", "Celestia the Sorceress", "Thaddeus the Wizard"];
var making_great = make_great(magi);
show_magicians(making_great);
//task 43 unchanged magicians //
function make_great3(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
function show_magicians2(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
var magi3 = ["Merlin the Magnificent", "Mystique the Enchanter", "Zephyr the Illusionist", "Celestia the Sorceress", "Thaddeus the Wizard"];
var making_great3 = make_great(magi);
show_magicians(making_great);
var unchanged_array = magi.slice();
var make_great_unchanged = make_great(unchanged_array);
show_magicians(unchanged_array);
show_magicians(make_great_unchanged);
//task 44 array  of item a person wants sandwiches //
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("We have add the following items to the sandwich");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
}
make_sandwich("salad");
make_sandwich("cheese", "ketchup", "Mayoneses");
//task45 function that store information about cars in object //
function makeCar(manufacturer, modelName, carInfo) {
    carInfo['manufacturer'] = manufacturer;
    carInfo['model_name'] = modelName;
    return carInfo;
}
var cars = makeCar('suburu', 'outback', { color: 'blue', tow_package: true });
console.log(cars);
