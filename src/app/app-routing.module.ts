import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaHomepageComponent } from './va-homepage/va-homepage.component';

const routes: Routes = [
  { path: '', component: VaHomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
