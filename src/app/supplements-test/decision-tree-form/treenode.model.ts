interface Answer {
  id: string;
  msg: string;
}

export enum AnswerType {
  Radio = 'radio',
  Select = 'select'
}

export class TreeNode {
  constructor(
    private _id: string,
    private _msg: string,
    private _answers: Answer[],
    private _answerType: string,
    private _isLeaf: boolean,
  ) {}

  get id(): string {
    return this._id;
  }

  get msg(): string {
    return this._msg;
  }

  get answers(): Answer[] {
    return this._answers;
  }

  get answerType(): string {
    return this._answerType;
  }

  get isLeaf(): boolean {
    return this._isLeaf;
  }
}
