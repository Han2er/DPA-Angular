import { Component } from '@angular/core';
import { ConfigService } from '../service/config.service';
import CourseData from '../intrface/CourseData';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  constructor(private service: ConfigService) {}

  courses: Array<CourseData> | undefined;

  ngOnInit(): void {
    this.service.getCourses().subscribe((res) => {
      this.courses = res;
    });
  }
}
