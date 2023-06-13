import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent {

  @Output() clickStart: EventEmitter<boolean> = new EventEmitter<boolean>();

}
