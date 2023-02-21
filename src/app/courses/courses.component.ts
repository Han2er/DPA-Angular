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
    },
    {
      title: 'ტექნიკური დიზაინი',
      subtitle: 'თეორიული და პრაქტიკული კურსი',
      imgUrl: '',
    },
    {
      title: 'დამწყები დიზაინერებისთვის',
      subtitle: 'პრაქტიკული კურსი',
      imgUrl: '',
    },
    {
      title: 'Adobe inDesign',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
    },
    {
      title: 'Autodesk Fusion 360',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
    },
    {
      title: 'Corel Draw',
      subtitle: 'საბაზისო კურსი',
      imgUrl: '',
    },
  ];
}
