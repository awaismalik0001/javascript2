// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
console.log("Q no 1");
for(a=1;a<=100;a++){
    console.log(a);
}

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
console.log("Q no 2:-");
var b=100;
while(b>=1){
    console.log(b);
    b--;
}
// 3. Write a js program to print all alphabets from a to z. - using while loop
console.log("Q no 3:-");
for(c=65;c<=90;c++){
    console.log(String.fromCharCode(c));
}
console.log("also in small alphabets")
for(d=96;d<=122;d++){
    console.log(String.fromCharCode(d));
}
// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
console.log("Q no 4 Even no:-");
for(f=2;f<=100;f=f+2){
    console.log(f);
}
// 5. Write a js program to print all odd number between 1 to 100.
console.log("Q no 5 Odd no:-");
for(f=1;f<=100;f=f+2){
    console.log(f);
}
// 6. Write a js program to find sum of all natural numbers between 1 to n.
console.log("Q no 6:-");
var sum=0;
for(e=1;e<=100;e++){
    sum=sum+e
}
console.log(sum)
// 7. Write a js program to find sum of all even numbers between 1 to n.
console.log("Q no 7:-");
var sum=0;
for(g=2;g<=100;g=g+2){
    sum=sum+g; 
}
console.log(g);
// 8. Write a js program to find sum of all odd numbers between 1 to n.
console.log("Q no 8:-");
var sum=0;
for(h=1;h<=100;h=h+2){
    sum=sum+h; 
}
console.log(h);

// HERE WE COMPLETE THE FIRST STEP OF ASSIGMENT

// 1. Write a js program to find maximum between two numbers.
console.log("Q no 9:-");
var i=10;
var j=20;
if(i>=j){
    console.log("i is greater no");
}
else{
    console.log("j is greater no");
}
// 2. Write a js program to find maximum between three numbers.
console.log("Q no 10:-");
var o=10;
var l=40;
var m=30;
if(o>=l & o>=m){
    console.log("o is greater no");
}
else if(l>=o & l>=m){
    console.log("l is greater no");
}
else{
    console.log("m is greater no");
}
// 3. Write a js program to check whether a number is negative, positive or zero.
console.log("Q no 11:-");
var n=prompt("Enter value");
if(n>0){
    console.log("positive value");
}
else if(n<0){
    console.log("negative no");
}
else{
    console.log("zero");
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
console.log("Q no 12:-");
var p=prompt("Enter value");
if(p%5==0 & p%11==0){
    console.log(" yes it is divisible by 5 and 11");
}
else{
    console.log("it is not divisible")
}
// 5. Write a js program to check whether a number is even or odd.
console.log("Q no 13:-");
var q=prompt("Enter value");
if(q%2==0){
    console.log("Even no")
}
else{
    console.log("odd no")
}
// 6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.
console.log("Q no 14:-");
var r=prompt("Enter year");
if(r%4==0 & r%100==0){
    console.log("its leap year")
}
else{
    console.log("its not leap year")
}
// Write a js program to input any alphabet and check whether it is vowel or consonant.
console.log("Q no 15:-");
var s=prompt("Enter alphabet");
switch(s){
    case "a":
        console.log("it is vowel");
        break;
    case "e":
         console.log("it is vowel");
         break; 
    case "i":
        console.log("it is vowel");
        break; 
    case "o":
        console.log("it is vowel");
        break; 
    case "u":
        console.log("it is vowel");
        break; 
    default :
    console.log("its is constant")
    break;
}
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
console.log("Q no 16:-");
var x=prompt("Enter Character");
if(x>="a" & x<="z" || x>="A" & x<="Z"){
    console.log("its alphabtes");
}
else if(x===Number){
    console.log("its digits");
}
else{
    console.log("special character")
}

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
console.log("Q no 17:-");
var y=prompt("check character");
if(y>="a" & y<="z"){
    console.log("small alphabets");
}
else if(y>="A" & y<="Z"){
    console.log("Capital alphabets");
}
else{
    console.log("error");
}
// 11. Write a js program to input week number and print week day.
console.log("Q no 18:-");
var weekdays=prompt("enter day no");
switch (weekdays) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("Tuesday")
        break;
     case "3":
        console.log("Wednesday")
        break;  
    case "4":
        console.log("Thursday")
        break;  
    case "5":
        console.log("friday")
        break;  
    case "6":
        console.log("Saturday")
        break;  
    case "7":
        console.log("Sunday")
        break;   
    default :
    console.log("wrong");
    break;           
}
// 12. Write a js program to input month number and print number of days in that month.
console.log("Q no 19:-");
var monthnumber=prompt("Enter month no");
if(monthnumber=="1"||monthnumber=="3"||monthnumber=="5"||monthnumber=="7"||monthnumber=="8"||monthnumber=="10"||monthnumber=="12"){
    console.log("31 days in this month");
}
else if(monthnumber=="4"||monthnumber=="6"||monthnumber=="9"||monthnumber=="11"){
    console.log("30 days in this month");
}
else if(monthnumber=="2"){
    console.log("28 or 29 days");
}
else{
    console.log("error");
}
// 13. Write a js program to count total number of notes in given amount.
console.log("Q no 20:-");
var amount=prompt("Enter amount");
var notes=0;
if (amount>=100){
    notes=notes+amount/100
    console.log(notes)
}
else{
    console.log("enter amount greater than 100");
}
// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
console.log("Q no 21:-");
var triangle1=90;
var triangle2=30;
var triangle3=60;
var triangle=triangle1+triangle2+triangle3;
if(triangle==180){
    console.log("triangle valid");
}
else{
    console.log("triangle is not valid");
}
// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
console.log("Q no 22:-");
var sidesa=30;
var sidesb=20;
var sidesc=50;
if(sidesa+sidesb>sidesc&&sidesb+sidesc>sidesa&&sidesa+sidesc>sidesb){
    console.log("triangle is valid")
}
else{
    console.log("Not valid triangle")
}
// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
console.log("Q no 23:-");
var a = 10;
var b = 20;
var c = 30;

if (a === b && b === c) {
    console.log("triangle is equilateral");
}

else if (a === b || a === c || b === c) {
    console.log("triangle is isosceles");
}

else {
    console.log("triangle is scalene");
}
// 17. Write a js program to find all roots of a quadratic equation.
console.log("Q no 24:-");
var a = 1;
var b = 5;
var c = 6;

var d = (b * b) - (4 * a * c);

if (d > 0) {
    var root1 = (-b + Math.sqrt(d)) / (2 * a);
    var root2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("roots are" + root1 + "and" + root2);
}

else if (d === 0) {
    var root1 = (-b + Math.sqrt(d)) / (2 * a);
    console.log("root is" + root1);
}

else {
    console.log("roots are imaginary");
}
// 18. Write a js program to calculate profit or loss.

console.log("Exercise no 26");

var cp = 100;
var sp = 50;

if (sp > cp) {
    var profit = sp - cp;
    console.log("profit is " + profit);
}
else if (sp < cp){
    var loss = cp - sp;
    console.log("loss is " + loss);
}

else {
    console.log("no profit or loss");
}
// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
console.log("Q no 27");
var a=parseInt(prompt("Enter physics no"));
var b=parseInt(prompt("Enter Chemistry no"));
var c=parseInt(prompt("Enter Biology no"));
var d=parseInt(prompt("Enter Mathematics no"));
var e=parseInt(prompt("Enter Computer no"));
var f=a+b+c+d+e;
var g=(f/500)*100;
if(g>=90){
    console.log("your grade is A");
}
else if(g>=80){
    console.log("your grade is B");
}
else if(g>=70){
    console.log("Your grade is c");
}
else if(g>=60){
    console.log("your grade is D");
}
else if(g>=40){
    console.log("your grade is E");
}
else{
    console.log("your grade is F");
}
console.log(f);
console.log(g);
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var salary=prompt("Enter monthly salary");
var hra=0;
var da=0;
var Grosssalary=0;
if(salary<=1000){
    hra=(salary*20)/100;
    da=(salary*80)/100;
}
else if(salary<=20000){
    hra=(salary*25)/100;
    da=(salary*90)/100;
}
else{
    hra=(salary*30)/100;
    da=(salary*95)/100;
}
console.log(hra);
console.log(da);
Grosssalary=salary+hra+da;
console.log(Grosssalary);
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit


var units=prompt("Enter total units");
var electricitybill=0;
if(units<=50){
    electricitybill=units*0.50;
    console.log(electricitybill);
}
else if(units<=150){
    electricitybill=50*0.50 + (units-50)*0.75;
    console.log(electricitybill);
}
else if(units<=250){
    electricitybill=50*0.50 + 100*0.75 + (units-150)*1.20;
    console.log(electricitybill);
}
else{
    electricitybill=50*0.50 + 100*0.75 +150*1.20 + (units-300)*1.20;
    console.log(electricitybill); 
}