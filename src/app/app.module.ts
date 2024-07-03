import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shareed.module';
import { TasksModule } from './tasks/tasks.module';



@NgModule({
    declarations:[AppComponent,
        HeaderComponent,
        UserComponent,
        TaskComponent,
        TasksComponent,
        NewTaskComponent,
    ],

    bootstrap:[AppComponent],
    imports:[BrowserModule,SharedModule,TasksModule]
})
export class AppModule{}