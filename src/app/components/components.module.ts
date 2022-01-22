import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Bootstrap
// import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from '../bootstrap.module';
// Components
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';

@NgModule({
  declarations: [
    AuthenticationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule
  ],
  exports: [
    AuthenticationFormComponent
  ],
})
export class ComponentsModule {}