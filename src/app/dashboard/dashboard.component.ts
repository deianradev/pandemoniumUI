import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  /*  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: 'Card 1', cols: 1, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 1 },
            { title: 'Card 4', cols: 1, rows: 1 }
          ];
        }
  
        return [
          { title: 'Card 1', cols: 3, rows: 3 },
          { title: 'bar chart', cols: 2, rows: 2 },
          { title: 'pie chart', cols: 2, rows: 2 },
          { title: 'active confirmed', cols: 1, rows: 1 },
          { title: 'recovered', cols: 1, rows: 1 },
          { title: 'deaths', cols: 1, rows: 1 }
  
        ];
      })
    );
  */
  constructor(private breakpointObserver: BreakpointObserver) { }
}
