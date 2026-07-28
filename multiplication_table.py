# ----------------------------------------------------------------------------
# PART A: Single Table
# ----------------------------------------------------------------------------

def print_single_table(num):
    print(f"\nMultiplication Table for {num}:")
    for i in range(1, 13):
        result = num * i
        print(f"{num}  x  {i:2}  =  {result:3}")

# ----------------------------------------------------------------------------
# PART B: Tables from 1 to N
# ----------------------------------------------------------------------------

def print_tables_upto(n):
    if n <= 0:
        print("Error: Please enter a positive integer.")
        return
    
    for num in range(1, n + 1):
        print_single_table(num)
        print("-" * 30)  # Separator line

# ----------------------------------------------------------------------------
# MAIN PROGRAM
# ----------------------------------------------------------------------------

def main():
    print("\n" + "=" * 50)
    print("       MULTIPLICATION TABLE GENERATOR")
    print("=" * 50)
    print("1. Part A: Print a Single Table")
    print("2. Part B: Print Tables from 1 to N")
    print("-" * 50)
    
    choice = input("Choose an option (1/2): ")
    print("-" * 50)
    
    # =========================================================================
    # PART A: SINGLE TABLE
    # =========================================================================
    if choice == "1":
        print("\n--- PART A: SINGLE TABLE ---")
        num = int(input("Enter a number: "))
        print_single_table(num)
    
    # =========================================================================
    # PART B: TABLES FROM 1 TO N
    # =========================================================================
    elif choice == "2":
        print("\n--- PART B: TABLES FROM 1 TO N ---")
        n = int(input("Enter a number N: "))
        print_tables_upto(n)
    
    else:
        print("Invalid choice. Please run again and select 1 or 2.")
    
    print("\n" + "=" * 50)
    print("End of program. Thank you!")
    print("=" * 50)

if __name__ == "__main__":
    main()
