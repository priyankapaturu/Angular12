import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.css']
})
export class TemplateDrivenFromComponent {
  model: any = {};
                                         
  //name:string='priya';
  getUserData(userData:any){
    console.warn(userData.value);

  }

}
