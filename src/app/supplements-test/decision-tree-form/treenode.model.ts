interface Answer {
  id: string;
  msg: string;
}

export class TreeNode {
  constructor(
    private _id: string,
    private _msg: string,
    private _prevQuestion: string,
    private _answers: Answer[],
    private _isLeaf: boolean
  ) {}

  get id(): string {
    return this._id;
  }

  get msg(): string {
    return this._msg;
  }

  get prevQuestion(): string {
    return this._prevQuestion;
  }

  get answers(): Answer[] {
    return this._answers;
  }

  get isLeaf(): boolean {
    return this._isLeaf;
  }
}
