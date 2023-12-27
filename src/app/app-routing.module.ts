import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FirstComponetComponent } from './components/first-componet/first-componet.component';

const routes: Routes = [
  {path: 'home', component: FirstComponetComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
