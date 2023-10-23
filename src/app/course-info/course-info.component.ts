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
  coursId = parseInt(this.route.snapshot.params['course']);

  info: CourseData | undefined;
  oldPrice: number = 0;

  ngOnInit(): void {
    this.service.getCourses().subscribe((res) => {
      let recivedData: Array<CourseData> = res.record;

      this.info = recivedData.find((el: CourseData) => el.id == this.coursId);
      console.log(this.info);

      this.oldPrice = this.info!.price * 2;
    });
  }
}
