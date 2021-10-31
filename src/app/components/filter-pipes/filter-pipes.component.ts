import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {
  filteredString:string='';
  userData=[
    {name:"priyanka", course:"CSIT", Dob:new Date(26, 11,19880), subject:'Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.'},
    {name:"balaji", course:"CSE", Dob:new Date(3, 12,1986), subject:'Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.'},
    {name:"tushith", course:"CSIT", Dob:new Date(21, 10,2017), subject:'Bootstrap includes several predefined button styles.'},
    {name:"lavanya", course:"EEE", Dob:new Date(22, 11,1987),subject:'Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.'},
    {name:"bindu", course:"ECE", Dob:new Date(5, 11,1989),subject:'Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.'},
  ];

  onAddUser(){
    this.userData.push(
      {name:"User", course:"CSIT", Dob:new Date(26, 11,19880), subject:'Bootstrap includes several predefined button'}
    );
  }
  
  constructor() { }

  ngOnInit(): void { console.log(this.userData);
  }
  

}
