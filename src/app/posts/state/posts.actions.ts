import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST_ACTION = '[Posts Page] add post';
export const ADD_POST_SUCCESS = '[Posts Page] Add Post Success';
export const UPDATE_POST_ACTION = '[Posts Page] update post';
export const DELETE_POST_ACTION = '[Posts Page] delete post';
export const LOAD_POST = '[Post Page] Load Posts';
export const LOAD_POST_SUCCESS = '[Post Page] Load Posts Success';

export const addPost = createAction(
    ADD_POST_ACTION,
    props<{ post: Post }>()
);

export const addPostSuccess = createAction(
    ADD_POST_SUCCESS,
    props<{ post: Post }>()
);

export const updatePost = createAction(
    UPDATE_POST_ACTION,
    props<{ post: Post }>()
);

export const deletePost = createAction(
    DELETE_POST_ACTION,
    props<{ id: string }>()
);

export const loadPosts = createAction(LOAD_POST);

export const loadPostsSuccess = createAction(
    LOAD_POST_SUCCESS,
    props<{ posts: Post[] }>()
);

