from random import randint

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

if num1 < num2:
    print("first number is less tahn  second nbymber ")
    print("the code is stoppiung now")
else:
    randnum = randint(num2, num1)
    print(f"Random number between {num1} and {num2} is: {randnum}")
    