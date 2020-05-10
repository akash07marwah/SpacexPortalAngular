import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component'
import {LaunchesComponent} from './launches/launches.component'
import {MainPageComponent} from './main-page/main-page.component'
const routes: Routes = [  
  {path:"",component:MainPageComponent},
  {path:"news", component: NewsComponent },
    {path:"launches", component: LaunchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
