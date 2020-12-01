interface Answer {
  id: string;
  msg: string;
}

export class TreeNode {
  constructor(private _id: string, private msg: string, private prevQuestion: string, private answers: Answer[], private isLeaf: boolean) {}

  get id(): string {
    return this._id;
  }
}
