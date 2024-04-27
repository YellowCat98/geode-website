
export type FinishEventDetail = { [query: string]: (elem: Element) => void };
export const finishEventID = 'loading-finished';
export function createLoadingFinishEvent(args: FinishEventDetail): CustomEvent {
    return new CustomEvent(finishEventID, { detail: args });
}
