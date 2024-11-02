import { Routes } from '@angular/router';
import {ProjectDetailComponent} from './kozder-app/project-detail/project-detail.component';
import {RegisterComponent} from './kozder-app/register/register.component';
import {LoginComponent} from './kozder-app/login/login.component';
import {ProfileComponent} from './kozder-app/profile/profile.component';
import {AboutComponent} from './kozder-app/about/about.component';
import {ProjectsComponent} from './kozder-app/projects/projects.component';
import {HomeComponent} from './kozder-app/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects/:id', component: ProjectDetailComponent }
];
