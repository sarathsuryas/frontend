import { InjectionToken } from '@angular/core';

/** Base URL used by ApiService. Override in app.config.ts per environment. */
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL', {
  providedIn: 'root',
  factory: () => '/api',
});
