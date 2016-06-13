export class Playlist {
    id: number;
    count: number;
    filePath: string;
    title: string;
    constructor(id: number, count: number, filePath: string, title: string) {
        this.id = id;
        this.count = count;
        this.filePath = filePath;
        this.title = title;
    }
}
