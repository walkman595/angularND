import { TiktactoeComponent } from './tiktactoe/tiktactoe.component';
import { TasksComponent } from './tasks/tasks.component';
import { AboutComponent } from './about/about.component';
import { MemoryComponent } from './memory/memory.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: "home", component:HomeComponent},
{path: "memory", component:MemoryComponent},
{path: "about", component:AboutComponent},
{path: "tasks", component:TasksComponent},
{path: "tictactoe", component:TiktactoeComponent},
{path: "**", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
