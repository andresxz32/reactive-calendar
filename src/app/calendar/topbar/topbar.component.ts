import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VIEW_MODE } from 'src/app/models';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() setViewMode = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();
  public VIEW_MODE = VIEW_MODE;
}
