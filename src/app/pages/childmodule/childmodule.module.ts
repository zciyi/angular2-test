import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';

import { ChildModuleComponent } from './childmodule.component';

const routes: Routes = [{
    path: 'childModule',
    component: ChildModuleComponent,
    children: [],
  }]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        ChildModuleComponent,
    ]
})
export class ChildModuleModule {
}