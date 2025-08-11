import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeePiechartComponent } from './components/employee-piechart/employee-piechart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeTableComponent, EmployeePiechartComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('employee-work-hours');
}
