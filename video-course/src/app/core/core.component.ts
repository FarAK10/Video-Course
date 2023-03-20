import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  constructor(private store: Store) {}
}
