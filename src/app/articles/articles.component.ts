import { Component } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  constructor(private service: ConfigService) {}

  data: any = undefined;

  ngOnInit(): void {
    this.service.getArticles().subscribe((res) => (this.data = res.record));
  }
}
