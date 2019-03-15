import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'operaciones', loadChildren: './operaciones/operaciones.module#OperacionesPageModule' },
  { path: 'tabla', loadChildren: './tabla/tabla.module#TablaPageModule' },
  { path: 'repaso', loadChildren: './repaso/repaso.module#RepasoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
