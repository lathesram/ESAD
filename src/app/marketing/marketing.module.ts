import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleEmailsComponent } from './schedule-emails/schedule-emails.component';
import { MarkingRoutingModule } from './marketing-routing.module';

@NgModule({
  declarations: [ScheduleEmailsComponent],
  imports: [MarkingRoutingModule, CommonModule],
})
export class MarketingModule {}
