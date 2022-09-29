import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePostSuccess, loadPostsSuccess, updatePostSuccess } from "./posts.actions";
import { initialstate } from "./posts.state";

export const postsReducer = createReducer(
    initialstate,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post };

        return {
            ...state,
            posts: [...state.posts, post],
        };
    }),
    on(updatePostSuccess, (state, action) => {
        const updatedPosts = state.posts.map(post => {
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPosts,
        };
    }),
    on(deletePostSuccess, (state, { id }) => {
        const updatedPosts = state.posts.filter(post => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: updatedPosts,
        };
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts,
        }
    })
);