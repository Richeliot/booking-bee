import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
              provideZoneChangeDetection({ eventCoalescing: true }), // TOlearn
              provideRouter(routes),
              provideClientHydration(),  // TOlearn:HYDRATION LEARN
              provideAnimationsAsync()], // TOlearn:ANIMATION LEARN
};
