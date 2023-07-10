import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs: Array<any> | undefined;

  ngOnInit(): void {
    this.blogs = [
      { id: 1, name: 'მარიამ კეკილიძე', prophecy: 'სტუდენტი', avatar: 'url' },
      { id: 2, name: 'გიული ფოფხაძე', prophecy: 'ექიმი', avatar: 'url' },
      { id: 3, name: 'გრიგოლ ხანძთელი', prophecy: 'მწერალი', avatar: 'url' },
    ];
  }
}
