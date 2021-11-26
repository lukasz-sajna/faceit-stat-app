import { InjectionToken } from '@angular/core';

export const API_URL =  new InjectionToken<string>('api-url');
export const API_KEY =  new InjectionToken<string>('api-key');
export const LOCAL_API_URL = new InjectionToken<string>('local-api-url');
export const BASIC_API_URL = new InjectionToken<string>('basic-api-url');
export const FACEIT_STATS_HUB = new InjectionToken<string>('faceit-stats-hub');
export const NOTIFICATIONS_HUB = new InjectionToken<string>('notifications-hub');