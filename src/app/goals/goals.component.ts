import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../shared/services/goals.service';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals = null;
  errorMessage = '';

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals() {
    this.goalsService.all()
      .subscribe(data => {
        this.goals = data;
        console.log("data", this.goals)
      }),
      error => {
        this.errorMessage = error;
      }
    // this.goalsService.all();
 
  }


}
