export class ResultModel {
  constructor(private _message: string, private _product: string) {}

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }

}
