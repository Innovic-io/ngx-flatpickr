import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatPickrComponent } from './component/flatpickr.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlatPickrComponent
  ],
  exports: [
    FlatPickrComponent
  ]
})
export class NgxFlatpickrkModule {

  static forRoot() {
    return {
      ngModule: NgxFlatpickrkModule
    };
  }
}
