export class Todo {
  constructor(
    public content: string,
    public id: number,
    public checked: boolean,
    public editing: boolean
  ) {}
}
