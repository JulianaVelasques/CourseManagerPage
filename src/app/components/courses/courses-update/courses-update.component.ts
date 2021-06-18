import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';
import * as moment from 'moment';

@Component({
  selector: 'app-courses-update',
  templateUrl: './courses-update.component.html',
  styleUrls: ['./courses-update.component.css'],
})
export class CoursesUpdateComponent implements OnInit {
  course!: Course;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.findOne(id);
  }

  updateCourse(): void {
    this.courseService.update(this.course);
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
