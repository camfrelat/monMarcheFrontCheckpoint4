import { Vegetable } from './Vegetable.model';

export class ShopList {
  private _id: number;
  private _name: string;
  private _creationDate: Date;
  private _vegetables: Vegetable[];

  constructor(
    id: number,
    name: string,
    creationDate: Date,
    vegetables: Vegetable[]
  ) {
    this._id = id;
    this._name = name;
    this._creationDate = creationDate;
    this._vegetables = vegetables;
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
   * Getter creationDate
   * @return {Date}
   */
  public get creationDate(): Date {
    return this._creationDate;
  }

  /**
   * Setter creationDate
   * @param {Date} value
   */
  public set creationDate(value: Date) {
    this._creationDate = value;
  }

  /**
   * Getter vegetables
   * @return {Vegetable[]}
   */
  public get vegetables(): Vegetable[] {
    return this._vegetables;
  }

  /**
   * Setter vegetables
   * @param {Vegetable[]} value
   */
  public set vegetables(value: Vegetable[]) {
    this._vegetables = value;
  }
}
