import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goalsForm = new FormGroup({
    goal: new FormControl(''),
    tag: new FormControl(''),
  });

}
