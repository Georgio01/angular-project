export interface Task{
    id:string;
    userId:string;
    title:string;
    summary:string;
    dueDAte:string;
}

export interface NewTaskData{
    title:string;
     summary:string;
     date:string
}