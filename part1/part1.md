Part1a
1. 20
2. 20
3. 20
4. error, because the "let" keyword allows access only within the block where the variable is defined. Variable result is then defined in the if block, so it's going to result in error if we access it out of that if-block.
5. error,because result is already initailized to 0. Since result is "const", it can't be reassigned with a new value
6. error. "const" keyword gives the same scope as the "let" keyword, which only allows access within the block that defines that variable. We logged the result out of the if-block, which will result in error.

Part1b
1. 2 is being logged onto the console. No error is generated because variable i is declared with var keyword, which allows access globally or function-scoped.
2. 150 is logged onto the console. discountedPrice is declared with var keyword, therefore it's accessible out of the if-bloc(var gives scope globally or function-scoped). 
3. 150 is logged onto the console. finalPrice is declared with var keyword. which is accessible within the function. 
4. The return value is [50, 100, 150], which is the discounted prices. For every for loop iteration, we calculate the discountedPrice for a given original price. We round it and store it into the finalPrice variable(rounded), then push it into discountedPrice array. After price.length iterations, each discounted price is calculated and stored into discountedPrice array, and that variable is returned.
5. Error, because let keyword gives a scope only within the for-loop bloc. Yet, we're trying to log it onto the terminal out of the for-loop
6. Error, because discountedPrice is declared with the let keyword, giving valid scope within the for loop.
7. 150 is logged onto the console. Although the let keyword restricts the scope, finalPrice is declared within the funciont(and out of the for loop), therefore, the place where we access it is in the same scope as the declaration. Within the for loop, the finalPrice is updated and finally stored as the last discounted price. 
8. The return value is still [50, 100, 150]. Variable discounted is declared with the let keyword, so discounted is accessible within the function discountPrices(). The discounted is then updated within the for loop, finalPrice being pushed into discounted as intended.
9. Error, because i is declared with let keyword within the for loop, therefore not accessible out of for loop
10. 3 is logged onto the console. length is initialied with the length of prices array, which is 3 given prices=[100,200,300]
11. The return value is [50, 100, 150], which is the discounted prices. We acquire the length of prices array and store it into variable length. Within the for loop, each discounted price is pushed into the discounted (array). Although discounted is declared const keyword, we're still allowed to push elements, which produces the discounted prices as intended, which is [50,100,250]


Part 2
2. Given the above object, write the notation for:
   1. (A)  student.name
   2. (B)  student['Grad Year']
   3. (C)  student.greeting()
   4. (D)  student["Favorite Teacher"].name
   5. (E)  student.courseLoad[0]

Basic Operations & Type Conversion
3. Arithmetic
   1. (A) '32', 2 is casted to a string, so we're essentially performing string concatenation.
   2. (B) 1. In this case, '3' is casted to an integer to perform valid subtraction operation. The operation is essentially 3-2=1
   3. (C) 3, because null is mapped to 0, so the equation is essentially 3+0=0
   4. (D) Error, we can't add a string to a null value(there's no valid mapping from a null value to a string/char)
   5. (E) 4, true is mapped to 1 when performing operations involving with integers. The arithmetic operation is essentially 1+3=4
   6. (F) 0, false is interpreted as 0 by default. When doing addition, null is mapped to 0. The operation is essentially 0+0=0
   7. (G) "3undefined", undefined is casted to a string when adding a string "3", therefore this addition operation is performing string concatenation.
   8. (H) NaN. The operation is undefined because there's no way for us to substract a string from undefined. 
4. Comparison
   1. (A) True, '2' is casted to integer, and 2>1, therefore returns True
   2. (B) False, we're comparing to strings(no casting is performed), and '2'>'1'(Because '1' has smaller ascii value)
   3. (C) True, 2' is casted to integer 2, and 2==2 is true
   4. (D) False,The triple-equals comparator implements strict equality, checking the data types. Boolean isn't equal to intege, therefore returns false
   5. (E) False, true is casted to 1, and 1 isn't equal to 2
   6. (F) True, Boolean(2) evaluates to true, which is equivalent to the left hand side. 
5. Explain the difference between == and === operators
   The === implements strict equality,checking data types strictly and doesn't cast values. If the data types are different,even though the casted results are equal, it evaluates to false. On the other hand, == allows operands to be casted, so as logn as the casted results are equal, the result will be true. For example '2'==2 results to true because '2' is casted to an integer(2). If we perform '2'===2, it will result to false, because string/char type is different from integer type. 
7. Explain modifyArray([1,2,3], doSomething)
   1. It's going to return [2,4,6]. Within the for loop of modifyArray, we're pushing value of callback, with argument = array[i], into the newArr. The callback method corresponds to the doSomething method, which multiplies the current number by 2. Therefore, each iteration within the for loop pushes double the original value into the newArr. 
9.  1 4 3 2
   