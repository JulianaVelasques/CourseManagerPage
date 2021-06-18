import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-read2',
  templateUrl: './courses-read2.component.html',
  styleUrls: ['./courses-read2.component.css'],
})
export class CoursesRead2Component implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'startDate', 'endDate', 'duration', 'description', 'action'];

  courses!: Course[];
  searchCourse = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.findAll();
    console.log(this.courses);
  }

  search(): void {
    let cursos = this.courseService.findAll();
    if (!this.searchCourse) {
      this.courses = cursos;
      return cursos;
    }

    let course: any;
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].name.toLowerCase() == this.searchCourse) {
        course = cursos[i];
      }
    }
    this.courses = [course];
  }
}
