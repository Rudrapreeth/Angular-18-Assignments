import { Component, Input, signal, effect, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section *ngIf="!componentDestroyed" class="lifecycle-demo">
      <header>
        <h2>Angular 18 Lifecycle Hooks Application</h2>
      </header>
      <main>
        <p>Current Count: <strong>{{ counter() }}</strong></p>
        <div class="buttons">
          <button (click)="increment()">Increase Count</button>
          <button (click)="updateInputValue()">Trigger ngOnChanges</button>
          <button (click)="triggerLifecycle('ngDoCheck')">Trigger ngDoCheck</button>
          <button (click)="triggerLifecycle('ngAfterContentInit')">Trigger ngAfterContentInit</button>
          <button (click)="triggerLifecycle('ngAfterContentChecked')">Trigger ngAfterContentChecked</button>
          <button (click)="triggerLifecycle('ngAfterViewInit')">Trigger ngAfterViewInit</button>
          <button (click)="triggerLifecycle('ngAfterViewChecked')">Trigger ngAfterViewChecked</button>
          <button (click)="destroyComponent()">Remove Component</button>
        </div>
      </main>

      <section class="lifecycle-hooks">
        <h3>Lifecycle Hooks Execution</h3>
        <pre>{{ lifecycleLog }}</pre>
      </section>
    </section>
  `,
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() dynamicInput: string = 'Initial Value'; // To trigger ngOnChanges
  counter = signal(0);
  public componentDestroyed = false;
  public lifecycleLog: string = 'Lifecycle hooks execution will appear here.\n';

  constructor() {
    this.log('Constructor: Component instance created');

    // Directly using effect (no need for runInInjectionContext)
    effect(() => {
      this.log(`Signal changed: Counter is now ${this.counter()}`);
    });
  }

  private log(message: string) {
    this.lifecycleLog += `${message}\n`;
    console.log(message);
  }

  updateInputValue() {
    this.dynamicInput = `Updated Value ${Math.random()}`;
    this.triggerLifecycle('ngOnChanges');
  }

  triggerLifecycle(hook: string) {
    switch (hook) {
      case 'ngOnChanges':
        this.ngOnChanges({
          dynamicInput: {
            previousValue: this.dynamicInput, currentValue: this.dynamicInput, firstChange: false,
            isFirstChange: function (): boolean {
              throw new Error('Function not implemented.');
            }
          }
        });
        break;
      case 'ngDoCheck': this.ngDoCheck(); break;
      case 'ngAfterContentInit': this.ngAfterContentInit(); break;
      case 'ngAfterContentChecked': this.ngAfterContentChecked(); break;
      case 'ngAfterViewInit': this.ngAfterViewInit(); break;
      case 'ngAfterViewChecked': this.ngAfterViewChecked(); break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log(`ngOnChanges: Input properties changed - ${JSON.stringify(changes)}`);
  }

  ngOnInit() {
    this.log('ngOnInit: Component initialized');
  }

  ngDoCheck() {
    this.log('ngDoCheck: Change detection running');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit: Content projected into component');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked: Content checked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit: View initialized');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked: View checked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy: Component destroyed');
  }

  increment() {
    this.counter.update(value => value + 1);
  }

  destroyComponent() {
    this.componentDestroyed = true;
  }
}
