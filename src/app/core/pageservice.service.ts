import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../model/page';

import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {
  readonly APIUrl = environment.APIUrl
  constructor(private http: HttpClient) { }


  getAllEmployees(page: number, size: number): Observable<Page<Users>> {
    return this.http.get<Page<Users>>(`${this.APIUrl}/employees?page=${page}&size=${size}`);
  }
}
