import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(public http:HttpClient) { }

  getAvailableFiles = () => {
    return this.http.get(environment.apiURL + "/files");
  }

  getFile = (fileID:string) => {
    return this.http.get(environment.apiURL + "/files/" + fileID);
  }

  createFile = (payload:any) => {
    return this.http.post(environment.apiURL + "/files", payload);
  }

  updateFile = (fileID:string, payload:any) => {
    return this.http.put(environment.apiURL + "/files/" + fileID, payload);
  }

  deleteFile = (fileID:string) => {
    return this.http.delete(environment.apiURL + "/files/" + fileID);
  }

}
