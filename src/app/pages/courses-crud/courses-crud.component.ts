import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Para que o router consiga fazer a navegação (New course to Page Courses Create)
import { HeaderService } from 'src/app/components/template/service/header.service';

@Component({
  selector: 'app-courses-crud',
  templateUrl: './courses-crud.component.html',
  styleUrls: ['./courses-crud.component.css'],
})
export class CoursesCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Course List',
      icon: 'list',
      routeUrl: '/courses',
    };
  } //Uma vez que o Angular constatou que dentro do componente eu irei precisar de um router. Ele criar um router no momento que eu referenciar a tag do component

  ngOnInit(): void {}

  goToCourseCreatePage(): void {
    this.router.navigate(['/courses/create']); //ele irá navegar automaticamente para a tela de New course sem precisar de forma explicita o local
  }
}
