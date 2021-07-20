import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';
import { Std } from './standard/standard.model';
import { Subject } from './subject/subject.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }
  saveStdList(admin: Std): Observable<any> {
    return this.httpClient.post<any>(ApiService.saveStdListURL, admin);
  }
  getStdList(): Observable<Std[]> {
    return this.httpClient.get<any>(ApiService.getStdListURL);
  }
  removeStdList(id){
    return this.httpClient.get<any>(ApiService.removeStdURL+id);
  }
  addSubject(data) {
    debugger
    return this.httpClient.post<any>(ApiService.saveSubjectURL, data);
  }
  getSubjectList(): Observable<Subject[]> {
    return this.httpClient.get<any>(ApiService.getSubjectListURL);
  }

  updateSubjectList(admin: Subject): Observable<any>{
    
    return this.httpClient.post<any>(ApiService.updateSubjectURL, admin);
  }
 
  removeSubjectList(id){
    return this.httpClient.get<any>(ApiService.removeSubjectURL+id);

  }
}
