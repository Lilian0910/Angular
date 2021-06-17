import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let emp of employees">
   <li>{{emp.name}}</li>
  </ul>
 `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees=[
    {"id":1, "name":"John", "dept":"Sales"},
    {"id":2, "name":"Sam", "dept":"Dev"},
    {"id":3, "name":"Dabby", "dept":"Sales"},
    {"id":4, "name":"Lip", "dept":"Dev"},
    {"id":5, "name":"Jimmy", "dept":"Sales"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
