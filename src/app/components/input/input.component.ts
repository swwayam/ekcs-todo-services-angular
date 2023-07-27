import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() outputValue : any = new EventEmitter()

  log(todo: any){
    this.outputValue.emit(todo)
  }


}
