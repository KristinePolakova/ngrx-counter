export interface CounterState {
    counter: number;
    channelName: string;
}

export const initialstate: CounterState = {
    counter: 0,
    channelName: 'Angular Developer',
}