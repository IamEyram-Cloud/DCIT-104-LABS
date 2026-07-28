def add_student(students):
    """Add a new student to the list."""
    name = input("Student name: ")
    student_id = int(input("Student ID: "))
    
    num_scores = int(input("How many scores? "))
    scores = []
    
    for i in range(1, num_scores + 1):
        score = int(input(f"Enter score {i}: "))
        scores.append(score)
    
    student = {
        "name": name,
        "id": student_id,
        "scores": scores
    }
    
    students.append(student)
    print(f'Student "{name}" added successfully.')


def display_all_students(students):
    """Display all students in a formatted table."""
    if not students:
        print("No students have been added yet.")
        return
    
    print("\n" + "-" * 50)
    print(f"{'Name':<15} {'ID':<12} {'Scores':<20} {'Average':<10}")
    print("-" * 50)
    
    for student in students:
        name = student["name"]
        student_id = student["id"]
        scores = student["scores"]
        
        # Convert scores list to a string like "78, 85, 90"
        scores_str = ", ".join(str(s) for s in scores)
        
        # Calculate average
        avg = sum(scores) / len(scores) if scores else 0
        avg_str = f"{avg:.2f}"
        
        print(f"{name:<15} {student_id:<12} {scores_str:<20} {avg_str:<10}")
    
    print("-" * 50)


def calculate_average(students):
    """Calculate and display average score for a specific student."""
    if not students:
        print("No students have been added yet.")
        return
    
    try:
        student_id = int(input("Enter student ID: "))
        
        for student in students:
            if student["id"] == student_id:
                scores = student["scores"]
                avg = sum(scores) / len(scores) if scores else 0
                print(f"{student['name']}'s average score: {avg:.2f}")
                return
        
        print("Student ID not found. Please try again.")
    except ValueError:
        print("Please enter a valid numeric ID.")


def main():
    """Main program loop."""
    students = []
    
    print("\n" + "=" * 40)
    print("     STUDENT RECORD SYSTEM MENU")
    print("=" * 40)
    
    while True:
        print("\n1. Add student")
        print("2. Display all students")
        print("3. Calculate average score")
        print("4. Quit")
        
        choice = input("Enter your choice (1-4): ")
        print("-" * 30)
        
        if choice == "1":
            add_student(students)
        elif choice == "2":
            display_all_students(students)
        elif choice == "3":
            calculate_average(students)
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 4.")


if __name__ == "__main__":
    main()