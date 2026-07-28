# ============================================================================
# PROGRAMMING FUNDAMENTALS — Assignment 5
# Topic: Loops, Sequences, and Functions
# ============================================================================

# ----------------------------------------------------------------------------
# PART A: Print the First N Terms
# ----------------------------------------------------------------------------

def print_fibonacci_sequence(n):
    if n <= 0:
        print("Error: Please enter a positive integer.")
        return
    
    a = 0
    b = 1
    
    sequence = ""
    
    if n >= 1:
        sequence = str(a)
    if n >= 2:
        sequence += " " + str(b)
    
    for i in range(2, n):
        c = a + b
        sequence += " " + str(c)
        a = b
        b = c
    
    print("Fibonacci sequence:", sequence)

# ----------------------------------------------------------------------------
# PART B: Check if a Number Belongs to the Sequence
# ----------------------------------------------------------------------------

def is_fibonacci_number(num):
    if num < 0:
        return False
    
    a = 0
    b = 1
    
    if num == a or num == b:
        return True
    
    while b < num:
        c = a + b
        a = b
        b = c
        
        if b == num:
            return True
    
    return False

# ----------------------------------------------------------------------------
# MAIN PROGRAM
# ----------------------------------------------------------------------------

def main():
    print("\n" + "=" * 50)
    print("       FIBONACCI SEQUENCE GENERATOR")
    print("=" * 50)
    print("1. Part A: Print the First N Terms")
    print("2. Part B: Check if a Number is in the Sequence")
    print("-" * 50)
    
    choice = input("Choose an option (1/2): ")
    print("-" * 50)
    
    if choice == "1":
        print("\n--- PART A: PRINT FIRST N TERMS ---")
        n = int(input("How many terms? "))
        print_fibonacci_sequence(n)
    
    elif choice == "2":
        print("\n--- PART B: CHECK IF NUMBER IS IN SEQUENCE ---")
        num = int(input("Enter a number to check: "))
        
        if is_fibonacci_number(num):
            print(f"{num} is a Fibonacci number.")
        else:
            print(f"{num} is NOT a Fibonacci number.")
    
    else:
        print("Invalid choice. Please run again and select 1 or 2.")
    
    print("\n" + "=" * 50)
    print("End of program. Thank you!")
    print("=" * 50)

if __name__ == "__main__":
    main()