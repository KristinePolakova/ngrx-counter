import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Post } from "../models/posts.model";


@Injectable({
    providedIn: 'root',
})
export class PostsService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(
            `https://angular-ngrx-24bc6-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
        ).pipe(map((data) => {
            const posts: Post[] = [];
            for (let key in data) {
                posts.push({ ...data[key], id: key });
            }
            return posts;
        }))
    }

    addPosts(post: Post): Observable<{ name: string }> {
        return this.http.post<{ name: string }>(
            `https://angular-ngrx-24bc6-default-rtdb.europe-west1.firebasedatabase.app/posts.json`,
            post
        );
    }
}