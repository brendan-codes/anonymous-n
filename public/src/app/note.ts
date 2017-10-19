export class Note {
  content:string;
  created_at:Date;

  constructor(content, created_at){
    this.content = content;
    this.created_at = created_at;
  }
}
