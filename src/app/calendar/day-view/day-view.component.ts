import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
})
export class DayViewComponent implements OnInit {
  @Input() date: Date;
  @Input() appointments: Array<any>;

  @Output() public addAppointment = new EventEmitter<Date>();
  @Output() public updateAppointment = new EventEmitter<any>();
  @Output() public removeAppointment = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
