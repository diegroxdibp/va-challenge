import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProjectInfo } from 'src/models/project-info';
import { mockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  projects$: Observable<ProjectInfo[]>;
  constructor() {
    this.projects$ = of(mockData);
  }
  updatePreviewStatus(projectName: string, loadPreviewStatus: boolean) {
    this.projects$.pipe(
      tap(a => console.log(a)),
      // map(a => console.log(a)),
      // tap(a => console.log(a)),
    );
    // this.projects = this.projects.map((project: ProjectInfo) => {
    //   if (project.name == projectName) {
    //     if (!project.loadPreview) {
    //       const clone = { ...project }
    //       clone.loadPreview = loadPreviewStatus;
    //     }
    //     return project;
    //   } else return project
    // })
  }
}
