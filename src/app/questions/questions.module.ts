import { QuestionsRoutes } from './questions.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions.component';



@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(QuestionsRoutes)
  ]
})
export class QuestionsModule { }
