//find the element which does not fit the pattern(even,odd)
var arr = [1,1,3,5,8,7]
var binarySearch = []

  for(var i = 0; i< arr.length; i++){
    if(arr[i] % 2 == 0){
      binarySearch.push(0)
  } else{
      binarySearch.push(1)
  }
}

var result = ''
 let sortedArr = binarySearch.sort(function(a, b){return a - b})
 if(sortedArr[1] == 0){
    result = "odd"
 } else {
  result = "even"
 }

 for(var i = 0; i< arr.length; i++){
   if(result == "odd" && arr[i] % 2 != 0){
    console.log(arr.indexOf(arr[i]) + 1)
  }
  else if(result == "even" && arr[i] % 2 == 0){
    console.log(arr.indexOf(arr[i]) + 1)
 }
 }
 // ============== Words that Start with a Vowel ====================

 function retrieve(str) {
 	return str.replace(/[.]/g,'')
 		.toLowerCase()
 		.split(/\s/)
 		.filter(x=>/[aeiou]/.test(x.charAt(0)));
 }
 // ALTERNATIVE ***
 function retrieve(str) {
 	if(str.length<1)
 		return []
 	return str.toLowerCase().slice(0,-1).split(" ").filter(w=> /[aeiou]/ig.test(w[0]))
 }


 //-------------------String to camelcase and combined--------------------
let str = "The_stealth_warrior" //Output: TheStealthWarrior
let capitalizedArr = []
 function toCamelCase(str){
 if(str.includes('-')==true){
 let arr = str.split('-')
 capitalizedArr.push(arr[0])
 for(var i=1;i<arr.length;i++){
   capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
 }

 console.log(capitalizedArr.join(''))
} else if(str.includes('_')==true){
let arr = str.split('_')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
  capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
}
}
toCamelCase(str)
//-------------------- Sort a given string including numbers -------------

let word = "is2 Thi1s T4est 3a"
let newarr = []
function convertStringToArray(word){
  let splittedWord = word.split(' ')
  //console.log(splittedWord)
  for(var count = 1;count < splittedWord.length+1;count++){
  for(i=0;i<splittedWord.length;i++){
    if(splittedWord[i].includes(count)==true){
        newarr.push(splittedWord[i])
    }

  }
}
console.log(newarr.join(' '))
console.log(newarr)
}
convertStringToArray(word)

//find the element which does not fit the pattern(even,odd)
var arr = [1,1,3,5,8,7]
var binarySearch = []

 for(var i = 0; i< arr.length; i++){
   if(arr[i] % 2 == 0){
     binarySearch.push(0)
 } else{
     binarySearch.push(1)
 }
}

var result = ''
let sortedArr = binarySearch.sort(function(a, b){return a - b})
if(sortedArr[1] == 0){
   result = "odd"
} else {
 result = "even"
}
for(var i = 0; i< arr.length; i++){
  if(result == "odd" && arr[i] % 2 != 0){
   console.log(arr.indexOf(arr[i]) + 1)
 }
 else if(result == "even" && arr[i] % 2 == 0){
   console.log(arr.indexOf(arr[i]) + 1)
}
}
//-------------------String to camelcase and combined------------------------------------
let str = "The-stealth-warrior" //Output: TheStealthWarrior
let capitalizedArr = []
function toCamelCase(str){
if(str.includes('-')==true){
  console.log(str.split('-'))
let arr = str.split('-')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
  capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
} else if(str.includes('_')==true){
let arr = str.split('_')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
 capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
}
}
toCamelCase(str)

// ================== FizzBuzz ================
function fizzBuzz(){
	for(var i=1;i<=100;i++){
		if(i%5 === 0 && i%3 === 0){
			print('FizzBuzz');
		} else if(i%3 === 0){
			print('Fizz');
		} else if(i%5 === 0){
			print('Buzz');
		} else {
			print(i);
		}
	}
}
//-------------------Equal sum of each side of an index-----------------------------------------------------
let array = [1,2,3,4,3,2,1] //Outcome: 3.index and number is 4.
let result1;
function findEvenIndex(array){
 for(var i=0;i<array.length;i++){
   let leftarray = array.slice(0,i)
   let rigtharray = array.slice(i+1)
   let leftSum= leftarray.reduce((a,b)=> a+b,0)
   let rigthSum= rigtharray.reduce((a,b)=> a+b,0)
   if(leftSum==rigthSum){
      result1 = i
   }
 }
 return result1
}
findEvenIndex(array)
//-----------------------Remove smallest number in an array, get smallest index if there are more than 1---------------------------------------
let arry = [6,2,3,2,4,5]

let min = Math.min(...arry)
let index=[1]

for(var i = 0; i<arry.length;i++){
 if(arry[i]==min && index.length==0){
   index.push(arry.indexOf(arry[i]))
 }
}
let newArry = arry.slice(0,index[0]).concat(arry.slice(index[0]+1))
console.log(newArry)

//---------------------- Pallindrome -----------------------------------
function isPalindrome(word){
  let reversedWord = []
  let splittedWord = word.split('')
  let count = splittedWord.length - 1
  console.log(splittedWord)
   for(var index = count;index>-1;index--){
   reversedWord.push(splittedWord[index])
   console.log(reversedWord)
   }
   let newWord = reversedWord.join('')
   console.log(newWord)
   if(word == newWord){
     return true
   } else{
     return false
   }
}
//isPalindrome(word)
console.log(isPalindrome('beyza'))

//-------------- Fizz-Buzz -----------------------------
function isFizzBuzz(number){
  if(number % 15 == 0){
    return "FizzBuzz"
  } else if(number % 3 == 0){
      return "Fizz"
  } else if(number % 5 == 0){
      return "Buzz"
  } else {
     return "Neither"
  }
}
console.log(isFizzBuzz(120))
// -------------- Pallindrome ------------------

#third trial
number = int(input("Enter a number: "))
def isPrime(n):
    if n < 2:
        return False

    for i in range(2, n, 1):
        if n % i == 0:
            return False

    return True

print(isPrime(number))

// -------------- code bat -------------------------
// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.

notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"

public String notString(String str) {

}
function String(string){
  let arr = string.split(' ')
  if(arr[0]=='not'){
    return string;
  } else {
    return 'not ' + string;
  }
}
// ========= how to compare two arrays in javascript ========
var a1 = [1,2,3];
var a2 = [1,2,3];
console.log(a1==a2);    // Returns false
console.log(JSON.stringify(a1)==JSON.stringify(a2));    // Returns true

//**** Object comparison
var obj1={test:"value"};
var obj2={test:"value2"};

console.log(JSON.stringify(obj1) == JSON.stringify(obj2))    // Returns false

// -------- Combining .map(), .reduce(), and .filter() ---------
var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//Our objective: get the total score of force users only. Let’s do it step by step!
//First, we need to filter out the personnel who can’t use the force:

var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)
//With that we have 3 elements left in our resulting array. We now need to create an array containing the total score of each Jedi.

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});
// Result: [154, 110, 156]
//And let’s use reduce to get the total:

var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);
// Result: 420
//And now here’s the fun part… we can chain all of this to get what we want in a single line:

var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);
//And look how pretty it is with arrow functions:

const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);


//------Equal sum of each side of an index--
let array = [1,2,3,4,3,2,1] //Outcome: 3.index and number is 4.
let result1;
function findEvenIndex(array){
  for(var i=0;i<array.length;i++){
    let leftarray = array.slice(0,i)
    let rigtharray = array.slice(i+1)
    let leftSum= leftarray.reduce((a,b)=> a+b,0)
    let rigthSum= rigtharray.reduce((a,b)=> a+b,0)
    if(leftSum==rigthSum){
       result1 = i
    }
  }
  return result1
}
findEvenIndex(array)
//---Remove smallest number in an array, get smallest index if there are more than 1-----
let arry = [6,2,3,2,4,5]

let min = Math.min(...arry)
let index=[1]

for(var i = 0; i<arry.length;i++){
  if(arry[i]==min && index.length==0){
    index.push(arry.indexOf(arry[i]))
  }
}
let newArry = arry.slice(0,index[0]).concat(arry.slice(index[0]+1))
console.log(newArry)

//Alternative ***
let arry = [6,2,3,2,4,5]
let min = Math.min(...arry)

function getMin(arry){
	let result;
for(let i=0; i<arry.length; i++){
	if(arry[i] == min){
		result = i;
    i = arry.length
	}
}
return result
}
console.log(getMin(arry))


//-----------------------------Palindrome----------------------------
let string = "emre"
function isPalindrome(string){
let stringarr = string.toLowerCase().split('')
let reversedstringarr = stringarr.reverse()
let reversedstring=reversedstringarr.join('')
if(string == reversedstring){
  return true
} else{
  return false
}
}
console.log(isPalindrome(string))

// -----------------------------------------------------------------
// *** Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.
function equal(a, b, c) {
	if(a==b &&a==c && b==c){
		return 3
	}
	else if(a==b|| a==c){
		return 2
	}
	return 0
}
// Alternative **
function equal(a, b, c) {
 if (a === b && a === c) {
	return 3;}
 if (a === b || a === c || b === c) {
	return 2;}
		return 0;
	}

  //Alternative**
  function equal(a, b, c) {
	let x = new Set([a, b, c]);
	if (x.size == 3){
		return 0;
	} else if (x.size == 2){
		return 2;
	} else if (x.size == 1){
		return 3;
	}
}

//--------------------------------FizzBuzz---------------------------
function isFizzBuzz(number){
  if(number % 15 ==0){
    return 'fizzbuzz'
  }else if(number % 5 ==0){
    return 'fizz'
  } else if(number % 3 == 0){
    return 'buzz'
  } else {
    return 'neither'
  }

}
console.log(isFizzBuzz(32))
//-------------------------------------------------------

function orderString(string){
  let orderedarr = []
  let arr = string.split(' ')
  console.log(arr)
  for(var i = 1;i<10;i++){
    arr.forEach(function(each){
        if(each.includes(i)){
           orderedarr.push(each)
        }
    })
  }
  console.log(orderedarr.join(' '))
   return orderedarr.join(' ')
}
orderString("4of Fo1r pe6ople g3ood th5e the2")
//------------------------------------------------
let friends = ["Ryan", ,"Mark","Jimmy", "123", "4", "Cool Man"]
function pickMyFriends(arr){
  let filteredarr= arr.filter((each)=>{
     if(each.length==4 && isNaN(each)==true){
       return each
     }

  })
  console.log(filteredarr)
  return filteredarr
}
pickMyFriends(friends)

// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).


missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"

public String missingChar(String str, int n) {
  String front = str.substring(0, n);

  // Start this substring at n+1 to omit the char.
  // Can also be shortened to just str.substring(n+1)
  // which goes through the end of the string.
  String back = str.substring(n+1, str.length());

  return front + back;
}

// -----------no one like this --------------------
//  example tests
 // should return correct text
// Test Passed: Value == 'no one likes this'
// Test Passed: Value == 'Peter likes this'
// Test Passed: Value == 'Jacob and Alex like this'
// Test Passed: Value == 'Max, John and Mark like this'
// Test Passed: Value == 'Alex, Jacob and 2 others like this'

function likes(names) {

  if(names==""){
  return 'no one likes this'
  } else if(names.length == 1){
  return names[0] + ' likes this'
  } else if(names.length == 2){
   for(var i=0; i<names.length; i++){
    return names[i] + ' and ' + names[i+1] + ' like this'
   }
  } else if(names.length == 3){
   for(var i=0; i<names.length; i++){
    return names[i]  +', '+  names[i+1] + ' and ' + names[i+2] + ' like this'
  }
 } else if(names.length >= 4){
   for(var i=0; i<names.length; i++){
     return names[i]  +', '+  names[i+1] + ' and ' +  names.slice(2).length  + ' others like this'
   }
 }
}

// ---------- write digits of a large number in descending order ---------
//Test.assertEquals(descendingOrder(0), 0)
//Test.assertEquals(descendingOrder(1), 1)
//Test.assertEquals(descendingOrder(123456789), 987654321)
function descendingOrder(n){
let arr = n.toString().split('')
  let newarr=arr.map((each)=>{return parseInt(each)})
  let sorted= newarr.sort((a,b)=>b-a)
  let result=sorted.join('')
  return parseInt(result)
}

// ---------- is the word an Isogram ---------
//An isogram is a word that has no repeating letters, consecutive or nonconsecutive.
function isIsogram(str) {
  var low = str.toLowerCase();
  low = low.split('');
  low = low.sort();
  for (var i = 1; i < low.length; i++){
    if (low[i-1] === low[i])
      return false;
  }
  return true;
}

// -------------- lowest & highest numbers -------------
let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"


function highAndLow(numbers){
  let arr = numbers.split(' ')
  console.log(arr)
  let sorted = arr.sort((a,b)=>a-b)
  // console.log(sorted)
  let lowestNumber = sorted[0]
  console.log(lowestNumber)

  let sortedDescending = arr.sort((a,b)=>b-a)
  let highestNumber = sortedDescending[0]
  console.log(highestNumber)
}
highAndLow(numbers)

// ------------------  string   ----------------------

// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.
//
// stringX("xxHxix") → "xHix"
// stringX("abxxxcd") → "abcd"
// stringX("xabxxxcdx") → "xabcdx"

public String stringX(String str) {
String result = "";
for (int i=0; i<str.length(); i++) {
  // Only append the char if it is not the "x" case
  if (!(i > 0 && i < (str.length()-1) && str.substring(i, i+1).equals("x"))) {
    result = result + str.substring(i, i+1); // Could use str.charAt(i) here
  }
}
return result;
}

// ------------------ arrayFront ----------------------

// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
// arrayFront9([1, 2, 9, 3, 4]) → true
// arrayFront9([1, 2, 3, 4, 9]) → false
// arrayFront9([1, 2, 3, 4, 5]) → false

public boolean arrayFront9(int[] nums) {
  // First figure the end for the loop
  int end = nums.length;
  if (end > 4) end = 4;

  for (int i=0; i<end; i++) {
    if (nums[i] == 9) return true;
  }

  return false;
}
// -----------------  frontTimes  ------------------
// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

// frontTimes("Chocolate", 2) → "ChoCho"
// frontTimes("Chocolate", 3) → "ChoChoCho"
// frontTimes("Abc", 3) → "AbcAbcAbc"

public String frontTimes(String str, int n) {
  int frontLen = 3;
  if (frontLen > str.length()) {
    frontLen = str.length();
  }
  String front = str.substring(0, frontLen);

  String result = "";
  for (int i=0; i<n; i++) {
    result = result + front;
  }
  return result;
}

// ============= Number of arrays in an array =================

function numOfSubbarrays(arr) {
	return arr.filter(a => a instanceof Array).length;
}
//ALTERNATIVE ***
function numOfSubbarrays(arr) {
	var c = 0;
	for (var i in arr) {
		if (arr[i] instanceof Array) c++;
	}
	return c;
}

// ==================== Factorize a Number ================

function factorize(num) {
	let factors = []
	for (i = 1; i <= num; i++) {
		if (num % i === 0) {
			factors.push(i)
		}
	}
	return factors
}
//ALTERNATIVE****
const factorize = n => {
	let f = [];
	let i = 0;
	while (i++ < n){n%i ? "" : f.push(i)}
	return f;
}


// -----------------------  altPairs ---------------------

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
//
//
// altPairs("kitten") → "kien"
// altPairs("Chocolate") → "Chole"
// altPairs("CodingHorror") → "Congrr"

public String altPairs(String str) {
  String result = "";

  // Run i by 4 to hit 0, 4, 8, ...
  for (int i=0; i<str.length(); i += 4) {
    // Append the chars between i and i+2
    int end = i + 2;
    if (end > str.length()) {
      end = str.length();
    }
    result = result + str.substring(i, end);
  }

  return result;
}

// ------------------------- or35 --------------------------

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod
//
// or35(3) → true
// or35(10) → true
// or35(8) → false

public boolean or35(int n) {
  return (n % 3 == 0) || (n % 5 == 0);
}

// -------------------- array 123 ---------------------------

// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
//
// array123([1, 1, 2, 3, 1]) → true
// array123([1, 1, 2, 4, 1]) → false
// array123([1, 1, 2, 1, 2, 3]) → true

public boolean array123(int[] nums) {
  // Note: iterate < length-2, so can use i+1 and i+2 in the loop
  for (int i=0; i < (nums.length-2); i++) {
    if (nums[i]==1 && nums[i+1]==2 && nums[i+2]==3) return true;
  }
  return false;
}

// -------------------- array 667 ----------------------------

// Given an array of ints, return the number of times that two 6 s are next to each other in the array. Also count instances where the second "6" is actually a 7.
//
//
// array667([6, 6, 2]) → 1
// array667([6, 6, 2, 6]) → 1
// array667([6, 7, 2, 6]) → 1

public int array667(int[] nums) {
  int count = 0;
  // Note: iterate to length-1, so can use i+1 in the loop
  for (int i=0; i < (nums.length-1); i++) {
    if (nums[i] == 6) {
      if (nums[i+1] == 6 || nums[i+1] == 7) {
        count++;
      }
    }
  }
  return count;
}

// ------------------- stringYAK -------------------
// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.
//
// stringYak("yakpak") → "pak"
// stringYak("pakyak") → "pak"
// stringYak("yak123ya") → "123ya"

public String stringYak(String str) {
  String result = "";

  for (int i=0; i<str.length(); i++) {
    // Look for i starting a "yak" -- advance i in that case
    if (i+2<str.length() && str.charAt(i)=='y' && str.charAt(i+2)=='k') {
      i =  i + 2;
    } else { // Otherwise do the normal append
      result = result + str.charAt(i);
    }
  }

  return result;
}

// --------------------- string Splosion ----------------
// Given a non-empty string like "Code" return a string like "CCoCodCode".
//
// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

public String stringSplosion(String str) {
  String result = "";
  // On each iteration, add the substring of the chars 0..i
  for (int i=0; i<str.length(); i++) {
    result = result + str.substring(0, i+1);
  }
  return result;
}

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

boolean doubleX(String str) {
  int i = str.indexOf("x");
  if (i == -1) return false; // no "x" at all

  // Is char at i+1 also an "x"?
  if (i+1 >= str.length()) return false; // check i+1 in bounds?
  return str.substring(i+1, i+2).equals("x");

  // Another approach -- .startsWith() simplifies the logic
  // String x = str.substring(i);
  // return x.startsWith("xx");
}

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// stringBits("Hello") → "Hlo"
// stringBits("Hi") → "H"
// stringBits("Heeololeo") → "Hello"

public String stringBits(String str) {
  String result = "";
  // Note: the loop increments i by 2
  for (int i=0; i<str.length(); i+=2) {
    result = result + str.substring(i, i+1);
    // Alternately could use str.charAt(i)
  }
  return result;
}


//Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

public int sumDouble(int a, int b) {
  // Store the sum in a local variable
  int sum = a + b;

  // Double it if a and b are the same
  if (a == b) {
    sum = sum * 2;
  }

  return sum;
}

// --------------------------------------------


//1.1 Given an array of integers, find the largest product yielded from three of the integers
var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsortedArray); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
      product1 = product1 * sortedArray[x];
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

  if (product1 > product2) return product1;

  return product2;
}

// ---------------------------------
//Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

// frontTimes("Chocolate", 2) → "ChoCho"
// frontTimes("Chocolate", 3) → "ChoChoCho"
// frontTimes("Abc", 3) → "AbcAbcAbc"
public String frontTimes(String str, int n) {
  int frontLen = 3;
  if (frontLen > str.length()) {
    frontLen = str.length();
  }
  String front = str.substring(0, frontLen);

  String result = "";
  for (int i=0; i<n; i++) {
    result = result + front;
  }
  return result;
}

//Exercise
//I want this code to log out “hey amy”, but it logs out “hey arnold” - why?
function greet (person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
 }
 greet({ name: 'amy' })

//  -------------------------------------

1.4 Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element
var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

findLargestDifference(array);

function findLargestDifference(array) {
  // If there is only one element, there is no difference
  if (array.length <= 1) return -1;

  // currentMin will keep track of the current lowest
  var currentMin = array[0];
  var currentMaxDifference = 0;

  // We will iterate through the array and keep track of the current max difference
  // If we find a greater max difference, we will set the current max difference to that variable
  // Keep track of the current min as we iterate through the array, since we know the greatest
  // difference is yield from `largest value in future` - `smallest value before it`

  for (var i = 1; i < array.length; i++) {
    if (array[i] > currentMin && (array[i] - currentMin > currentMaxDifference)) {
      currentMaxDifference = array[i] - currentMin;
    } else if (array[i] <= currentMin) {
      currentMin = array[i];
    }
  }

  // If negative or 0, there is no largest difference
  if (currentMaxDifference <= 0) return -1;

  return currentMaxDifference;
}

//Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!
var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // [2, 1]

function intersection(firstArray, secondArray) {
  // The logic here is to create a hashmap with the elements of the firstArray as the keys.
  // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
  // If it does exist, add that element to the new array.

  var hashmap = {};
  var intersectionArray = [];

  firstArray.forEach(function(element) {
    hashmap[element] = 1;
  });

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// XO("ooxx") => true
// XO("xooxx") => false
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
console.log(XO('oxotoxcian'))

// function XO(str) {
//   var a = str.replace(/x/gi, ''),
//       b = str.replace(/o/gi, '');
//   return a.length === b.length;
// }

// -----------------------------------------------
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// 1st way;
function friends(str){
  if(str.length===4){
    return true
  } else{
    false
  }
}
console.log(friends('Zero'))
// -------------------------------------------------
// Check if a number is PRIME;
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

console.log(isPrime(137));
console.log(isPrime(237));

// ----------------- Prime Factors ----------------------
//How could you find all prime factors of a number?
function primeFactors(n){
  let factors = []
  let divisor = 2
  while(n>2){
    if(n % divisor == 0){
      factors.push(divisor)
      n = n/divisor
    }else{
      divisor++
    }
  }
    return factors

}
console.log(primeFactors(69))

// ------------------- FIBONACCI NUMBERS ---------------------
//How do get nth Fibonacci number?
function fibonacci(n){
  if(n <= 1){
    return n;
  }else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}
console.log(fibonacci(12))  //144
// ------------------- Greatest Common Divisor -------------------
function greatestCommonDivisor(a, b){
  var divisor = 2,
      greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
     return 1;

  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;
    }
   divisor++;
  }
  return greatestDivisor;
}
console.log(greatestCommonDivisor(69, 169))

// ------- Convert standard time (12) to military time(24)-----
function timeConvertor(time) {
  var PM = time.match('PM') ? true : false

  time = time.split(':')
  var min = time[1]

  if (PM) {
      var hour = 12 + parseInt(time[0],10)
      var sec = time[2].replace('PM', '')
  } else {
      var hour = time[0]
      var sec = time[2].replace('AM', '')
  }

  console.log(hour + ':' + min + ':' + sec)
}

timeConvertor('07:03:15PM'); // "19:03:15"

timeConvertor('1:53:55AM'); // "1:53:55"

// -------- Convert military time to standard time in javascript ------

var time = "16:30:00"; // your input

time = time.split(':'); // convert to array

// fetch
var hours = Number(time[0]);
var minutes = Number(time[1]);
var seconds = Number(time[2]);

// calculate
var timeValue;

if (hours > 0 && hours <= 12) {
  timeValue= "" + hours;
} else if (hours > 12) {
  timeValue= "" + (hours - 12);
} else if (hours == 0) {
  timeValue= "12";
}

timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

// show
alert(timeValue);
console.log(timeValue);
// ---------------------------------

let time = "16:30:00"
time = time.split(':')
let hour = Number(time[0]);
let minute = Number(time[1]);
let second = Number(time[2]);

let timeValue;

if(hour>0 && hour<=12){
   timeValue = '' + hour
}else if(hour>12 && hour<=24){
   timeValue = '' + (hour - 12)
}else if(hour = 0){
   timeValue = '' + 12
}

timeValue += (minute<10) ? ":0" + minute : ":" + minute;
timeValue += (second<10) ? ":0" + second : ":" + second;
timeValue += (hour>=12) ? "PM" : "AM";

alert(timeValue)
console.log(timeValue)

//------------ slice() --------------
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var pets = ["bird", "cat", "dog", "squarrel"]
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");   // first output
  pets.splice(1,3)                       //  second output
  document.getElementById("demo").innerHTML = fruits;
}
console.log(myFunction(fruits))   //Banana,Orange,Lemon,Kiwi,Apple,Mango
console.log(myFunction(pets))   // bird

// ------------ Reduce Function --------------
function getSum(num, sum){
  return num + sum
}
let arr = [12, 15, 20, 30]
console.log(arr.reduce(getSum))   // 77

// ------------ Reverse an array ------------
function reverse(array){
  var output = [],
     i;
  for (i = 0; i < array.length; i++){
    output.unshift(array[i]);
  }
  return output;
}
console.log(reverse([1,2,3,4,5,6,7]));

//------Reversing an array without 'reverse' or duplicating an array--------

function reversingArray(arr) {
  for(let i = 0, j = arr.length-1; i < j; i++, j--)
      [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = ['a','b','c','d','e'];
reversingArray(arr);
console.log(arr);

// ------------ Linear-Time Algorithm (Big 0 Algorithm) --------------------

const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
   return -1;
};
const array= ['a', 'b', 'c', 'd'];
console.log(findIndex(array, 'c'))
console.log(findIndex(array, 'a'))

// --------- REMOVE First Duplicate from Array -------
function duplicateNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return arr[i];
    }
  }
  return null;
}

console.log(duplicateNumber([3, 5, 6, 8, 5, 3]));
// ---------------------------------
function duplicateNumber(arr) {
  var memory = [];
  for (var i = 0; i < arr.length; i++) {
    if(memory[arr[i]] === undefined){
      memory[arr[i]] = true;
    }else{
      return arr[i]
    }
  }
}

var arr = [3, 5, 6, 8, 5, 3];
console.log(duplicateNumber(arr));
// ------------ ************* ------------
function duplicateNumber(arr){
  var nonDuplicate = [];
  for(var i=0; i<arr.length; i++){
    if(nonDuplicate.includes(arr[i]) === false){
      nonDuplicate.push(arr[i])
    }else{
      return arr[i]
    }
  }
}
var arr = [3, 5, 6, 6, 8, 5, 3];
console.log(duplicateNumber(arr)); // 6

// --Given n people, find total number of pairs can be formed----

function uniquePairs(n){
  return n*(n-1)/2
}
console.log(uniquePairs(8))   // 28
// --------------- Sort array --------------

var points = [40, 100, 1, 5, 25, 10];

function sortArray(arr) {
   return arr.sort(function(a, b){return a-b});
}
console.log(sortArray(points))     // [1, 5, 10, 25, 40, 100]
// ------------- ************ --------------

var points = [40, 100, 1, 5, 25, 10];

function sortArray(arr) {
   return arr.sort(function(a, b){return b-a});
}
console.log(sortArray(points))   // [100, 40, 25, 10, 5, 1]

// ----------- Interview Accent ----------

var array = [3, 18, 95, 4, -7]
  var newArray = []
  // sorter(array) -> [-7, 3, 4, ...]

  function sortedArray(arr){
		let length = array.length
	for(i = 0; i<length; i++){
	let min = Math.min(...array)
	newArray.push(min)
	var index = array.indexOf(min);
	if (index > -1) {
	  array.splice(index, 1);
	}
}
return newArray
}
console.log(sortedArray(array))



//=======================================

function areaCircle(r){
  return 3.1*r*r
  }

  var array = [3, 18, 95, 4, -7]

  sorter(array) -> [-7, 3, 4, ...]

  function sortedArray(arr){
  var newArray = []
  for(var i = 0; i<arr.length; i++){
  for(var j = 0; j<arr.length; i++){
   if(arr[i] > arr[j+1]{
     newArray.unshift(arr[j])
   }
   }
  }
  console.log(newArray)
  }
  sortedArray(arr)

  lowest = 999999999999
  indexOfLowest = 999999999

  for... {
  for (i = 0; i < arr.length; i++) {
    if arr[i] < lowest {
      lowest = arr[i]
      indexOfLowest = 1
    }
  }
  newArray.push(lowest)
  array[i] - null;
  }

  lowest -> -7
  indexOfLowest -> 2
  // --------***-------- Python 3 -------****----------
  // List overlap solutions  ( common elements of arrays )

  import random

  # a = range(1, random.randint(1,30))
  # b = range(1, random.randint(10,40))
  a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  new_list = []

  for num in a:
      if num in b:
          new_list.append(num)

  print(new_list)

  // ---------- MERGE TWO SORTED ARRAY ----------

  function mergeSortedArray(a, b){
    var merged = [],
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;

    if(a.length ==0)
      return b;
    if(b.length ==0)
      return a;
    /*
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example
    */
    while(aElm || bElm){
     if((aElm && !bElm) || aElm < bElm){
       merged.push(aElm);
       aElm = a[i++];
     }
     else {
       merged.push(bElm);
       bElm = b[j++];
     }
    }
    return merged;
  }

  > mergeSortedArray([2,5,6,9], [1,2,3,29]);
   = [1, 2, 2, 3, 5, 6, 9, 29]

  //  ********* Finding the second smallest integer in array *******

  int[] elements = {-5, -4, 0, 2, 10, 3, -3};
    int smallest = Integer.MAX_VALUE;
    int secondSmallest = Integer.MAX_VALUE;
    for (int i = 0; i < elements.length; i++) {
        if(elements[i]==smallest){
          secondSmallest=smallest;
        } else if (elements[i] < smallest) {
            secondSmallest = smallest;
            smallest = elements[i];
        } else if (elements[i] < secondSmallest) {
            secondSmallest = elements[i];
        }
    }

    // *********** FIRST NON-REPEATING INTEGERS OF ARRAY ************

    int[] elements = { 1, 1, 2, 3, 3, 4 };
Set<Integer> singleSet = new HashSet<>();
Set<Integer> repeatedSet = new HashSet<>();

for (int e : elements) {
    if (repeatedSet.contains(e)) {
        continue;
    }
    if (singleSet.contains(e)) {
        singleSet.remove(e);
        repeatedSet.add(e);
    } else {
        singleSet.add(e);
    }
}

for (int e : elements) {
    if (singleSet.contains(e)) {
        return e;
    }
}

// *********** REARRANGE NEGATIVE AND POSITIVE NUMBERS IN ARRAY ******

sort(list):
  negative = empty
  positive = empty
  while (list != empty)
     first = pop(list)
     if (first > 0)
         append(positive,first)
     else
         append(negative,first)
  return concatenate(negative,positive)

  // *************** PALLINDROM **************

  function checkPalindrome(str) {
    for (i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - i - 1]) {
        return true
      }
      else {
        return false
      }
    }
  }
  // *************** PALLINDROM 2 **************
  function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  // ******** RETURN THE FIRST & LAST ELEMENTS IN ARRAY ****
  firstLastArr = [5, 10, 15, 20, 25]
function firstLast(arr) {
	let array = []
	for(var i = 0; i<arr.length; i++){
		array.unshift(arr[0])
		array.push(arr[arr.length-1])
		return array;
	}
}

// ----Check if String Ending Matches Second String-----

function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

// -------RETURN THE FOUR LETTER STRINGS---------
function isFourLetters(arr) {
  var result = [];
  for(var i=0; i < arr.length; i++){
    if (arr[i].length == 4){
      result.push(arr[i]);
    }
	}
  return result;
}

// ------- Eliminate Odd Numbers within an Array -------
function noOdds(arr) {
  return arr.filter(x => x % 2 === 0);
}
// ALTERNATIVE BELOW
  function noOdds(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i]%2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// ---------- VALID ZIP CODE ---------
function isValid(zip) {
	if(zip.toString().length == 5 && zip - zip == 0){return true}
	return false
}

// ********* string reverse *************
function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}

> reverse('you are a nice dude');
  = "edud ecin a era uoy"

  //*********** First Non Repeating character in a string *********

  function firstNonRepeatChar(str){
    var len = str.length,
        char,
        charCount = {};
    for(var i =0; i<len; i++){
      char = str[i];
      if(charCount[char]){
        charCount[char]++;
      }
      else
        charCount[char] = 1;
    }
    for (var j in charCount){
      if (charCount[j]==1)
         return j;
    }
  }

  >firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
   = "f"

  //  ************ Remove Duplicate Character *****************

  function removeDuplicateChar(str){
    var len = str.length,
        char,
        charCount = {},
        newStr = [];
    for(var i =0; i<len; i++){
      char = str[i];
      if(charCount[char]){
        charCount[char]++;
      }
      else
        charCount[char] = 1;
    }
    for (var j in charCount){
      if (charCount[j]==1)
         newStr.push(j);
    }
    return newStr.join('');
  }

  > removeDuplicateChar('Learn more javascript dude');
    = "Lnmojvsciptu"

    // ************ is Palindrome **************
    function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
// ********** Missing Number **********

function missingNumber(arr){
  var n = arr.length+1,
  sum = 0,
  expectedSum = n* (n+1)/2;

  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }

  return expectedSum - sum;
}

> missingNumber([5, 2, 6, 1, 3]);
  = 4

  // ************ Sum of two **************
// Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
// Answer: Simplest thing in the world. double loop

function sumFinder(arr, sum){
  var len = arr.length;

  for(var i =0; i<len-1; i++){
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] == sum)
            return true;
     }
  }

  return false;
}

> sumFinder([6,4,3,2,1,7], 9);
  = true
> sumFinder([6,4,3,2,1,7], 2);
  = false

  // ************ Find the largest sum *********
  function topSum(arr){

  var biggest = arr[0],
      second = arr[1],
      len = arr.length,
      i = 2;

  if (len<2) return null;

  if (biggest<second){
    biggest = arr[1];
    second = arr[0];
  }

  for(; i<len; i++){

   if(arr[i] > biggest){
      second = biggest;
      biggest = arr[i];
    }
   else if (arr[i]>second){
      second = arr[i];
   }

 }
 return biggest + second;
}

// ********* Counting Zeros **********
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}
> countZero(2014);
  = 223
// *************** SubString ************
// How can you match substring of a sting?
function subStringFinder(str, subStr){
  var idx = 0,
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;

   for(; i<len; i++){

      if(str[i] == subStr[j])
         j++;
      else
         j = 0;

      //check starting point or a match
      if(j == 0)
        idx = i;
      else if (j == subLen)
        return idx;
  }

  return -1;
}

> subStringFinder('abbcdabbbbbck', 'ab')
  = 0
> subStringFinder('abbcdabbbbbck', 'bck')
  = 9

//doesn't work for this one.
> subStringFinder('abbcdabbbbbck', 'bbbck')
  = -1

  // ************ PERMUTATIONS ****************
  // How would you create all permutation of a string?
  function permutations(str){
var arr = str.split(''),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;

    if (len == 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
}

// **************** FIND THE INDEX *****************

function find_index(lst, str) {
	for (let i = 0; i < lst.length; i++) {
		if (lst[i] === str) {
			return i;
		}
	}
}
// ---- OR ---
function find_index(lst, str) {
 return lst.indexOf(str);
}

// ******** Check if Number is within a Given Range ******
function isInRange(num, range) {
	return num >= range.min && num <= range.max;
}
// ******** FIND THE MISSING NUMBER *******
const missingNums = (arr) => {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
}
// ______ALTERNATIVE WAY _____
function missingNums(arr) {
  for(var i = 1; i <= 10; i++){
    if(arr.indexOf(i) == -1) return i
  }
}
//******
function missingNums(arr) {
  for (var i = 1; i <= 10;i++){
    if (arr.indexOf(i) == -1){
      return i;
    }
  }
}

// ********** CHECK IF TWO ARRAYS HAVE IDENTICAL ELEMENTS *********
const checkEquals = (a, b) => a.join(",") == b.join(",")

//ALTERNATIVE WAY -----
function checkEquals(arr1, arr2) {
	if (arr1.join() === arr2.join()) {
  	return true
  } else {
  	return false
  }
}
// ******* CAPITALIZE THE NAMES IN ARRAY ********
//capMe(["mavis", "senaida", "letty"])➞ ["Mavis", "Senaida", "Letty"]

function capMe(arr) {
	return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
}
// ********* check Double Letters *************
function doubleLetters(word) {
	word = word.split("");
	for (var i = 1; i < word.length; i++){
		if(word[i-1] == word[i]){
			return true;
			break;
		}
	}
	return false;
}
// **** ALTERNATIVE ****
function doubleLetters(word) {

  let count = 0;

  for (let i = 0; i < word.length ; i ++){
		if (word.includes(word[i].repeat(2))) {
      count++;
    }
  }
  return count >= 2;

}

// ****** Create a function that takes a number as its argument and returns an array of all its factors. *****
function factorize(num) {
	let factors = []
	for (i = 1; i <= num; i++) {
		if (num % i === 0) {
			factors.push(i)
		}
	}
	return factors
}
// ALTERNATIVE WAY *****
function factorize(num) {
	let factors = [];

	for(var i = 1; i <= num; i++) {
		if(num % i == 0) {
			factors.push(i)
		}
	}
	return factors;
}
// ****** Reverse the Order of Words with Five Letters or More *******
function reverse(str) {
  return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
}
// ALTERNATIVE *****
function reverse(str) {
  return str.split(' ').map(s => {
    if (s.length >= 5) {return s.split('').reverse().join('')}
    else {return s}
  }).join(' ')
}
// ***** REMOVE SPECIAL CHARACTER ****
function removeSpecialCharacters(str) {
  return str.replace(/[^0-9A-Za-z\_\ \-]/g,'')
}
// ALTERNATIVE ***
function removeSpecialCharacters(str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase()
    if ((char >= 'a' && char <= 'z') || (char >= '0' & char <= '9') ||
         char == '-' || char == '_' || char == ' ') {
      result += str[i]
    }
  }
  return result
// ******** BASIC EMAIL VALIDATION ***********
function validateEmail(str) {
  var posAt = str.indexOf("@"),
      posDot = str.lastIndexOf(".");

  if (posAt > 0 && posDot > posAt) {
    return true;
  } else {
    return false;
  }
}
// ALTERNATIVE ****
function validateEmail(str) {
  return /.+@.+\..+/.test(str);
}
//ALTERNATIVE ***
function validateEmail(str) {
  return str.match(/\w+@\w+\.\w+/gi) ? true : false;
}
// ****** ATM PIN Code Validation ********
function validatePIN(pin) {
  if (pin.length == 0 || (pin.length != 4 && pin.length != 6)) return false;
  for (i = 0; i < pin.length; i++) {
    if (isNaN(pin[i])) return false;
  }
  return true
}
// ALTERNATIVE ****
function validatePIN(pin) {
  if (!parseInt(pin).isNaN){
    if (pin.length == 4 || pin.length == 6){
      return true;
    }
  }
  return false;
}
// ********* SPLIT ITEM CODES ********
function splitCode(item) {
	return [item.slice(0, item.length/2), item.slice(item.length/2)/1]
}
//ALTERNATIVE***
function splitCode(item) {
	let index = item.split('').findIndex(c => !isNaN(c))
	return [item.substring(0, index), Number(item.substring(index))]
}
// ****************
