export class Todo {
  created_at: Date;

  constructor(
    public content: string,
    public id: number,
    public checked: boolean,
    public editing: boolean
  ) {
    this.created_at = new Date();
  }

  serialize() {
    return {
      content: this.content,
      id: this.id,
      done: this.checked,
      created_at: this.created_at,
    };
  }
}
