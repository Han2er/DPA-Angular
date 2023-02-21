import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses = [
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
}
