import { NotificationType } from '../enums/notification-type.enum';

export interface NotificationData {
    message: string;
    date: Date;
    type: NotificationType
}
