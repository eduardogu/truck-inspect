import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inspection',
    loadChildren: () => import('./inspection/inspection.module').then( m => m.InspectionPageModule)
  },
  {
    path: 'inspection-list',
    loadChildren: () => import('./inspection-list/inspection-list.module').then( m => m.InspectionListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
