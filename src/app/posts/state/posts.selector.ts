import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";
import { getCurrentRoute } from "src/app/store/router/router.selector";
import { postsAdapter, PostsState } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const postsSelectors = postsAdapter.getSelectors();


export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);

export const getPostEntities = createSelector(
    getPostsState,
    postsSelectors.selectEntities
);

export const getPostById = createSelector(
    getPostEntities,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
        return posts ? posts[route.params['id']] : null;
    });
