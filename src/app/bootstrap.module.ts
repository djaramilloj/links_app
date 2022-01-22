import { NgModule } from '@angular/core';
//Bootstrap
import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbTypeaheadModule
  ],
  exports: [
    NgbTypeaheadModule
  ],
  providers: [
    NgbTypeaheadConfig
  ],
})
export class BootstrapModule {}