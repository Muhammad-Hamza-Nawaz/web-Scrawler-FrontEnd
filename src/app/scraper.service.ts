import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  private apiUrl = 'http://localhost:3000/api/bbc-articles'; 
  constructor(private http: HttpClient) {}

  getArticles(): Observable<unknown[]> {
    return this.http.get<unknown[]>(this.apiUrl);
  
  }}
