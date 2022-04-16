import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayDetailComponent } from './calendar/day-detail/day-detail.component';
import { DayViewComponent } from './calendar/day-view/day-view.component';
import { MonthViewComponent } from './calendar/month-view/month-view.component';
import { TopbarComponent } from './calendar/topbar/topbar.component';
import { WeekViewComponent } from './calendar/week-view/week-view.component';

//Material components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    DayDetailComponent,
    DayViewComponent,
    MonthViewComponent,
    TopbarComponent,
    WeekViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
