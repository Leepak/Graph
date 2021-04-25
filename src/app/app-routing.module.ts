
import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
   

    const routes: Routes = [
      { path: '', redirectTo: 'graph', pathMatch: 'full'},  
      { path: 'graph', component: ChartsComponent },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
