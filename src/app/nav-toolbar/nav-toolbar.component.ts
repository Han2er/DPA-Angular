import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent {
  navLinks = [
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
  navLinkMain = {
    name: 'main',
    link: '/main',
  };

  burgerOnClick() {
    document.getElementById('nav')!.style.transform = 'translateX(0)';
  }
}
