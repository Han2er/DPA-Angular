import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import courseData from '../data/courses.data.ts';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  courseName = parseInt(this.route.snapshot.params['course']);

  data = [
    {
      id: 1,
      title: 'გრაფიკული დიზაინი',
      subtitle: 'თეორიული და პრაქტიკული კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 2,
      title: 'ტექნიკური დიზაინი',
      subtitle: 'თეორიული და პრაქტიკული კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 3,
      title: 'დამწყები დიზაინერებისთვის',
      subtitle: 'პრაქტიკული კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 4,
      title: 'Adobe inDesign',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 5,
      title: 'Autodesk Fusion 360',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 6,
      title: 'Corel Draw',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 7,
      title: 'Adobe Illustraor',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 8,
      title: 'Adobe Photoshop',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      id: 9,
      title: 'Adobe Acrobat Pro',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
  ];

  info = this.data.find((el) => el.id === this.courseName)!;

  ngOnInit(): void {
    console.log(this.courseName, typeof this.courseName);

    // console.log(this.data[this.courseName - 1]);
    console.log(this.info);
  }
}
