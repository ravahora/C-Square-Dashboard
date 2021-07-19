import { Routes } from "@angular/router";
import { StandardComponent } from "./standard/standard.component";

export const ManageRoutes: Routes = [{
    path: '',
    children: [{
        path: 'std',
        component: StandardComponent
    }]
},

];
