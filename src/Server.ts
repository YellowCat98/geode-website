
import { icons, type Icons } from "./Icons";

type ServerResponse<T> = { error: string, payload: T };

async function get<T>(path: string): Promise<T> {
    const res = await fetch(
        `https://api.geode-sdk.org/v1/${path}`,
        {
            headers: {
                'User-Agent': 'Geode 1.0/Website',
            }
        }
    );
    const json = await res.json() as ServerResponse<T>;
    if (json.error) {
        throw json.error;
    }
    return json.payload;
}

export async function getTags(): Promise<string[]> {
    return await get('tags');
}
export function getIconForTag(tag: string): Icons {
    const key = `tag-${tag}`;
    if (key in icons) {
        return key as Icons;
    }
    return 'tags';
}
