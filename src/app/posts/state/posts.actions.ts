import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST_ACTION = '[Posts Page] Add Post';
export const ADD_POST_SUCCESS = '[Posts Page] Add Post Success';
export const UPDATE_POST_ACTION = '[Posts Page] Update Post';
export const UPDATE_POST_SUCCESS = '[Posts Page] Update Post Success';
export const DELETE_POST_ACTION = '[Posts Page] Delete Post';
export const DELETE_POST_SUCCESS = '[Posts Page] Delete Post Success';
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

export const updatePostSuccess = createAction(
    UPDATE_POST_SUCCESS,
    props<{ post: Update<Post> }>()
);

export const deletePost = createAction(
    DELETE_POST_ACTION,
    props<{ id: string }>()
);

export const deletePostSuccess = createAction(
    DELETE_POST_SUCCESS,
    props<{ id: string }>()
);

export const loadPosts = createAction(LOAD_POST);

export const loadPostsSuccess = createAction(
    LOAD_POST_SUCCESS,
    props<{ posts: Post[] }>()
);

