import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent {
  navLinks: NavigationLinks[] = [
    {
      name: 'ჩვენს შესახებ',
      link: '/about-us',
    },
    {
      name: 'კურსები',
      link: '/courses',
    },
    {
      name: 'ბლოგი',
      link: '/blog',
    },
    {
      name: 'პარტნიორი კომპანიები',
      link: '/partners',
    },
    {
      name: 'კონტაქტი',
      link: '/contact',
    },
  ];
}
interface NavigationLinks {
  name: string;
  link: string;
}
