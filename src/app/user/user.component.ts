import{Component, Input,input,computed,Output ,EventEmitter,output/*signal*/} from '@angular/core';
import{type User} from './user.model';
//import{DUMMY_USERS} from '../dummy-users';
import { CardComponent } from '../shared/card/card.componet';

//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);


Component({
    selector:'app-user',
    standalone:true,
    imports:[CardComponent],
    templateUrl:'./user.component.html',
    styleUrl:'./user.component.less',
    

})

export class UserComponent{
    @Input({required:true})user!:User;
    @Input({required:true})selected!:boolean

   /* @Input({required:true})user!:{
        id:string;
        avatar:string;
        name:string;
    };//we use tjis insted of using yhose 3 below
        /*@Input({required:true}) id!:string;
        @Input({required:true})avatar!: string;
        @Input({required:true}) name!: string;*/
         
        @Output() select=new EventEmitter<string>();
      // select=output<string>();

       /* avatar=input.required<string>();
        name=input.required<string>();

        imagePath=computed(()=>{
            return 'assets/users/' + this.avatar;
        })*/

        get imagePath(){
            return 'assets/users/' + this.user.avatar;
        }

onSelectUser(){
    this.select.emit(this.user.id);
}
}




 //selectedUser=signal(DUMMY_USERS[randomIndex]);

 /*imagePath=computed(()=>'assets/users' +this.selectedUser().avatar)
 //get imagePath(){
   //return 'assets/users/'+ this.selectedUser.avatar
 //}

 onSelectUser(){
    const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);/*when you click it changes the user*/
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
