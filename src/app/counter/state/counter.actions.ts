import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Page] increment');
export const decrement = createAction('[Counter Page] decrement');
export const reset = createAction('[Counter Page] reset');

export const customIncrement = createAction(
    '[Counter Page] Get Custome Increment',
    props<{ value: number }>()
);

export const changeChannelName = createAction(
    '[Counter Page] Change Channel Name'
);