import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CourseData from '../intrface/CourseData';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';
  data = 'db.json';

  getCourses() {
    return this.http.get<CourseData[]>(this.url + '/courses');
    // return this.http.get(this.data)
    // .subscribe((res) => console.log(res))
  }
}
