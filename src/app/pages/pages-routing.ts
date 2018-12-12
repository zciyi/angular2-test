import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [{
        path: 'child',
        component: ChildComponent,
    }, {
        path: '',
        redirectTo: 'child',
        pathMatch: 'full',
      },{
        loadChildren: './childmodule/childmodule.module#ChildModuleModule' ,
        path:'',
        pathMatch: 'childModule'
        
      }]
    }];
    
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        ChildComponent
    ]
})

export class PagesRoutingModule {
}