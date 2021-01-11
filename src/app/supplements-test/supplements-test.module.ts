import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {SupplementsTestComponent} from './supplements-test.component';
import {HometestComponent} from './hometest/hometest.component';
import {DecisionTreeFormComponent} from './decision-tree-form/decision-tree-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SupplementsTestComponent,
    children: [
      {path: '', component: HometestComponent},
      {path: 'test', component: DecisionTreeFormComponent}
    ]}
];

@NgModule({
  declarations: [
    SupplementsTestComponent,
    HometestComponent,
    DecisionTreeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class SupplementsTestModule {}
