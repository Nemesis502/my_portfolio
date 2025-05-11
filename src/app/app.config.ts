import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
  provideTranslateService({
    loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient],
    },
  }), {
    provide: APP_INITIALIZER,
    useFactory: () => () => {
      AOS.init({
        duration: 600,
        once: true,
        offset: 120,
      });
    },
    multi: true
  }
  ],
};