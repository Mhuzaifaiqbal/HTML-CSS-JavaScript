 export class Task{
    #taskid;
    task_priority;
    task_description;
    task_status;
    dueDate;
    createdAt;


    constructor(id, priority,description,status,duedate,createdAt){
        this.#taskid=id;
        this.task_priority=priority;
        this.task_description=description;
        this.task_status=status;
        this.dueDate=duedate;
        this.createdAt=createdAt;
    }

    updateStatus(newstatus){
         const valid=['pending','completed','in-progress'];
        if(valid.includes(newstatus)){
            this.task_status=newstatus;
            console.log("status updated successfully!");
        }
        else{
            console.log("Failed to Update Status!");
        }
    }

    updateDetails(newdescription, newpriority,newdueDate){
        if(newpriority>5 || newpriority<0){
            console.log("invalid priority entered!");
            return;
        }
        this.task_description=newdescription;
        this.task_priority=newpriority;
        this.dueDate=newdueDate;
        console.log("Updated Successfully!");
        return;
    }
    
    get id(){
        return this.#taskid;
    }

    
}