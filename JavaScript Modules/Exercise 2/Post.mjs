export default class Post 
{
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    publish() {
        console.log(`Post titled "${this.title}" published with content: ${this.content}`);
    }
}