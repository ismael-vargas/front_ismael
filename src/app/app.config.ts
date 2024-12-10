import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),                       // Proveedor de rutas
    provideHttpClient(withFetch()),              // Proveedor de HTTP con soporte para Fetch API
    provideClientHydration(),                    // Soporte para Hydration (SSR)
    importProvidersFrom(BrowserModule),          // Importa el módulo principal del navegador
    importProvidersFrom(BrowserAnimationsModule) // Importa el módulo de animaciones del navegador
  ]
};
