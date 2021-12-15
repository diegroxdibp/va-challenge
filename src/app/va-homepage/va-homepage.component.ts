import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProjectInfo } from 'src/models/project-info';
import { MockDataService } from '../shared/mock-data.service';

@Component({
  selector: 'app-va-homepage',
  templateUrl: './va-homepage.component.html',
  styleUrls: ['./va-homepage.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaHomepageComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChildren('project', { read: ElementRef })
  project!: QueryList<ProjectInfo>;
  projects: ProjectInfo[] = [];
  projects$: Observable<ProjectInfo[]>;
  subscription: Subscription = new Subscription;
  observer: any;
  constructor(public projectsService: MockDataService) {
    this.projects$ = projectsService.projects$;
    this.subscription = this.projects$.pipe(
      tap(data => data.forEach(project => this.projects[project.id] = project)),
    ).subscribe()
  }

  ngOnInit(): void {
    // this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    // console.log(this.project.toArray());
    // this.project.toArray().forEach((element) =>
    //   console.log(element)
    //   // this.observer.observe(element)
    // )
    // this.project.changes.subscribe(d => {
    //   console.log(d);
    //   console.log(d.first);
    //   // this.observer.observe(d)
    //   this.observer.observe(d.first.nativeElement)
    // })
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }

    this.observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        console.log('scroll more');
      }
    }, options);
  }
  onVisible($event: HTMLElement, project: ProjectInfo) {
    let clonedArray = [...this.projects];
    clonedArray[project.id].loadPreview = true;
    this.projects = clonedArray;
    // console.log($event.dataset.name)

    if ($event.dataset.name) {
      this.projectsService.updatePreviewStatus($event.dataset.name, true)
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
