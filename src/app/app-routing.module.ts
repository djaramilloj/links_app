import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { LoggedInUserGuard } from './guards/logged-in-user.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoggedInUserGuard],
    children: [
      {
        path: '',
        loadChildren: 
          () => import('../app/modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren:
      () => import('../app/modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
