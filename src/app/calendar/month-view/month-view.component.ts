import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'month-view',
  templateUrl: './month-view.component.html',
})
export class MonthViewComponent implements OnChanges {
  @Input() month: number;
  @Input() year: number;
  @Input() appointments: Array<any>;

  @Output() public addAppointment = new EventEmitter<any>();
  @Output() public updateAppointment = new EventEmitter<any>();
  @Output() public removeAppointment = new EventEmitter<any>();

  weeks: Array<Array<any>>;

  ngOnChanges(simpleChanges: any): void {
    if (this.month && this.year) {
      this.weeks = this.calculateMonthWithAppointments(
        this.month,
        this.year,
        this.appointments || []
      );
    }
  }

  private calculateMonthWithAppointments(
    month: number,
    year: number,
    appointments: Array<any>
  ) {
    return [];
  }
}
