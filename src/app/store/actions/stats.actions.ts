import { createAction, props } from '@ngrx/store';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';
import { NotificationData } from 'src/app/models/notification-data';
import { GET_BASIC_STATS, GET_BASIC_STATS_SUCCEEDED, GET_ELO_DIFF, GET_ELO_DIFF_SUCCEEDED, SHOW_NOTIFICATION } from './stats.action-names';

export const getEloDiff = createAction(GET_ELO_DIFF);
export const getEloDiffSucceeded = createAction(GET_ELO_DIFF_SUCCEEDED, props<{ eloDiff: number }>());

export const getBasicStats = createAction(GET_BASIC_STATS, props<{ nickname: string }>());
export const getBasicStatsSuccceeded = createAction(GET_BASIC_STATS_SUCCEEDED, props<{ response: FaceItStatsResponse }>());

export const showNotification = createAction(SHOW_NOTIFICATION, props<{notificationData: NotificationData}>());