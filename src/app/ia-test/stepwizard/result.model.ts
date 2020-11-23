export class ResultModel {
  constructor(private _message: string, private _products: string[]) {}

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get products(): string[] {
    return this._products;
  }

  set products(value: string[]) {
    this._products = value;
  }
}
