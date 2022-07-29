import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public loadProgs() {
    if(localStorage.getItem('myProgs') !== null) {
      return JSON.parse(localStorage.getItem('myProgs')!); 
    } else {
      return [];
    }
  }

  public saveProgs(myProgs: any) {
    localStorage.setItem('myProgs', JSON.stringify(myProgs));
  }
}
