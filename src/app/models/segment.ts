import { Stats } from './stats';

export interface Segment {
    img_regular: string;
    stats: Stats;
    type: string;
    mode: string;
    label: string;
    img_small: string;
}
