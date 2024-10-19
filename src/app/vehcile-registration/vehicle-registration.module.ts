import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { ViewRegistrationsComponent } from './view-registrations/view-registrations.component';
import { RegisterVehicleRoutingModule } from './vehicle-routing.module';

@NgModule({
  declarations: [RegisterVehicleComponent, ViewRegistrationsComponent],
  imports: [CommonModule, RegisterVehicleRoutingModule],
})
export class VehicleRegistrationModule {}
