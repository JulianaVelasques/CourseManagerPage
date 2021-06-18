import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from '../course.model';
import { CoursesUpdateComponent } from '../courses-update/courses-update.component';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: any = [];

  constructor(private snackBar: MatSnackBar) {}

  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  findAll() {
    const cursos = JSON.parse(localStorage.getItem('cursos')!);
    return cursos;
  }

  findOne(id: any) {
    let cursos = this.findAll();
    if (!id) {
      return;
    }

    let course: any;
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id == id) {
        course = cursos[i];
      }
    }
    return course;
  }

  create(course: Course) {
    let cursos = this.findAll();

    course.id = 1;

    if (this.courses === null) return;

    if (this.courses.length > 0) {
      let ultimo = cursos[cursos.length - 1];
      let ultimoId = ultimo.id;
      course.id = ultimoId + 1;
    }

    this.courses.push(course);
    localStorage.setItem('cursos', JSON.stringify(this.courses));
  }

  update(course: Course) {
    let cursos = this.findAll();
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id == course.id) {
        cursos[i] = course;
      }
    }

    this.courses = cursos;

    localStorage.removeItem('cursos');
    localStorage.setItem('cursos', JSON.stringify(cursos));
  }

  delete(course: Course) {
    let cursos = this.findAll();
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id == course.id) {
        cursos.splice(i, 1);
      }
    }

    this.courses = cursos;

    localStorage.removeItem('cursos');
    localStorage.setItem('cursos', JSON.stringify(cursos));
  }
}
