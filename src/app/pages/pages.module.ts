import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing';


const PAGES_COMPONENTS = [
    PagesComponent,
  ];
  
  @NgModule({
    imports: [
      PagesRoutingModule,
    ],
    declarations: [
      ...PAGES_COMPONENTS,
    ]
  })
export class PagesModule {
}