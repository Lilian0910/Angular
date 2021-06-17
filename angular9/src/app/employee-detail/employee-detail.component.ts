import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Detail</h2>
   <ul *ngFor="let emp of employees">
    <li>{{emp.id}} {{emp.name}} {{emp.dept}}</li>
   </ul>
  `,
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {

  public employees:IEmployee[] = []
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data)
  }

}
