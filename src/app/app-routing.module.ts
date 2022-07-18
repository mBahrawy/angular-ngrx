import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityGridComponent } from './pages/city-grid/city-grid.component';

const routes: Routes = [
  {
    path: '',
    component: CityGridComponent
  },
  {
    path: 'list',
    component: CityGridComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
