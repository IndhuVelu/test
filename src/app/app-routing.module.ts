import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent} from './components/main/main.component'
import { ChangeComponent } from './components/change/change.component'
import { BookComponent } from './components/book/book.component'
import { MybookingComponent } from './components/mybooking/mybooking.component'
import { AuthGuard } from './auth.guard'
import { NoContentComponent } from './components/no-content/no-content.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component:SignupComponent },
  { path: 'login',component:LoginComponent},
  { path: 'train',component:MainComponent,canActivate: [AuthGuard]},
  { path: 'change',component:ChangeComponent},
  { path: 'book',component:BookComponent},
  {path:'book/:id',component:BookComponent},
  {path :'mybooking' ,component:MybookingComponent},
  {path :'**' ,component:NoContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
