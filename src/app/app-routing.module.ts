import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';

const routes: Routes = [
  { path: '', component: TarifListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
