
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-module',
    template: `
      <div (click)="goto()">
      module
      </div>
    `,
  })

export class ChildModuleComponent {
    constructor(
    private router: Router,
    private route :ActivatedRoute
    ) {
           
    }
    goto(){
        this.router.navigateByUrl('/child')
    }
    
}