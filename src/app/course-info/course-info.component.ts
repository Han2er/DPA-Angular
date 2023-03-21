import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../service/config.service';
import CourseData from '../interface/CourseData';
// import courseData from '../data/courses.data.ts';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ConfigService) {}
  courseName = parseInt(this.route.snapshot.params['course']);

  info: CourseData | undefined;
  oldPrice: number = 1000;

  ngOnInit(): void {
    this.service.getCourses().subscribe((res) => {
      // console.log('daaataaa: ', res);

      this.info = res[this.courseName - 1];
      this.oldPrice = this.info.price * 2;
      // console.log(res[this.courseName - 1]);
    });
  }
}
