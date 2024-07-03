import{Component,Output,EventEmitter,signal, inject, Input} from '@angular/core';
import{FormsModule} from '@angular/forms';
import{type NewTaskData} from'../task/task.model'
import { TaskService } from '../task.service';

@Component({
    selector:'app-new-task',
    standalone:false,
    templateUrl:'./new-task.component.html',
    styleUrl:'./new-task.component.less',
    //imports[FormsModule],

})
export class NewTaskComponent{
@Input({required:true}) userId!:string;
@Output() close=new EventEmitter<void>()

enteredTitle='';
enteredSummary='';
entereddueDate='';

private tasksService=inject(TaskService)

onCancel(){
        this.close.emit()
    }

onSubmit(){
    this.tasksService.addTask({
        title:this.enteredTitle,
        summary:this.enteredTitle,
        date:this.entereddueDate,
    },
    this.userId
);
   this.close.emit(); 
    
}
}