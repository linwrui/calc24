export enum Expressions {
  /// <summary>
  /// 加法(a+b)
  /// </summary>
  Addition,

  /// <summary>
  /// 减法(a-b)
  /// </summary>
  Subtraction,

  /// <summary>
  /// 减法(b-a)
  /// </summary>
  NSubtraction,

  /// <summary>
  /// 乘法(a*b)
  /// </summary>
  Multiplication,

  /// <summary>
  /// 除法(a/b)
  /// </summary>
  Division,

  /// <summary>
  /// 除法(b/a)
  /// </summary>
  NDivision
}
export class ExpressionOperator {
  /// <summary>
  /// Gets the number left.
  /// </summary>
  /// <value>
  /// The number left.
  /// </value>
  public get Num_left() {
    switch (this._expression) {
      case Expressions.NDivision:
      case Expressions.NSubtraction: return this._b;
      default: return this._a;
    }
  }

  /// <summary>
  /// Gets the number right.
  /// </summary>
  /// <value>
  /// The number right.
  /// </value>
  public get Num_right() {
    switch (this._expression) {
      case Expressions.NDivision:
      case Expressions.NSubtraction: return this._a;
      default: return this._b;
    }
  }

  /// <summary>
  /// Gets the number b.
  /// </summary>
  /// <value>
  /// The number b.
  /// </value>
  public get Num_b() { return this._b; }

  /// <summary>
  /// Gets the number a.
  /// </summary>
  /// <value>
  /// The number a.
  /// </value>
  public get Num_a() { return this._a; }
  private readonly _a: number;
  private readonly _b: number;
  private readonly _expression: Expressions;

  /// <summary>
  /// Initializes a new instance of the <see cref="ExpressionOperator"/> class.
  /// </summary>
  /// <param name="num_a">The number a.</param>
  /// <param name="num_b">The number b.</param>
  /// <param name="expression">The expression.</param>
  constructor(numA: number, numB: number, expression: Expressions) {
    this._a = numA;
    this._b = numB;
    this._expression = expression;
  }

  /// <summary>
  /// Gets the result.
  /// </summary>
  /// <returns></returns>
  public GetResult(): number {
    switch (this._expression) {
      case Expressions.Addition: return this._a + this._b;
      case Expressions.Subtraction: return this._a - this._b;
      case Expressions.NSubtraction: return this._b - this._a;
      case Expressions.Multiplication: return this._a * this._b;
      case Expressions.Division: return this._b === 0 ? Number.NaN : this._a / this._b;
      case Expressions.NDivision: return this._a === 0 ? Number.NaN : this._b / this._a;
      default: return Number.NaN;
    }
  }

  /// <summary>
  /// Returns a <see cref="System.String" /> that represents this instance.
  /// </summary>
  /// <returns>
  /// A <see cref="System.String" /> that represents this instance.
  /// </returns>
  public ToString(): string {
    return `${this.FinalExpressionString()}=${this.GetResult()}`;
  }

  /// <summary>
  /// Gets the expression string.
  /// </summary>
  /// <returns></returns>
  public FinalExpressionString() { return this.GetExpressionString(this._a, this._b); }

  /// <summary>
  /// Gets the expression string.
  /// </summary>
  /// <param name="left">The left.</param>
  /// <param name="right">The right.</param>
  /// <returns></returns>
  public GetExpressionString(left: any, right: any) {
    left = typeof left === "string" ? `(${left})` : left;
    right = typeof right === "string" ? `(${right})` : right;
    switch (this._expression) {
      case Expressions.Addition: return `${left}+${right}`;
      case Expressions.Subtraction: return `${left}-${right}`;
      case Expressions.NSubtraction: return `${right}-${left}`;
      case Expressions.Multiplication: return `${left}*${right}`;
      case Expressions.Division: return `${left}/${right}`;
      case Expressions.NDivision: return `${right}/${left}`;
      default: return "";
    }

  }
}
