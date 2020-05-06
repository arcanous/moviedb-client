import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WritersApiService {

  constructor(private http: HttpClient) { }

  getWriters() {
    return this.http.get(`${environment.apiUrl}/writers`);
  }
}
