import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpetsComponent } from './allpets/allpets.component';
import { NewpetComponent } from './newpet/newpet.component';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { PeteditComponent } from './petedit/petedit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: 'pets',component: AllpetsComponent },
  { path: 'pets/new',component: NewpetComponent },
  { path: 'pets/:id',component: PetdetailComponent },
  { path: 'pets/edit/:id',component: PeteditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
