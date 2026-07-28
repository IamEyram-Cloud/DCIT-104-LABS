def calc_total(num_list):
    total = 0
    for n in num_list:
        total = total + n
    return total

def calc_avg(num_list):
    total = calc_total(num_list)
    count = len(num_list)
    return total / count

def find_max(num_list):
    max_val = num_list[0]
    for n in num_list:
        if n > max_val:
            max_val = n
    return max_val

def find_min(num_list):
    min_val = num_list[0]
    for n in num_list:
        if n < min_val:
            min_val = n
    return min_val

def main():
    user_input = input("How many numbers? ")
    count = int(user_input)
    
    if count <= 0:
        print("Error: Please enter a positive integer.")
        return
    
    nums = []
    for i in range(1, count + 1):
        num_input = input(f"Enter number {i}: ")
        num = int(num_input)
        nums.append(num)
    
    total = calc_total(nums)
    avg = calc_avg(nums)
    maximum = find_max(nums)
    minimum = find_min(nums)
    
    print("\nResults:")
    print(f"Sum:     {total}")
    print(f"Average: {avg}")
    print(f"Maximum: {maximum}")
    print(f"Minimum: {minimum}")

if __name__ == "__main__":
    main()