import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'day-detail',
  templateUrl: './day-detail.component.html',
})
export class DayDetailComponent {
  @Input() date: Date;
  @Input() appointments: Array<any>;

  @Output() public addAppointment = new EventEmitter<Date>();
  @Output() public updateAppointment = new EventEmitter<any>();
  @Output() public removeAppointment = new EventEmitter<any>();

  editMode = false;

  add(): void {
    this.addAppointment.emit(new Date(this.date));
  }

  update(appointment: any, $key: string) {
    this.updateAppointment.emit(Object.assign({ $key }, appointment));
  }
}
