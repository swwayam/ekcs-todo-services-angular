import { Component } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(public todoService: TodoDataService){}
}
