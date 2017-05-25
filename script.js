// total sum from 1 to 3
console.log('-Find and display total sum of numbers from 1 to 3:');
function sum() {
	var numbers = 0;
	for (var i =0; i <= 3; i++){
		numbers+=i;
	}        
	return(numbers);     
}
sum();
console.log('sum is ' + sum());
console.log('\n')


// total sum from 20 to 220
console.log('-Find and display total sum of numbers from 20 to 220:');
function sumsec() {
	var numbers = 20;
	for (var i =0; i <= 220; i++){
		numbers+=i;
	}        
	return(numbers);     
}
sumsec();
console.log('sum is ' + sumsec());
console.log('\n')


/* display EVEN numbers from 1 to 20 
with 'continue'*/
console.log('-Display even numbers from 1 to 20 by using for loop:')
function withCon() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            continue;
        } else {
            console.log('with "continue": ' +  i);
        }
    }
}
withCon();
console.log('\n')


/* numbers from 1 to 20 
without 'continue' */
function withoutCon(a,b) {
     for(var i=a; i<=b; i++) {
         if(!(i%2))   {
             console.log('without "continue": ' + i);
         }
     }

 }
withoutCon(1,20);
console.log('\n')


//Display odd numbers from 10 to 30 by using ‘while’ loop
console.log('-Display odd numbers from 10 to 30 by using ‘while’ loop:')
function oddNum(){
	var a = 10;
	while(a < 30){
		if (!(a % 2 == 0)){
			console.log(a);
		}
		a++;
	}
}
oddNum();
console.log("\n")


/*Display numbers from 1 to 15 using ‘for’ loop, 
once num of iteration is equal the 
num of month of your birthday then 
stop execution of loop*/
console.log('-Display numbers from 1 to 15 until your birthday date:')
function  birthday(b) {
    for (var i=1; i<=b; i++){
        console.log(i);
    }
}
birthday(4);
console.log("\n")


//- Rewrite code from using "for" to using "while"
console.log('-Rewrite code from using "for" to using "while":')
function re(){
var i = 0;
while (i < 5) {
   console.log(`number ${i}  =)`);
	i++;
	}
}
re();
console.log("\n")


/*- Write code which will ask user (prompt) 
to put number greater than 100,
repeat prompt until user put required number, 
then display result of prompt*/
console.log('-do it using "while":')
function wish(){
	var request = parseInt(prompt('Please enter a number than bigger 100'));
	while (request < 100||isNaN(request)){
		request = parseInt(prompt('Please enter a number than bigger 100'));
	}
	alert(request);
	console.log(request + ', You have done a good job!')
}
wish();
console.log("\n")


console.log('-do it using "do while":')
function ask(){
	do{
		var request = parseInt(prompt('Please enter a number than bigger 100'));
		}
		while (request < 100 || isNaN(request));
		alert(request);
		console.log(request + ', Congrats, You have done a good job again!!!')
	}
ask();
console.log("\n")

//- Show in console using for.
console.log('-Show # in console using "for":')
function hashtag(){
	var hashtag = '#';
	for(var i = 0; i < 8; i++){
		console.log(hashtag);
		hashtag += hashtag[i];
	}
}
hashtag();

// Thank u for your patience!!!