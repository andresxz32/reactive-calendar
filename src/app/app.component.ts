import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  distinct,
  distinctUntilChanged,
  first,
  map,
  mergeMap,
  Observable,
  shareReplay,
  take,
  tap,
} from 'rxjs';
import { VIEW_MODE } from './models';
import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  addDays,
  addWeeks,
  addMonths,
  toDate,
  getWeek,
} from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public VIEW_MODE = VIEW_MODE;
  public viewMode$ = new BehaviorSubject(VIEW_MODE.WEEK);
  public navigation$ = new BehaviorSubject<number>(0);
  public searchTerm$ = new BehaviorSubject('');
  public currentDate$: Observable<Date>;
  public currentYear$: Observable<number>;
  public currentMonth$: Observable<number>;
  public currentWeek$: Observable<number>;
  private currentDateM$: Observable<Date>;

  constructor() {}
  ngOnInit(): void {
    this.changeView();
  }

  onSetViewMode(viewMode: any): void {
    this.viewMode$.next(viewMode);
  }

  onPrevious(): void {
    this.navigation$.next(-1);
  }

  changeView(): void {
    this.currentDateM$ = this.viewMode$.pipe(
      mergeMap((viewMode: string) => {
        let dateM = new Date();
        return this.navigation$.pipe(
          map((action: number) => {
            if (viewMode === VIEW_MODE.MONTH) {
              dateM = addMonths(startOfMonth(dateM), action);
            }
            if (viewMode === VIEW_MODE.WEEK) {
              dateM = addWeeks(startOfWeek(dateM), action);
            }
            if (viewMode === VIEW_MODE.DAY) {
              dateM = addDays(startOfDay(dateM), action);
            }
            return dateM;
          })
        );
      })
    );
    this.currentDate$ = this.currentDateM$.pipe(map((dateM) => toDate(dateM)));
    this.currentYear$ = this.currentDateM$.pipe(
      map((dateM) => dateM.getFullYear())
    );
    this.currentMonth$ = this.currentDateM$.pipe(
      map((dateM) => dateM.getMonth())
    );
    this.currentWeek$ = this.currentDateM$.pipe(map((dateM) => getWeek(dateM)));
  }

  onNext(): void {
    this.navigation$.next(1);
  }

  onSearchChanged(e: any): void {
    this.searchTerm$.next(e);
  }
}
