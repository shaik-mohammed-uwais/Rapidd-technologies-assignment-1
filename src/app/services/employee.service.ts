import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface TimeEntry {
  EmployeeName: string;
  StarTimeUtc: string;
  EndTimeUtc: string;
}

export interface EmployeeData {
  name: string;
  totalHours: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl =
    'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<EmployeeData[]> {
    return this.http.get<TimeEntry[]>(this.apiUrl).pipe(
      map((entries) => {
        const hoursMap: { [name: string]: number } = {};

        entries.forEach((entry) => {
          const start = new Date(entry.StarTimeUtc).getTime();
          const end = new Date(entry.EndTimeUtc).getTime();
          const hours = (end - start) / (1000 * 60 * 60); // convert ms to hours

          hoursMap[entry.EmployeeName] =
            (hoursMap[entry.EmployeeName] || 0) + hours;
        });

        return Object.entries(hoursMap)
          .map(([name, totalHours]) => ({
            name,
            totalHours: Math.round(totalHours),
          }))
          .sort((a, b) => b.totalHours - a.totalHours);
      })
    );
  }
}
