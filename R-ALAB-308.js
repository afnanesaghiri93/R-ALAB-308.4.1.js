
// const dataArray = Object.entries(CSVfile);
// for (i=0; i<dataArray.length; i++){
// console.log(dataArray[i]+"\n");
// }


//====================== PART 1: Refactoring Old Code ======================================/
// ====> Loop through the characters of a given CSV string.===========
const CSVstring = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";

for (let i = 0; i < CSVstring.length; i++) {
    CSVstring[i] = CSVstring[i] + "\n";
    console.log(CSVstring)
};
//=============> Store each “cell” of data in a variable.  <=============

let row1 = "ID,name,Occupation,Age \n";//There will only be 4 cells per row.

let row2 = "42,Bruce,Knight,41\n";//There will be no escaped characters other than “\n”.


let row3 = "57,Bob,Fry Cook,19\n";
;
let row4 = "63,Blaine,Quiz Master,58\n";

let row5 = "98,Bill,Doctors Assistant,26";



//==================> Log each row of data. <==================
console.log(row1, row2, row3, row4, row5);



//================> PART 2: Expanding Functionality==============

//=================Declare a variable that stores the number of columns in each row of data within the CSV.====//
//Store your results in a two-dimensional array.
const rowData = [

    ['ID', 'name', 'Occupation', 'Age'],
    ['42', 'Bruce', 'Knight', '41'],
    ['57', 'Bob', 'Fry Cook', '19'],
    ['63', 'Blaine', 'Quiz Master', '58'],
    ['98', 'Bill', 'Doctors Assistant', '26']
]


// console.Log each row of data.
console.log(rowData);


//=======Part 3: Transforming Data================
//Create an object where the key of each value is the heading for that value’s column.
//Convert these keys to all lowercase letters for consistency.
const rowData1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
]//We have an array of objects. Each object contains a few properties 
//Store these objects in an array, in the order that they were originally listed.

console.log(rowData1);
//  Using the Object.fromEntries() method to convert an array of key-value pairs into an object.
// const object= Object.fromEntries(rowData1);
// console.log(rowData1)


//============================ PART4: Sorting and Manipulating Data =================//
///1- Remove the last element from the sorted array.
rowData1.pop();
console.log(rowData1);

// 2- Insert the following object at index 1:{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
rowData1.splice(4, 1, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(rowData1);
// 3- Add the following object to the end of the array:{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
rowData1.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(rowData1);
// 4- Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group.
//We have to write a function that takes in such an array and returns the average of all the ages present in the array.
const findAverageAge = (arr) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
        return acc + (val.age / length);
    }, 0);
};
console.log(findAverageAge(rowData1));// the output :50.8


//========================== PART 5: Full Circle =========================//
//Transform the final set of data back into CSV format.
// we have to usie map() and join () method.
// const csvString = rowData1.map( rowData1 =>`${rowData1.id},${rowData1.name},${rowData1.occupation},${rowData1.age}`).join(',');
const csvString = [
    [
        "id :",
        "name :",
        "occupation:",
        "age :"
    ],
    ...rowData1.map(item => [
        item.id,
        item.name,
        item.occupation,
        item.age

    ])
];
rowData1.join(",");

console.log(csvString);



//Additional task log into table :
// console.table(rowData1)
// ┌─────────┬──────┬──────────┬───────────────┬───────┐
// │ (index) │ id   │ name     │ occupation    │ age   │
// ├─────────┼──────┼──────────┼───────────────┼───────┤
// │ 0       │ '42' │ 'Bruce'  │ 'Knight'      │ '41'  │
// │ 1       │ '57' │ 'Bob'    │ 'Fry Cook'    │ '19'  │
// │ 2       │ '63' │ 'Blaine' │ 'Quiz Master' │ '58'  │
// │ 3       │ '48' │ 'Barry'  │ 'Runner'      │ '25'  │
// │ 4       │ '7'  │ 'Bilbo'  │ 'None'        │ '111' │
// └─────────┴──────┴──────────┴───────────────┴───────┘