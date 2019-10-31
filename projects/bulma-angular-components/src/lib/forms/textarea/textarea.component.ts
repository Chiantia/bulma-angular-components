import { Component, OnInit, HostBinding } from "@angular/core";

interface TextAreaContext {
  label: string;
  size: string;
  loading: boolean;
  class: string;
  help: string;
}

@Component({
  template: `
    <label
      *ngIf="data.label"
      class="label {{ data.size && 'is-' + data.size }}"
    >
      {{ data.label }}
    </label>
    <div
      class="{{ 'control ' + (data.size && 'is-' + data.size) }}"
      [ngClass]="{ 'is-loading': data.loading }"
    >
      <ng-content></ng-content>
      <p class="help" [ngClass]="'is-' + data.class" ng-show="data.help">
        {{ data.help }}
      </p>
    </div>
  `,
  styles: []
})
export class BulmaTextareaComponent implements OnInit {
  @HostBinding("class.field") hasField: boolean = true;
  data: TextAreaContext;
  constructor() {}
  ngOnInit() {}
}
