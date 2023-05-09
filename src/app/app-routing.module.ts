import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';
import { CamaraComponent } from './components/camara/camara.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
  {path:'camara', component:CamaraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
