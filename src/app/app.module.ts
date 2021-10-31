import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipesComponent } from './components/filter-pipes/filter-pipes.component';
import { PipesPipe } from './pipes.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AsyncComponent } from './components/async/async.component';
import { FormComponent } from './components/form/form.component';
import { TemplateDrivenFromComponent } from './components/template-driven-from/template-driven-from.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    MenuBarComponent,
    FilterPipesComponent,
    PipesPipe,
    FilterPipe,
    AsyncComponent,
    FormComponent,
    TemplateDrivenFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
