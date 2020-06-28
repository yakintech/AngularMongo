import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainterlistComponent } from './painterlist/painterlist.component';
import { AddpainterComponent } from './addpainter/addpainter.component';


const routes: Routes = [
  { path: 'painterlist', component: PainterlistComponent },
  { path: 'addpainter', component: AddpainterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
