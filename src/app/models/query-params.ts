import { Period } from '../enums/period.enum';
import { Widget } from '../enums/widget.enum';

export interface QueryParams {
    widget: Widget,
    period: Period | undefined,
    refreshRate: number
}
