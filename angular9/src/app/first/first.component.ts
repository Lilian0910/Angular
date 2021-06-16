import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `{{name}}<br>
            {{name.toUpperCase()}}<br>
            {{hello()}}<br>
            {{siteUrl}}<br>
            <input [id]="txt" type="text" value="angular9" />
            <input disabled=false id="{{txt}}" type="text" value="angular9" />`,
  styles:[]
})
export class FirstComponent implements OnInit {
  constructor() { }

 //use interpolation change view
  public name ="John Smith"
  hello(){return "HELLO WORLD"}
  public siteUrl= window.location.href;
  //use interpolation change view

  //define id
  public txt="myId";

  ngOnInit(): void {
  }


}
