import { Component } from '@angular/core';
import { ConfigService } from '../service/config.service';
import CourseData from '../interface/CourseData';

@Component({
  selector: 'app-dash-courses',
  templateUrl: './dash-courses.component.html',
  styleUrls: ['./dash-courses.component.scss'],
})
export class DashCoursesComponent {
  constructor(private service: ConfigService) {}

  // courseData!: CourseData[]; // ჩასანაცვლებელია
  courseData!: any; // ჩასანაცვლებელია
  title!: string; // წასაშლელია

  ngOnInit(): void {
    this.service.getCourses().subscribe((res) => {
      this.courseData = res.record;
      // console.log(this.courseData);
    });
  }

  updateData() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    /////
    this.courseData.push({
      // title: this.title,
      // article: this.articleText,
    });
    ////

    req.open(
      'PUT',
      'https://api.jsonbin.io/v3/b/65324b4f0574da7622bb55e3',
      true
    );
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader(
      'X-Master-Key',
      '$2b$10$8yToR4pJiDWKr.PhX9dEl.bbaomiKXQUAneStf/GBy6HvjuiMyaba'
    );
    req.send(JSON.stringify(this.courseData));

    this.title = '';
    // this.articleText = '';
    alert('კურსი დამატებულია');
  }

  deleteData(index: number) {
    // let delObj = this.courseData.find((el: CourseData) => (el.id = index));
    // console.log('delObj: ', delObj, 'index', index);
    this.courseData = this.courseData.filter(
      (el: CourseData) => el.id != index
    );
    // this.courseData.splice(index, 1);
    //

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open(
      'PUT',
      'https://api.jsonbin.io/v3/b/65324b4f0574da7622bb55e3',
      true
    );
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader(
      'X-Master-Key',
      '$2b$10$8yToR4pJiDWKr.PhX9dEl.bbaomiKXQUAneStf/GBy6HvjuiMyaba'
    );
    req.send(JSON.stringify(this.courseData));
  }
}
