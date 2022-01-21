import { rand } from "@giveback007/util-lib";

const randUserApi = 'https://randomuser.me/api/portraits/';
export const avatarUtils = {
    getImg: () => ['women/90.jpg', 'women/11.jpg', 'women/39.jpg', 'men/19.jpg', 'men/31.jpg', 'men/54.jpg', 'lego/6.jpg'].map(x => randUserApi + x)[rand(0, 6)],
    getStatus: () => (['online', 'offline', 'away', 'busy', undefined] as const)[rand(0, 4)],
    getBadge: () => [3, 47, 1000, true, false, undefined][rand(0, 5)],
} as const;

