import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-va-project',
  templateUrl: './va-project.component.html',
  styleUrls: ['./va-project.component.scss']
})
export class VaProjectComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../assets/project/p-11-lottie.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  constructor() { }

  ngOnInit(): void {
  }

}
