export interface Answer {
  id: string;
  msg: string;
  synonyms?: string[];
}

interface NodeTexts {
  title: string;
  text: string;
  label?: string;
  productLink?: string;
}

export interface Substances {
  id: string;
  name?: string;
  text: string;
  rif?: string;
}

export enum NodeType {
  Radio = 'radio',
  Select = 'select',
  Substance = 'substance',
  Advice = 'advice',
  Contact = 'contact'
}

export class TreeNode {
  constructor(
    private _id: string,
    private _msg: NodeTexts,
    private _answers: Answer[],
    private _answerType: string,
    private _isLeaf: boolean,
    private _subAdv?: string[]
  ) {}

  get id(): string {
    return this._id;
  }

  get text(): string {
    return this._msg.text;
  }

  get label(): string {
    return this._msg.label;
  }

  get title(): string {
    return this._msg.title;
  }

  get productLink(): string {
    return this._msg.productLink;
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
}
