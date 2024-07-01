import{Component, Input,input,computed,Output ,EventEmitter,output/*signal*/} from '@angular/core';
//import{DUMMY_USERS} from '../dummy-users';


//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

Component({
    selector:'app-user',
    standalone:true,
    templateUrl:'./user.component.html',
    styleUrl:'./user.component.less',

})

export class HeaderComponent{
        @Input({required:true}) id!:string;
        @Input({required:true})avatar!: string;
        @Input({required:true}) name!: string;
         
       // @Output() select=new EventEmitter();
       select=output<string>();

       /* avatar=input.required<string>();
        name=input.required<string>();

        imagePath=computed(()=>{
            return 'assets/users/' + this.avatar;
        })*/

        get imagePath(){
            return 'assets/users/' + this.avatar;
        }

onSelectUser(){
    this.select.emit(this.id);
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
