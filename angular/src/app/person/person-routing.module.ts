import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'person', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'person/index', component: IndexComponent },
  { path: 'person/create', component: CreateComponent },
  { path: 'person/edit/:idPerson', component: EditComponent } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
