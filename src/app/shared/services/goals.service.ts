import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private model = "goals";

//   goals = [ 
//     {
//       id: 1,
//       goal: "Follow a tutorial",
//       tag: "New skill"
//     },
//     {
//       id: 2,
//       goal: "Read an article",
//       tag: "New skill"
//     },
//     {
//       id: 3,
//       goal: "Solve algorithms",
//       tag: "Practice"
//     }
// ]

  constructor(private http: HttpClient) {  }

  all() {
    // console.log("Goals from service", this.goals)
    //return this.codingGoals;
    return this.http.get(this.getUrl());
  }

  private getUrl() {
    console.log(`${BASE_URL}${this.model}`)
    return `${BASE_URL}${this.model}`;
  }
}
