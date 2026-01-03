import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { grocreducer } from './components/store/reducers/grocery.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideStore({groceries:grocreducer}),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore()]
};
