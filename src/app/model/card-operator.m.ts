import { ExpressionOperator, Expressions } from "./expression.m";

export class CardOperator {
  private readonly _cards: number[];
  private readonly _threshold: any = 0.0000001;

  constructor(cards: number[]) {
    this._cards = cards;
  }

  /// <summary>
  /// 对数组a所有可能的排列进行组合运算并返回运算的结果
  /// </summary>
  /// <param name="a"></param>
  /// <returns></returns>
  public Operate(checkResult: number) {
    const results = [];
    for (let ai = 0; ai < this._cards.length; ai++) {
      const a1 = this._cards[ai];
      for (let bi = 0; bi < this._cards.length; bi++) {
        if (bi !== ai) {
          const a2 = this._cards[bi];
          for (let ci = 0; ci < this._cards.length; ci++) {
            if (ci !== ai && ci !== bi) {
              const a3 = this._cards[ci];
              for (let di = 0; di < this._cards.length; di++) {
                if (di !== ai && di !== bi && di !== ci) {
                  const a4 = this._cards[di];
                  let tryOperate = this.OperateTwoTwo([a1, a2, a3, a4], checkResult);
                  if (tryOperate.success) {
                    if (!results.some(x => x === tryOperate.expression)) {
                      results.push(tryOperate.expression);
                    }
                  }
                  tryOperate = this.OperateTreeOne([a1, a2, a3, a4], checkResult);
                  if (tryOperate.success) {
                    if (!results.some(x => x === tryOperate.expression)) {
                      results.push(tryOperate.expression);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return {
      results,
      message: `计算完成，共有 ${results.length} 种运算方式。`
    };
  }

  /// <summary>
  /// (a1{Exp}a2){Exp}(a3{Exp}a4)
  /// </summary>
  /// <returns></returns>
  private OperateTwoTwo(cards: number[], checkResult: number) {
    const a12: ExpressionOperator[] = this.Operates(cards[0], cards[1]);
    const a34: ExpressionOperator[] = this.Operates(cards[2], cards[3]);
    for (const a of a12) {
      for (const b of a34) {
        const ab: ExpressionOperator[] = this.Operates(a.GetResult(), b.GetResult());
        for (const h of ab) {
          if (Math.abs(h.GetResult() - checkResult) < this._threshold) {
            return {
              expression: h.GetExpressionString(a.FinalExpressionString(), b.FinalExpressionString()) + `=${h.GetResult()}`,
              success: true
            };
          }
        }
      }
    }
    return {
      expression: undefined,
      success: false
    };
  }

  /// <summary>
  /// (a1{Exp}a2{Exp}a3){Exp}a4
  /// </summary>
  /// <returns></returns>
  private OperateTreeOne(cards: number[], checkResult: number) {
    const a12: ExpressionOperator[] = this.Operates(cards[0], cards[1]); // (a1{Exp}a2{Exp}a3){Exp}a4
    for (const a of a12) {
      const a123: ExpressionOperator[] = this.Operates(a.GetResult(), cards[2]);
      for (const b of a123) {
        const ab: ExpressionOperator[] = this.Operates(b.GetResult(), cards[3]);
        for (const c of ab) {
          if (Math.abs(c.GetResult() - checkResult) < this._threshold) {
            return {
              expression: c.GetExpressionString(b.GetExpressionString(a.FinalExpressionString(), b.Num_b), cards[3]) + `=${c.GetResult()}`,
              success: true
            };
          }
        }
      }
    }
    return {
      expression: undefined,
      success: false
    };
  }

  /// <summary>
  /// 运算两个数的四则运算并将结果作为一个数组返回
  /// </summary>
  /// <param name="num_a">The number a.</param>
  /// <param name="num_b">The number b.</param>
  /// <returns></returns>
  private Operates(numA: number, numB: number): ExpressionOperator[] {
    return [
      new ExpressionOperator(numA, numB, Expressions.Addition),
      new ExpressionOperator(numA, numB, Expressions.Subtraction),
      new ExpressionOperator(numA, numB, Expressions.NSubtraction),
      new ExpressionOperator(numA, numB, Expressions.Multiplication),
      new ExpressionOperator(numA, numB, Expressions.Division),
      new ExpressionOperator(numA, numB, Expressions.NDivision),
    ];
  }
}
