import { Component} from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
 
  constructor(public todoService: TodoDataService){
  }

  log(value: any){
    this.todoService.saveValue(value)
  }

  clear(){
    this.todoService.clearAll()
  }

}
