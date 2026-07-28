def add_numbers(a, b):
    """Return the sum of two numbers."""
    return a + b

def subtract_numbers(a, b):
    """Return the difference of two numbers."""
    return a - b

def multiply_numbers(a, b):
    """Return the product of two numbers."""
    return a * b

def divide_numbers(a, b):
    """Return the quotient of two numbers."""
    if b == 0:
        return None  # Indicates division by zero
    return a / b

def modulus_numbers(a, b):
    """Return the remainder of division."""
    if b == 0:
        return None  # Indicates division by zero
    return a % b

def exponentiate_numbers(a, b):
    """Return a raised to the power of b."""
    return a ** b

def get_two_numbers():
    """Get two numbers from the user."""
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        return num1, num2
    except ValueError:
        print("Error: Please enter valid numbers.")
        return None, None

def main():
    """Main program loop."""
    print("\n" + "=" * 40)
    print("        SIMPLE CALCULATOR")
    print("=" * 40)
    
    while True:
        print("\n1. Addition")
        print("2. Subtraction")
        print("3. Multiplication")
        print("4. Division")
        print("5. Modulus")
        print("6. Exponentiation")
        print("7. Quit")
        
        choice = input("Select an operation (1-7): ")
        print("-" * 30)
        
        if choice == "7":
            print("Goodbye!")
            break
        
        if choice not in ["1", "2", "3", "4", "5", "6"]:
            print("Invalid choice. Please select a number between 1 and 7.")
            continue
        
        # Get the two numbers
        num1, num2 = get_two_numbers()
        if num1 is None:  # Error occurred in input
            continue
        
        # Perform the operation
        result = None
        operation = ""
        
        if choice == "1":
            result = add_numbers(num1, num2)
            operation = "+"
        elif choice == "2":
            result = subtract_numbers(num1, num2)
            operation = "-"
        elif choice == "3":
            result = multiply_numbers(num1, num2)
            operation = "*"
        elif choice == "4":
            result = divide_numbers(num1, num2)
            operation = "/"
        elif choice == "5":
            result = modulus_numbers(num1, num2)
            operation = "%"
        elif choice == "6":
            result = exponentiate_numbers(num1, num2)
            operation = "**"
        
        # Display the result
        if result is None:
            print("Error: Cannot divide by zero.")
        else:
            # Format result: if it's an integer (whole number), show as int
            if result.is_integer():
                result_str = str(int(result))
            else:
                result_str = f"{result:.2f}"
            
            # Format numbers: if they are integers, show as int
            num1_str = str(int(num1)) if num1.is_integer() else str(num1)
            num2_str = str(int(num2)) if num2.is_integer() else str(num2)
            
            print(f"Result: {num1_str} {operation} {num2_str} = {result_str}")

if __name__ == "__main__":
    main()