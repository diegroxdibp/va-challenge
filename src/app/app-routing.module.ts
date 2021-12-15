import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaHomepageComponent } from './va-homepage/va-homepage.component';
import { VaProjectComponent } from './va-project/va-project.component';

const routes: Routes = [
  { path: '', component: VaHomepageComponent },
  { path: 'project', component: VaProjectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
