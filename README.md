# Employee Work Hours Visualization

This project is an Angular application that fetches employee work hour data from a provided API and visualizes it in two ways:  
1. **HTML Table** – Lists employees ordered by their total hours worked, with rows highlighted if they worked less than 100 hours.  
2. **Pie Chart** – Displays the percentage share of total work hours for each employee.

## Features
- Data fetched dynamically from the API using HTTP GET.
- Employees sorted in descending order of hours worked.
- Conditional row coloring for employees with less than 100 hours.
- Interactive pie chart showing each employee's contribution to total work hours.
- Simple dark theme for better readability.

## API Used
https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==


## Technologies Used
- Angular
- ng2-charts (Chart.js)
- TypeScript
- HTML & CSS

## Live Demo
[View Live Demo](https://your-live-demo-link.com)

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-work-hours.git
