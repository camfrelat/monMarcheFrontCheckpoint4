export class Vegetable {
  private _id: number;
  private _name: string;
  private _description: string;

  constructor(id: number, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }
  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }
  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }
}
