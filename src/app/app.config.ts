import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { ConfirmationService, MessageService,  } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeng/themes/nora'
import { tokenInterceptor } from './interceptors/token.interceptor';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withRouterConfig({
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload'
    })),
    MessageService, 
    ConfirmationService, DialogService, DynamicDialogConfig,
    provideAnimations(),
    providePrimeNG({theme: {preset: Material}}), 
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ]
};
