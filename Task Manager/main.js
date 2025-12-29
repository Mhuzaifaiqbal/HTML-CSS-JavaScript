import { Task } from "./task.js";
import { TaskManager } from "./taskManager.js";


function main() {
    // Initialize TaskManager
    const manager = new TaskManager();

    // Create some tasks
    const task1 = new Task(1, 3, "Finish report", "pending", "2025-12-31", "2025-12-01");
    const task2 = new Task(2, 5, "Prepare presentation", "in-progress", "2025-12-28", "2025-12-01");
    const task3 = new Task(3, 2, "Reply to emails", "pending", "2025-12-30", "2025-12-01");

    // Insert tasks into the manager
    manager.insert(task1);
    manager.insert(task2);
    manager.insert(task3);

    console.log("Initial heap:");
    console.log(manager.heap);

    // Peek at highest priority task
    console.log("Top priority task:");
    console.log(manager.peek());

    // Update task priority
    console.log("\nUpdating priority of task 3 to 6...");
    manager.updateTaskPriority(3, 6);
    console.log(manager.heap);

    // Remove a task
    console.log("\nRemoving task 2...");
    manager.removeTask(2);
    console.log(manager.heap);

    // Extract max (highest priority) task
    console.log("\nExtracting highest priority task...");
    const maxTask = manager.extractMax();
    console.log(maxTask);
    console.log("Heap after extraction:");
    console.log(manager.heap);

    // Update task details
    console.log("\nUpdating task 1 details...");
    task1.updateDetails("Finish final report", 4, "2026-01-02");
    console.log(task1);

    // Update task status
    console.log("\nUpdating task 1 status...");
    task1.updateStatus("completed");
    console.log(task1);
}

// Run the main function
main();
