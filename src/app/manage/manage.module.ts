import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardComponent } from './standard/standard.component';
import { ManageRoutes } from './manage.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StandardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ManageRoutes),
  ]
})
export class ManageModule { }
