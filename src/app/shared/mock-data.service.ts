import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProjectInfo } from 'src/models/project-info';
import { mockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  projects$: BehaviorSubject<ProjectInfo[]>;
  constructor() {
    this.projects$ = new BehaviorSubject<ProjectInfo[]>(mockData);
  }
  updatePreviewStatus(projectName: string, loadPreviewStatus: boolean) {
    //   let updatedProjectsArray;
    //   this.projects$.pipe(
    //     tap(projectsArray => {
    //       projectsArray.forEach(project => {
    //         if (project.name === projectName) {
    //           const projectKey = projectsArray.indexOf(project);
    //           let updatedProject = Object.assign({}, project);
    //           updatedProject.loadPreview = loadPreviewStatus;
    //           updatedProjectsArray = [...projectsArray]
    //           updatedProjectsArray[projectKey] = updatedProject;
    //         }
    //       })
    //     })
    //   ).next(updatedProjectsArray);
  }
}
