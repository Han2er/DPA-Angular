import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses = [
    {
      title: 'გრაფიკული დიზაინი',
      subtitle: 'თეორიული და პრაქტიკული კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'ტექნიკური დიზაინი',
      subtitle: 'თეორიული და პრაქტიკული კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'დამწყები დიზაინერებისთვის',
      subtitle: 'პრაქტიკული კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'Adobe inDesign',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'Autodesk Fusion 360',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'Corel Draw',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'Adobe Illustraor',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'Adobe Photoshop',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
    {
      title: 'Adobe Acrobat Pro',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
      price: 500,
    },
  ];
}
