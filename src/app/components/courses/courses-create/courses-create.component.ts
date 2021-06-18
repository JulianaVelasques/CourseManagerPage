import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { Course } from '../course.model';
import * as moment from 'moment';

@Component({
  selector: 'app-courses-create',
  templateUrl: './courses-create.component.html',
  styleUrls: ['./courses-create.component.css'],
})
export class CoursesCreateComponent implements OnInit {
  course: Course = {
    name: '',
    startDate: 0,
    endDate: 0,
    duration: 0,
    description: '',
  };

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {}

  createCourse(): void {
    this.courseService.create(this.course);
    this.courseService.showMenssage('Your course was created!');
    this.router.navigate(['/courses']);
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }

  duration(): void {
    var endDate = moment(this.course.endDate);
    var startDate = moment(this.course.startDate);
    var range = Number(moment.duration(endDate.diff(startDate)).asWeeks().toPrecision(2));
    this.course.duration = range;
  }
}
