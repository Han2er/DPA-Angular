import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CourseData from '../interface/CourseData';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  // local json server
  // url = 'http://localhost:3000';

  // github gh page as json server (fastest way so far)
  private url = 'https://han2er.github.io/DPA-data/data.json';

  // get from jsonbin.io needs more time even when it is private bin
  private urlCourses = 'https://api.jsonbin.io/v3/b/65324b4f0574da7622bb55e3';

  private arctilesUrl = 'https://api.jsonbin.io/v3/b/64d3e9e6b89b1e2299ce19d0';

  getCourses() {
    return this.http.get<any>(this.urlCourses);
    // return this.http.get<CourseData[]>(this.urlJsonbin + '?meta=false');
  }

  getArticles() {
    return this.http.get<any>(this.arctilesUrl);
  }
}
