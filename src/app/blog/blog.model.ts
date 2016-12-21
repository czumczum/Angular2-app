export class Blog {
    id: number;
    title: string;
    body: string;
    blogPosts: string;
    blogId: number;
}
export class Comment {
    id: number;
    title: string;
    body: string;
    postId: number;
}