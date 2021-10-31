import { TemplateDrivenFromComponent } from './components/template-driven-from/template-driven-from.component';
import { FilterPipesComponent } from './components/filter-pipes/filter-pipes.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './components/async/async.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path:'reactive-forms',
    component:ReactiveFormsComponent
  },{
    path:'filterPipes',
    component:FilterPipesComponent
  },{
    path:'async',
    component:AsyncComponent
  },{
    path:'form',
    component:FormComponent
  },{
    path:'template-driven',
    component:TemplateDrivenFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
