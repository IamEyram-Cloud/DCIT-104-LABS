def is_prime(n):
    if n < 2:
        return False
    
    for i in range(2, n):
        if n % i == 0:
            return False
    
    return True

def main():
    user_input = input("Enter a number: ")
    number = int(user_input)
    
    if is_prime(number):
        print(f"{number} is a prime number.")
    else:
        print(f"{number} is NOT a prime number.")

if __name__ == "__main__":
    main()