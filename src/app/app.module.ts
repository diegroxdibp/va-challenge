import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import player from 'lottie-web';
import { DragScrollModule } from 'ngx-drag-scroll';
import { LottieModule } from 'ngx-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntersectionObserverDirective } from './shared/intersection-observer.directive';
import { ObserveVisibilityDirective } from './shared/observe-visibility.directive';
import { VaAboutComponent } from './va-about/va-about.component';
import { VaFooterComponent } from './va-footer/va-footer.component';
import { VaHamburguerMenuComponent } from './va-hamburguer-menu/va-hamburguer-menu.component';
import { VaHomepageComponent } from './va-homepage/va-homepage.component';
import { VaMenuComponent } from './va-menu/va-menu.component';
import { VaNavbarComponent } from './va-navbar/va-navbar.component';
import { VaProjectPreviewComponent } from './va-project-preview/va-project-preview.component';
import { VaProjectComponent } from './va-project/va-project.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    VaNavbarComponent,
    VaHomepageComponent,
    VaProjectComponent,
    VaAboutComponent,
    VaProjectPreviewComponent,
    VaFooterComponent,
    VaMenuComponent,
    VaHamburguerMenuComponent,
    ObserveVisibilityDirective,
    IntersectionObserverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,
    BrowserAnimationsModule,
    DragScrollModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
