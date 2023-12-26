import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponetComponent } from './components/first-componet/first-componet.component';

const routes: Routes = [
  {path: 'home', component: FirstComponetComponent},
  {path: 'list', component: ListRenderComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
