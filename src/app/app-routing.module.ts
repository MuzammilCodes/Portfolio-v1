import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // change route to home


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
