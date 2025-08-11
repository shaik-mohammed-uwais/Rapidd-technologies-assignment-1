import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-employee-piechart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './employee-piechart.component.html',
  styleUrls: ['./employee-piechart.component.css'],
})
export class EmployeePiechartComponent implements OnInit {
  isBrowser: boolean;
  pieChartData!: ChartData<'pie', number[], string>;
  pieChartType: 'pie' = 'pie';

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private employeeService: EmployeeService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.employeeService.getEmployees().subscribe((employees) => {
        const labels = employees.map((emp) => emp.name);
        const data = employees.map((emp) => emp.totalHours);

        this.pieChartData = {
          labels,
          datasets: [
            {
              data,
              backgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
              ],
            },
          ],
        };
      });
    }
  }
}
