import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ChatComponent} from './chat/chat.component';
import {AuthGuard} from './auth.guard';
//import {HomeComponent} from './home.component';



const routes: Routes = [
  { path: 'chats/:id', component: ChatComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
