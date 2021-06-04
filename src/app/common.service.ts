import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  createMentor(mentor: any[]) {
    return this._http.post('http://localhost:3000/mentors', mentor);
  }
  getAllMentors() {
    return this._http.get('http://localhost:3000/mentors');
  }
  updateMentor(mentor: any) {
    return this._http.put('http://localhost:3000/mentors/' + mentor.id, mentor);
  }
  deleteMentor(mentor: any) {
    return this._http.delete('http://localhost:3000/mentors/' + mentor.id);
  }
}
