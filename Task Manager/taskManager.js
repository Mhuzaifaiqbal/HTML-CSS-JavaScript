import { Task } from "./task.js";

export class TaskManager{
    constructor(){
        this.heap=[];
    }
    insert(task) {
        if (!(task instanceof Task)) {
            throw new Error("Can only insert Task objects");
        }
        this.heap.push(task);
        this.heapifyUp(this.heap.length - 1);
    }
    peek(){
        return this.heap[0];
    }
    heapifyDown(i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < this.heap.length && this.heap[left].task_priority > this.heap[largest].task_priority) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right].task_priority > this.heap[largest].task_priority) {
            largest = right;
        }

        if (largest != i) {
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            this.heapifyDown(largest);
        }
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parent].task_priority < this.heap[index].task_priority) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }


    extractMax(){
        if(this.heap.length==0){
            return null;
        }
        if(this.heap.length==1){
            return this.heap.pop();
        }
        let temp=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown(0);
        return temp;
    }

    increaseKey(i, newPriority) {
        if (newPriority < this.heap[i].task_priority) {
            throw new Error("invalid value");
        }
        this.heap[i].task_priority = newPriority;
        this.heapifyUp(i);
    }


    removeTask(id) {
        let i = -1;
        for (let j = 0; j < this.heap.length; j++) {
            if (this.heap[j].id === id) {
                i = j;
                break;
            }   
        }
        if (i === -1) return false;

        this.increaseKey(i, Infinity); 
        this.extractMax();             
        return true;
    }

    updateTaskPriority(id, newPriority) {
        let found = false;
        for (let i = 0; i < this.heap.length; i++) {
            if (this.heap[i].id === id) {
                found = true;
                let oldPriority = this.heap[i].task_priority;
                this.heap[i].task_priority = newPriority;
                
                if (newPriority > oldPriority) {
                    this.heapifyUp(i);
                } else if (newPriority < oldPriority) {
                    this.heapifyDown(i);
                }
                break;
            }
        }
        if (!found) {
            console.log("No task with this id found");
        }
    }

    returnTasks(){
        //all in sorted order according to the priority
    }


}