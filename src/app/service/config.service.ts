import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CourseData from '../intrface/CourseData';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  // url = 'http://localhost:3000';
  url = 'https://han2er.github.io/DPA-data/data.json';

  getCourses() {
    return this.http.get<CourseData[]>(this.url);

    // .subscribe((res) => console.log(res))
  }
}
