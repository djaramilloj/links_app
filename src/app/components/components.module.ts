import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Bootstrap
import { BootstrapModule } from '../bootstrap.module';
// Components
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// Services
import { UserService } from '../services/user/user.service';
import { LinksFormComponent } from './links-form/links-form.component';
import { LinkItemComponent } from './link-item/link-item.component';

@NgModule({
  declarations: [
    AuthenticationFormComponent,
    UserProfileComponent,
    LinksFormComponent,
    LinkItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule
  ],
  exports: [
    AuthenticationFormComponent,
    UserProfileComponent,
    LinksFormComponent,
    LinkItemComponent
  ],
  providers: [
    UserService
  ]
})
export class ComponentsModule {}