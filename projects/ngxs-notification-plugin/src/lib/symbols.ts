import { InjectionToken } from '@angular/core';

export const NOTIFICATION_ENGINE = new InjectionToken('NOTIFICATIOn_ENGINE');

export type NotificationType = 'success' | 'hint' | 'warning' | 'error' | 'unknown-error';

export interface NotificationEngine {
    successNotification(message: string | any, options?: any, actions?: any | any[]);
    hintNotification(message: string | any, options?: any, actions?: any | any[]);
    warningNotification(message: string | any, options?: any, warning?: any, actions?: any | any[]);
    errorNotification(message: string | any, options?: any, error?: any, actions?: any | any[]);
    unknownErrorNotification(options?: any, error?: any, actions?: any | any[]);
}
