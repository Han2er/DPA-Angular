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
  private urlJsonbin = 'https://api.jsonbin.io/v3/b/6401175dc0e7653a05817612';

  getCourses() {
    return this.http.get<CourseData[]>(this.url);
    // return this.http.get<CourseData[]>(this.urlJsonbin + '?meta=false');
  }
}
