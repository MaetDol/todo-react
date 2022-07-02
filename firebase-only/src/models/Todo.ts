export class Todo {
  created_at: Date;
  updated_at: Date;

  constructor(
    public content: string,
    public checked: boolean,
    public editing: boolean
  ) {
    this.updated_at = new Date();
    this.created_at = new Date();
  }

  setContent(content: string) {
    this.updated_at = new Date();
    this.content = content;
  }

  serialize() {
    return {
      content: this.content,
      done: this.checked,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
