import{Component,Input,inject}from '@angular/core';
import{type Task} from './task.model';
import { CardComponent } from '../../shared/card/card.componet';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
selector:'app-task',
standalone:false,
templateUrl:'./task.component.html',
styleUrl:'./task.component.less',
//imports:[CardComponent,DatePipe]

})

export class TaskComponent{
 @Input({required:true}) task!:Task;
private tasksService=inject(TaskService)

 onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
}
}
