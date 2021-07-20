import { QuestionsComponent } from './questions.component';
import { Routes } from '@angular/router';


export const QuestionsRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'questions',
      component: QuestionsComponent
  }]
}];
