import { Component, OnInit } from "@angular/core";
import { CardOperator } from "src/app/model/card-operator.m";

@Component({
  selector: "app-cards-panel",
  templateUrl: "./cards-panel.component.html",
  styleUrls: ["./cards-panel.component.less"]
})
export class CardsPanelComponent {
  public readonly cards: string[] = ["0", "0", "0", "0"];
  public check = 24;
  public outPut = {
    results: [],
    message: "请输入数值后按确认键"
  };
  confirm() {
    this.outPut = new CardOperator(this.cards.map(x => Number.parseInt(x))).Operate(this.check);
  }
}
