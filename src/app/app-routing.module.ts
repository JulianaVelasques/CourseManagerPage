import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CoursesCrudComponent } from './pages/courses-crud/courses-crud.component';
import { CoursesCreateComponent } from './components/courses/courses-create/courses-create.component';
import { CoursesUpdateComponent } from './components/courses/courses-update/courses-update.component';
import { CoursesDeleteComponent } from './components/courses/courses-delete/courses-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesCrudComponent,
  },
  {
    path: 'courses/create',
    component: CoursesCreateComponent,
  },

  {
    path: 'courses/update/:id',
    component: CoursesUpdateComponent,
  },

  {
    path: 'courses/delete/:id',
    component: CoursesDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
