import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-delete',
  templateUrl: './courses-delete.component.html',
  styleUrls: ['./courses-delete.component.css'],
})
export class CoursesDeleteComponent implements OnInit {
  course!: Course;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.findOne(id);
  }

  deleteCourse(): void {
    this.courseService.delete(this.course);
    this.router.navigate(['/courses']);
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }
}
