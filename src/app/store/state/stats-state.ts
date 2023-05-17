import { ChallangeStats } from 'src/app/models/challange-stats';
import { EsportalStats } from 'src/app/models/esportal-stats';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';
import { NotificationData } from 'src/app/models/notification-data';

export interface StatsState {
    faceItData: FaceItStatsResponse;
    notification: NotificationData;
    challangeData: ChallangeStats;
    esportalData: EsportalStats
}
