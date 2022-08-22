import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent},
 {path:'Employee',component:EmployeeComponent},
{path:'Customer',component:CustomerComponent},
{path:'Supplier',component:SupplierComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
