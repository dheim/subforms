import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersoenlicheAngabenComponent} from "./persoenliche-angaben/persoenliche-angaben.component";

const routes: Routes = [
  {path: '', component: PersoenlicheAngabenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
