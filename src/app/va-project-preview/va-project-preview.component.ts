import { tap } from 'rxjs/operators';
import { ProjectInfo } from './../../models/project-info';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MockDataService } from '../shared/mock-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-va-project-preview',
  templateUrl: './va-project-preview.component.html',
  styleUrls: ['./va-project-preview.component.scss']
})
export class VaProjectPreviewComponent implements OnInit, AfterViewInit {
  @Input()
  projectInfo!: ProjectInfo;
  projects$: Observable<ProjectInfo[]>;
  shouldLoad: boolean;
  constructor(public projectsService: MockDataService) {
    this.shouldLoad = false;
    this.projects$ = projectsService.projects$;
  }

  ngOnInit(): void {
    this.projects$.pipe(
      tap(projects => {
        let currentProject = projects.find(project => project.name === this.projectInfo.name);
        if (currentProject) {
          this.shouldLoad = true;
        }
      })
    ).subscribe();
  }

  ngAfterViewInit(): void {

  }

  checkLoadStatus() {
    // const project = this.projectsService.projects.find(project => project.name === this.projectInfo.name);
  }
}
