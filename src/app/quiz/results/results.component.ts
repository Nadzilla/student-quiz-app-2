import { Component, Input } from '@angular/core';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() quiz!: Quiz;

  score: number = 0;

  ngOnInit(): void {
    this.calculateScore();
  }

  calculateScore(): void {
    this.quiz.questions.forEach(question => {
      if (question.selectedAnswerId === question.correctAnswerId) {
        this.score += 1;
      }
    })
  }

}
