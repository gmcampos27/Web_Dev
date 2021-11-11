			document.write("<h1>Hello, world!</h1>");
			var x = 38%5;
			document.write(x + "<br />");
			var number = 20;
			number *= 5;
			document.write("\n");
			document.write(number);
			function main() {
    		var age = parseInt(readLine(), 10)
   			if(age < 18){
   				alert("Você não tem permissão")
   				}
    		var distance = parseInt(readLine(), 10);
    		var time = (distance/40)*60;
    		console.log(time);
    		var num1 = parseInt(readLine(),10);
    		var num2 = parseInt(readLine(),10);
    		var num3 = parseInt(readLine(),10);

   			var average;
    		//assign the average value to the variable average 
    
   	 		average = avg(num1,num2,num3);
    		console.log(average);

			}

			function sayHello(name, age) {
 			document.write( name + " is " + age + " years old.");
			}
			sayHello("David", 25)

			//complete the function
			function avg(num1,num2,num3){
    		var sum = num1+num2+num3;
    		average = sum/3;
    		return(average);
			}
