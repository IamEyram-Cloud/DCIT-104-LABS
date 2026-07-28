def get_grade(score):
    # Validate that score is between 0 and 100
    if score < 0 or score > 100:
        return None   # Invalid score
    
    # Use if/elif/else to assign grade
    if score >= 80:
        return "A"
    elif score >= 70:
        return "B"
    elif score >= 60:
        return "C"
    elif score >= 50:
        return "D"
    else:
        return "F"

def main():
    # Ask user for score
    user_input = input("Enter student score (0-100): ")
    score = int(user_input)
    
    # Call get_grade()
    grade = get_grade(score)
    
    # Print result or error message
    if grade is None:
        print("Error: Score must be between 0 and 100.")
    else:
        print(f"Grade: {grade}")

if __name__ == "__main__":
    main()