import{Component,Input} from '@angular/core';
import{TaskComponent} from './task/task.component';
import{NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskData } from './task/task.model';
import { TaskService } from './task.service';

@Component({
selector:'app-tasks',
standalone:true,
imports:[TaskComponent,NewTaskComponent],
templateUrl: './tasks.component.html',
styleUrl: './tasks.component.less',

})

export class TasksComponent{
@Input({ required:true})userId!:string;
@Input({required:true}) name?:string; //| undefined it create a uniontype ya3ne the type of value can be stired is either string or undifined ;
isAddingTask=false;

constructor(private tasksService:TaskService){}
        
 
      get selectedUserTAsks(){
        return this.tasksService.getUserTasks(this.userId)
      }

     
    
      onStartAddTask(){
        this.isAddingTask=true;
      }

      onCloseAddTask(){
        this.isAddingTask=false;
      }

      
    }
      

