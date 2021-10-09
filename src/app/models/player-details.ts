
import { Games } from './games';
import { Infractions } from './infractions';
import { Platforms } from './platforms';
import { Settings } from './settings';

export interface PlayerDetails {
    player_id: string;
    nickname: string;
    avatar: string;
    country: string;
    cover_image: string;
    cover_featured_image: string;
    infractions: Infractions;
    platforms: Platforms;
    games: Games;
    settings: Settings;
    friends_ids: string[];
    new_steam_id: string;
    steam_id_64: string;
    steam_nickname: string;
    membership_type: string;
    memberships: string[];
    faceit_url: string;
}
