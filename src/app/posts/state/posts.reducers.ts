import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePostSuccess, loadPostsSuccess, updatePostSuccess } from "./posts.actions";
import { initialstate, postsAdapter } from "./posts.state";

export const postsReducer = createReducer(
    initialstate,
    on(addPostSuccess, (state, action) => {
        return postsAdapter.addOne(action.post, state);
    }),
    on(updatePostSuccess, (state, action) => {
        return postsAdapter.updateOne(action.post, state);
    }),
    on(deletePostSuccess, (state, { id }) => {
        return postsAdapter.removeOne(id, state);
    }),
    on(loadPostsSuccess, (state, action) => {
        return postsAdapter.setAll(action.posts, state);
    })
);