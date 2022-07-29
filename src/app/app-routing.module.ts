import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProgComponent } from './components/create-prog/create-prog.component';
import { MyprogsComponent } from './components/myprogs/myprogs.component';

const routes: Routes = [
  {path: '', component: MyprogsComponent},
  {path: 'create-prog', component: CreateProgComponent},
  {path: 'edit-prog/:id', component: CreateProgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
