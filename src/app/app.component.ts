import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{HeaderComponent} from './header/header.component';
import{DUMMY_USERS} from './dummy-users';;
import{TasksComponent} from './tasks/tasks.component';
import{UserComponent} from './user/user.component'


@Component({
  selector: 'app-root',
  //standalone: true,because now we use NgModule and they can not both work at the same time or we have to set standalone='false
  //imports: [HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})

export class AppComponent {
  title = 'angular-project';
  users=DUMMY_USERS;
  selectedUserid?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id==this.selectedUserid)!;

  }
  onSelectUser(id:string){
  this.selectedUserid=id;
  }
}
 
