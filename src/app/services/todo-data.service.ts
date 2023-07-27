import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoDB : any = []

  constructor() { }

  saveValue(value : any){
    this.todoDB.push(value)
    console.log(value);
  }

  clearAll(){
    this.todoDB = []
  }

}
