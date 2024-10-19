import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleEmailsComponent } from './schedule-emails/schedule-emails.component';

const routes: Routes = [
  {
    path: '',
    title: 'Schedule Email',
    component: ScheduleEmailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkingRoutingModule {}
