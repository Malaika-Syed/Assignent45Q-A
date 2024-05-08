// task 2  personal message //
let person_name:string = "Hello Eric, would you like to learn some Python today?"
console.log(person_name)


//task3 name case //
let person_name2:string = "Malaika Syed"
console.log(person_name2.toLowerCase())
console.log(person_name2.toUpperCase())
console.log(console.log(person_name2.charAt(0).toUpperCase() + person_name2.slice(1).toLowerCase()));


//task 4 famous quote//
console.log('Robert J Oppenhiemer once said" Now I become death , Destroyer of world"')

//task 5 famous quote //
let famous_person:string = 'Robert J Oppenhiemer'
console.log(`${famous_person} once said" Now I become death , Destroyer of world " `)


//task 7 and task 8 operators //
console.log(4+4)
console.log(10-2)
console.log(16/2)
console.log(4*2)

//task 9 favorite number // 
let  favorite_number:number = 1
console.log(`My Favorite Number is: ${favorite_number} because I'm always No ${favorite_number}`)

//task 10 dding comments //
let person_name1 = "Malaika Syed"
console.log(4+4) //add two number
console.log(10-2) //sub two number
console.log(16/2) //div number
console.log(4*2) //multiply two number
console.log(person_name1.toLowerCase()) // display message in lowercase 
console.log(person_name1.toUpperCase()) // display message in upper case
console.log(person_name1.charAt(0).toUpperCase()) // display message in Title case

//task 11 store names of friends in array
const names = ["Mumtaz","Areeba","Laviza"]
for(var i = 0 ; i < names.length; i++) {
   console.log(names[i])
}

//task 12 same as task 11 but we print msg as well //
const friends = ["Mumtaz","Areeba","Laviza"]
for(var i = 0 ; i < friends.length; i++) {
   console.log("Will See You Soon", friends[i])
}


//task 13 favorite mode of traansportation //
const transportation = ["Ducatti","KTM","Kavasaki Ninja"]
for(var i = 0 ; i < transportation.length; i++) {
    console.log(`I would like to own a ${transportation[i]}`)
 }

 //task 14
 let guest = ["Areej","Armeen","Zunaira"]
 for (let i = 0; i <guest.length; i++) {
    console.log(`${guest[i]} I would like to invite you on dinner`)
 }


 // task 15 chaanging guest list //
 let guest_list : string[] = ["Maria ", "Mehwish", "Kinza", "Bareera"]
for(let i = 0; i < guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}, I would like to invite you to dinner`)
}
let a : number = Math.round(Math.random() * (guest_list.length - 1))
    console.log(`${guest_list[a]} can't make it`)
    guest_list.splice(a, a, "Areej")
    console.log(`Dear ${guest_list[a]}, I would like to invite you to dinner`)

    //task 16 more guests ///
let guest_list1 : string[] = ["Amna", "Eman", "Safia", "Ayesha"]
for(let i = 0; i < guest_list1.length; i++){
    console.log(`Dear ${guest_list1[i]}, I would like to invite you to dinner`)
}
let b : number = Math.round(Math.random() * (guest_list1.length - 1))
    console.log(`${guest_list1[a]} can't make it`)
    guest_list1.splice(a, a, "Amna")
    console.log(`Dear ${guest_list1[a]}, I would like to invite you to dinner`)
    console.log("I have found bigger table")
    guest_list1.unshift("Areej")
    guest_list1.splice(3, 0, "Bareera")
    guest_list1.push("Anaya")
    console.log(guest_list)
    for(let i = 0; i < guest_list1.length; i++){
        console.log(`Dear ${guest_list1[i]}, I would like to invite you to dinner`)
    } 

    
    //task 17 shrinking guest list //
let guest_list2 : string[] = ["Ahmed", "Khan", "Muqeet", "Burki"]
for(let i = 0; i < guest_list2.length; i++){
    console.log(`Dear ${guest_list2[i]}, I would like to invite you to dinner`)
}
let c : number = Math.round(Math.random() * (guest_list2.length - 1))
    console.log(`${guest_list2[a]} can't make it`)
    guest_list.splice(a, a, "Rehmat")
    console.log(`Dear ${guest_list2[a]}, I would like to invite you to dinner`)
    console.log("I have found bigger table")
    guest_list2.unshift("Amir")
    guest_list2.splice(3, 0, "Baber")
    guest_list2.push("Abdullah")
    console.log(guest_list)
    for(let i = 0; i < guest_list2.length; i++){
        console.log(`Dear ${guest_list2[i]}, I would like to invite you to dinner`)
    }
    console.log("I can invite only two people for dinner")
    console.log(guest_list2.length)

    while (guest_list2.length > 2) {
    let removed_guest:string | undefined= guest_list2.pop()
    if(removed_guest){
        console.log(`Sorry, ${removed_guest}, I can't invite you to dinner.`);
    }
}
console.log("The final two guests are:", guest_list2);
   for(let i=0;i<guest_list2.length;i++){
       console.log(`Dear ${guest_list2[i]}, you are still invited`)
   }
   guest_list.pop()
   guest_list.pop()
   console.log(' we have following guests in list :',guest_list2) 


    //task 18 five places in the world you like to visit using array //
let favorite_places: string[] = ["Palestine", "Saudi-Arabia", "Kuwait", "Yemen", "Syria"];
console.log(favorite_places)
let sorted_favorite_places: string[] = [...favorite_places].sort();
console.log(sorted_favorite_places);
console.log(favorite_places)
let reverse_sorted_favorite_places: string[] = sorted_favorite_places.reverse()
console.log(reverse_sorted_favorite_places)
favorite_places.reverse()
console.log(favorite_places)
favorite_places.reverse()
console.log(favorite_places)
favorite_places.sort()
console.log(favorite_places)
favorite_places.reverse()
console.log(favorite_places)


//task 20 to 22 list of mountain //
let mountainObjects: { name: string, height: number }[] = [
    { name: "Everest", height: 8848 },
    { name: "K2", height: 8611 },
    { name: "Kangchenjunga", height: 8586 },
    { name: "Lhotse", height: 8516 },
    { name: "Makalu", height: 8485 }
];
console.log("Mountain objects:", mountainObjects);

console.log(mountainObjects[7]["height"])


//task 23 conditional test //
let car = 'subaru' 
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'kawasaki'? I predict False.")
console.log(car == 'kawasaki')

console.log("Is five grater than 4? I predict True.")
console.log(5 > 4)

console.log("Is 10 less than 20? I predict True.")
console.log(10 < 20)

console.log("Is mango start with n? I predict False.")
console.log("mango".startsWith("n"))

console.log("Is mango end with o? I predict True.")
console.log("mango".endsWith("o"))

console.log("Is mango contain t? I predict False.")
console.log("mango".includes("t"))

console.log("Is true && false? I predict False.")
console.log(true && false)

console.log("Is true || false? I predict True.")
console.log(true || false)

console.log("Is false ? I predict False.")
console.log(false)

//task 24 more conditionl test //
let fruit_king:string = "Mango"
console.log("Is Apple is king of fruit? I predict False.")
console.log("Apple" == fruit_king) 

console.log("Is Mango is king of fruit? I predict True.")
console.log("Mango" == fruit_king)

let my_name:string = "Ahmed"
console.log("Is ahmed is my name in lowercase? I predict True.")
console.log(my_name.toLowerCase() == "ahmed")

console.log("Is Ahmed is my name in lowercase? I predict False.")
console.log(my_name.toLowerCase() == "Ahmed")

console.log("is Six greater than two? I predict True.")
console.log(6 > 2)

console.log("is Six lesser than two? I predict False.")
console.log(6 < 2)

console.log("is Six divisible by two? I predict True.")
console.log(6 % 2 == 0)

console.log("is seven is divisible by two? I predict False.")
console.log(7 % 2 == 0)

console.log("is israel is State? i predict False.")
console.log(true && false)

console.log("is Palestine is State? i predict True.")
console.log(true || false)

let fruits:string[] = ["Apple", "Mango", "Orange", "Banana"]
console.log("Is Apple in fruits? I predict True.")
console.log(fruits.includes("Apple"))

console.log("Is Car in fruits? I predict False.")
console.log(fruits.includes("Car"))

//task 25
//pass version // 
let alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';


if(alien_color === 'green'){
    console.log("that the player just earned 5 points")
} 

// fail version //
let alien_color1 = 'red' 
if(alien_color1 === 'yellow'){
    console.log("that the player just earned 10 points")
}


//task 26 
let alien_color2 = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';
if (alien_color2 === 'green'){
    console.log("The player just earned 5 points");
} else if (alien_color2 === 'yellow'){
    console.log("The player just earned 10 points");
}



//task 27
let alien_color3 = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';
if (alien_color3 === 'green'){
    console.log("The player just earned 5 points");
} else if (alien_color3 === 'yellow'){
    console.log("The player just earned 10 points");
} else if (alien_color3 === 'red'){
    console.log("The player just earned 15 points");
}


// task 28 //
let age : number= 10
if(age <= 2){
    console.log("the person is a baby")
} else if( age > 2 && age <= 4) {
    console.log("the person is a toddler")
} else if( age > 4 && age <= 13) {
    console.log("the person is a kid")
} else if( age > 13 && age <= 20) {
    console.log("the person is a teenager")
} else if( age > 20 && age <= 65) {
    console.log("the person is an adult")
} else if( age > 65) {
    console.log("the person is an elder")
}

//task 29 favorite fruit //
let favorite_fruits: string[] = ["Mango","Apple","Banana"]
if (favorite_fruits.includes("Apple")){
    console.log("You really like Apple")
}
if (favorite_fruits.includes("Pomegranate")){
    console.log("You really like Pomegranate")
}
if (favorite_fruits.includes("Orange")){
    console.log("You really like Orange")
}
if (favorite_fruits.includes("Mango")){
    console.log("You really like Mango")
}
if(favorite_fruits.includes("Banana")){
     console.log("You really like Banana")
}


//task 30 hello admin // 
const usernames: string[] = ["Ahmed","admin","Taha","Baber","Taimur"]
for(let username of usernames){
   if(username == "admin"){
    console.log("Hello admin, would you like to see a status report?")
   } else {
    console.log(`Hello ${username}, thank you for logging in again.`)
   }
}

//task 31 no user //
const user_names: string[] = ["Ahmed","admin","Taha","Baber","Taimur"]
for(let i = user_names.length ; i >0 ; i--) {
    user_names.pop()
}
if(user_names.length > 0){
for(let user_name of user_names){
   if(user_name == "admin"){
    console.log("Hello admin, would you like to see a status report?")
   } else {
    console.log(`Hello ${user_name}, thank you for logging in again.`)
   }
}
} else {
    console.log("We need to find some users")
}

//task 32 checking username //
let current_users:string[] = ["Ahmed","Taha","Baber","Taimur","Shahiryar"]
let new_users:string[] = ["Muqeet","Hammad","Asif","Baber","Taha"]

for(let new_user of new_users) {
    if(current_users.some(user => user.toLowerCase() === new_user.toLowerCase())){
        console.log(`The user name ${new_user} is not available. please try something new`)
    } else {
        console.log(`The user name ${new_user} is available`)
    }
}

//task 33 ordinal number //
let numbers:number[] = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<numbers.length;i++) {
    if(numbers[i] === 1) {
        console.log(`${numbers[i]}st`)
    }
    else if(numbers[i] === 2) {
        console.log(`${numbers[i]}nd`)
    }
    else if(numbers[i] === 3) {
        console.log(`${numbers[i]}rd`)
    }
    else
    console.log(`${numbers[i]}th`)
}

//task 34 think of at least 3 pizzas //
let favorite_pizza:string[] = ["Roman pizza","Hawaian pizza","Mexican pizza"]
for(let i = 0; i < favorite_pizza.length; i++) {
    console.log(`I like ${favorite_pizza[i]}`)
}
console.log('i really love Pizza')

//task 35 store the name  of animals in lsit then use for loop to print //
let animal:string[] = ["goat","sheep","markhor"] 
for(let i = 0 ; i < animal.length; i++){
    console.log(animal[i])
}
for(let i = 0 ; i < animal.length; i++){
    console.log(`I would like to own a ${animal[i]}`)
}
console.log("They are cute and fluffy")

//task 36 T-shitr //
function make_shirt(size: string, text: string): void{
    console.log(`The size of the shirt is ${size} and the text on the shirt is ${text}`)
}
make_shirt("large", "i love typescript")

//task 37 large shirt //
function make_shirt1(size:string="Large", text:string="I love Typescript"){
    console.log(`make the shirt in size in ${size} and have message ${text}`);
}
make_shirt1();
make_shirt("medium", "I love old Karachi kings")

//task 38 function called decsribe_city // 
function describe_city(city:string,country:string="Pakistan"){
    console.log(`The ${city} is in ${country}`)
    }
    describe_city("Karachi","Pakistan")
    describe_city("Lahore")
    describe_city("Jerusalem","Palestine")

    //task 39 city names //
function city_country(city: string="Karachi",country: string = "Pakistan"){
    console.log(`"${city},${country}"`)
  }
  city_country()
  city_country("Palestine","Jerusalem")
  city_country("Madina and Makkah","Saudi Arabia")

  //task 40 function called make album //
function make_album(name: string, album_title: string ,tracks ?: number): Record<string, any> {
    const artist:Record<string,any> = {
        name: name,
        album_title: album_title
    }
    if(tracks !== undefined){
        artist.tracks = tracks
    }
    return artist
}

// task 41 array of magicians names //
function show_magicians(magicians: string[]):void{
    for(let magician of magicians){
     console.log(magician)
    }
 }
 
 let magi: string[] = ["Merlin the Magnificent","Mystique the Enchanter","Zephyr the Illusionist","Celestia the Sorceress"    ,"Thaddeus the Wizard"]
 show_magicians(magi)

 //task 42 great magicians //
function make_great(magicians: string[]):string[]{
    return magicians.map(magician => `The Great ${magician}`)
 }
 function show_magicians1(magicians: string[]):void{
     for(let magician of magicians){
      console.log(magician)
     }
  }
 
  let magi1: string[] = ["Merlin the Magnificent","Mystique the Enchanter","Zephyr the Illusionist","Celestia the Sorceress"    ,"Thaddeus the Wizard"]
  const making_great = make_great(magi)
  show_magicians(making_great)
 

   //task 43 unchanged magicians //
 function make_great3(magicians: string[]):string[]{
    return magicians.map(magician => `The Great ${magician}`)
 }
 function show_magicians2(magicians: string[]):void{
     for(let magician of magicians){
      console.log(magician)
     }
  }
 
  let magi3: string[] = ["Merlin the Magnificent","Mystique the Enchanter","Zephyr the Illusionist","Celestia the Sorceress"    ,"Thaddeus the Wizard"]
  const making_great3 = make_great(magi)
  show_magicians(making_great)
 
 const unchanged_array = magi.slice()
 const make_great_unchanged = make_great(unchanged_array)
 show_magicians(unchanged_array)
 show_magicians(make_great_unchanged)


 //task 44 array  of item a person wants sandwiches //
function make_sandwich(...items:string[]) {
    console.log("We have add the following items to the sandwich")
    for (let item of items) {
        console.log("- " + item)
    }
}
make_sandwich("salad")
make_sandwich("cheese","ketchup","Mayoneses")

//task45 function that store information about cars in object //
function makeCar(manufacturer: string, modelName: string, carInfo: {[key: string]: any}): {[key: string]: any} {
    carInfo['manufacturer'] = manufacturer;
    carInfo['model_name'] = modelName;
    return carInfo;
  }
  
  const cars = makeCar('suburu', 'outback', { color: 'blue', tow_package: true });
  console.log(cars);