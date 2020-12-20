interface Answer {
  id: string;
  msg: string;
}

interface QuestionMessage {
  title: string;
  question: string;
  label?: string;
}

export enum AnswerType {
  Radio = 'radio',
  Select = 'select',
  Final = 'final'
}

export class TreeNode {
  constructor(
    private _id: string,
    private _msg: QuestionMessage,
    private _answers: Answer[],
    private _answerType: string,
    private _isLeaf: boolean,
    private _subAdv?: string[],
    private _finalMsg?: string
  ) {}

  get id(): string {
    return this._id;
  }

  get question(): string {
    return this._msg.question;
  }

  get title(): string {
    return this._msg.title;
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

  get subAdv(): string[] {
    return this._subAdv;
  }

  get finalMsg(): string {
    return this._finalMsg;
  }
}
