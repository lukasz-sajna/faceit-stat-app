import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';
import { NotificationData } from 'src/app/models/notification-data';

export interface StatsState {
    faceItData: FaceItStatsResponse;
    notification: NotificationData
}
