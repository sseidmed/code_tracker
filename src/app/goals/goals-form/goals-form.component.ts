import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-goals-form',
  templateUrl: './goals-form.component.html',
  styleUrls: ['./goals-form.component.css']
})
export class GoalsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goalsForm = new FormGroup({
    goal: new FormControl(''),
    tag: new FormControl(''),
  });

  save() {
    console.log("Submit goal")
  }

  cancel() {
    console.log("Cancel creating new goal")
  }

}
