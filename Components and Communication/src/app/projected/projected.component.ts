import { Component } from '@angular/core';

@Component({
  selector: 'app-projected',
  template: `
    <div style="border: 1px dashed #ccc; padding: 10px; margin-top: 10px;">
      <h4>Projected Component</h4>
      <ng-content></ng-content>
    </div>
  `
})
export class ProjectedComponent {}
