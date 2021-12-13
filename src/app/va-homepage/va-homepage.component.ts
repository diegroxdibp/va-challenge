import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectInfo } from 'src/models/project-info';
import { MockDataService } from '../shared/mock-data.service';

@Component({
  selector: 'app-va-homepage',
  templateUrl: './va-homepage.component.html',
  styleUrls: ['./va-homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaHomepageComponent implements OnInit {
  projects$: Observable<ProjectInfo[]>;
  constructor(public projectsService: MockDataService) {
    this.projects$ = projectsService.projects$;
  }

  ngOnInit(): void {
  }

  onVisible($event: HTMLElement) {
    console.log($event.dataset.name)
    if ($event.dataset.name) {
      this.projectsService.updatePreviewStatus($event.dataset.name, true)
    }

  }
}
