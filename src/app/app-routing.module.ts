import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WidgetComponent } from './pages/widget/widget.component';
import { ALL_REMAINING_ROUTES, DASHBOARD_ROUTE, WIDGET_ROUTE } from './routes';

const routes: Routes = [
  { path: `${WIDGET_ROUTE}/:name`, component: WidgetComponent },
  { path: DASHBOARD_ROUTE, component: DashboardComponent },
  { path: ALL_REMAINING_ROUTES, redirectTo: DASHBOARD_ROUTE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
