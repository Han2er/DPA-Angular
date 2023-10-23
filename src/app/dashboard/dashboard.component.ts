import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  links = [
    { name: 'მთავარი', url: '/dashboard/main', state: '' },
    { name: 'ჩვენს შესახებ', url: '/dashboard/about-us', state: 'inactive' },
    { name: 'კურსები', url: '/dashboard/courses', state: '' },
    { name: 'ბლოგი', url: '/dashboard/blog', state: 'inactive' },
    { name: 'პარტნიორები', url: '/dashboard/partners', state: 'inactive' },
  ];
}
