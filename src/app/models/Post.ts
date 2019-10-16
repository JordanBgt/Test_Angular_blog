import * as firebase from 'firebase';

export class Post {
    title: string;
    content: string;
    loveIts = 0;
    createdAt;

    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.createdAt = firebase.database.ServerValue.TIMESTAMP;
    }
}
