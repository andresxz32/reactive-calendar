import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'week-view',
  templateUrl: './week-view.component.html',
})
export class WeekViewComponent implements OnChanges {
  @Input() week: number;
  @Input() year: number;
  @Input() appointments: Array<any>;

  @Output() public addAppointment = new EventEmitter<any>();
  @Output() public updateAppointment = new EventEmitter<any>();
  @Output() public removeAppointment = new EventEmitter<any>();
  public days: Array<any> = [];

  ngOnChanges(simpleChanges: any): void {
    if (this.week && this.year) {
      this.days = this.calculateDaysWithAppointments(
        this.week,
        this.year,
        this.appointments || []
      );
    }
  }

  private calculateDaysWithAppointments(
    week: number,
    year: number,
    appointments: Array<any>
  ) {
    return [];
  }
}
