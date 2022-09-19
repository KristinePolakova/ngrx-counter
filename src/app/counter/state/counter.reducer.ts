import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { initialstate } from './counter.state';


export const counterReducer = createReducer(
    initialstate,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }), on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }), on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    })
);
