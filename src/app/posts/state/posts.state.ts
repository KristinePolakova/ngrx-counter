import { Post } from "src/app/models/posts.model"


export interface PostsState {
    posts: Post[];
}

export const initialstate: PostsState = {
    posts: [
        { id: '1', title: 'Simple Title 1', description: 'Sample Description 1' },
        { id: '2', title: 'Simple Title 1', description: 'Sample Description 1' },
        { id: '3', title: 'Simple Title 1', description: 'Sample Description 1' },
    ],
};