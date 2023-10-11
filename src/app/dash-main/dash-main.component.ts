import { Component } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.scss'],
})
export class DashMainComponent {
  constructor(private service: ConfigService) {}

  articlesData: any = undefined;
  inputText = '';
  articleText = '';
  // articlesList: any = undefined;

  ngOnInit(): void {
    this.service
      .getArticles()
      .subscribe((res) => (this.articlesData = res.record));
    console.log();
  }

  updateData() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    /////
    this.articlesData.push({
      title: this.inputText,
      article: this.articleText,
    });
    ////

    req.open(
      'PUT',
      'https://api.jsonbin.io/v3/b/64d3e9e6b89b1e2299ce19d0',
      true
    );
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader(
      'X-Master-Key',
      '$2b$10$8yToR4pJiDWKr.PhX9dEl.bbaomiKXQUAneStf/GBy6HvjuiMyaba'
    );
    req.send(JSON.stringify(this.articlesData));

    this.inputText = '';
    this.articleText = '';
    alert('სტატია დამატებულია');
  }

  deleteData(index: number) {
    this.articlesData.splice(index, 1);
    //

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open(
      'PUT',
      'https://api.jsonbin.io/v3/b/64d3e9e6b89b1e2299ce19d0',
      true
    );
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader(
      'X-Master-Key',
      '$2b$10$8yToR4pJiDWKr.PhX9dEl.bbaomiKXQUAneStf/GBy6HvjuiMyaba'
    );
    req.send(JSON.stringify(this.articlesData));
  }
}
