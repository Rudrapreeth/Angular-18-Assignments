import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  template: `
    <header>
      <h1>Shared Header</h1>
      <nav>
        <a href="/product">Product</a>
        <a href="/flight">Flight</a>
      </nav>
    </header>
  `,
})
export class SharedHeaderComponent {}
