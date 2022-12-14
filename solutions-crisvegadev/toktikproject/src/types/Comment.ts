import Author from './Author'

interface Comment {
    id: number;
    content: string;
    author: Author;
    likes: string;
    dislikes: string;
    replies: string;
}

export default Comment
