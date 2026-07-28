def add_task(tasks):
    """Add a task to the list."""
    task = input("Enter task: ")
    tasks.append(task)
    print(f'Task added: "{task}"')


def view_tasks(tasks):
    """Display all tasks with numbers."""
    if not tasks:
        print("Your task list is empty.")
        return
    
    print("\nYour Tasks:")
    for i, task in enumerate(tasks, start=1):
        print(f"{i}. {task}")


def delete_task(tasks):
    """Remove a task by its number."""
    if not tasks:
        print("Your task list is empty. Nothing to delete.")
        return
    
    view_tasks(tasks)
    
    try:
        task_num = int(input("Enter task number to delete: "))
        
        if 1 <= task_num <= len(tasks):
            removed_task = tasks.pop(task_num - 1)
            print(f'Task "{removed_task}" has been removed.')
        else:
            print("Invalid task number. Please try again.")
    except ValueError:
        print("Please enter a valid number.")


def main():
    """Main program loop."""
    tasks = []
    
    print("\n" + "=" * 40)
    print("        TO-DO LIST MENU")
    print("=" * 40)
    
    while True:
        print("\n1. Add task")
        print("2. View tasks")
        print("3. Delete task")
        print("4. Quit")
        
        choice = input("Enter your choice (1-4): ")
        print("-" * 30)
        
        if choice == "1":
            add_task(tasks)
        elif choice == "2":
            view_tasks(tasks)
        elif choice == "3":
            delete_task(tasks)
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 4.")


if __name__ == "__main__":
    main()