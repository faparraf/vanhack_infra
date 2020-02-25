import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteCreateComponent } from './favorite-create/favorite-create.component';
import { FavoriteEditComponent } from './favorite-edit/favorite-edit.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'create-Favorite' },
  { path: '', component: FavoriteCreateComponent },
  { path: 'create-favorite', component: FavoriteCreateComponent },
  { path: 'favorite-list', component: FavoriteListComponent },
  { path: 'favorite-edit/:id', component: FavoriteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
