import { ChangeDetectorRef, Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { InputNumber } from "primeng/inputnumber";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit{
  dynamic = true;

  // @ts-ignore
  @ViewChild('inputNumber', {static: true}) inputNumber: InputNumber;
  estimatedRevenueFeesConfig = {
    minFractionDigits: 0,
    maxFractionDigits: 2,
    maxlength: 16,
    useGrouping: true,
    placeholder: 'Estimated Revenue Fees Input',
    mode: "decimal",
    disabled: false,
    readonly: false
  };
  testAttribute = {};

  inputNumberConfigs = JSON.parse('{\n' +
    '\t"business": [\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "estimatedRevenueFees",\n' +
    '\t\t\t\t"styleClass": "w-full",\n' +
    '\t\t\t\t"minFractionDigits": 0,\n' +
    '\t\t\t\t"maxFractionDigits": 2,\n' +
    '\t\t\t\t"maxlength": 20,\n' +
    '\t\t\t\t"useGrouping": true\n' +
    '\t\t\t}\n' +
    '\t\t}\n' +
    '\t],\n' +
    '\t"common": [\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "integerOnly"\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "doubleOnly",\n' +
    '\t\t\t\t"minFractionDigits": 0,\n' +
    '\t\t\t\t"maxFractionDigits": 2\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "Min-Max Boundaries",\n' +
    '\t\t\t\t"min": 0,\n' +
    '\t\t\t\t"max": 100\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "Currency",\n' +
    '\t\t\t\t"mode": "currency",\n' +
    '\t\t\t\t"currency": "USD"\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "Percent",\n' +
    '\t\t\t\t"prefix": "%"\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "Min-Max Boundaries with button",\n' +
    '\t\t\t\t"showButtons": true,\n' +
    '\t\t\t\t"min": 0,\n' +
    '\t\t\t\t"max": 100\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "Stacked",\n' +
    '\t\t\t\t"showButtons": true,\n' +
    '\t\t\t\t"minFractionDigits": 2,\n' +
    '\t\t\t\t"maxFractionDigits": 2\n' +
    '\t\t\t}\n' +
    '\t\t},\n' +
    '\t\t{\n' +
    '\t\t\t"config": {\n' +
    '\t\t\t\t"label": "Horizontal with Step",\n' +
    '\t\t\t\t"showButtons": true,\n' +
    '\t\t\t\t"buttonLayout": "horizontal",\n' +
    '\t\t\t\t"mode": "currency",\n' +
    '\t\t\t\t"currency": "USD"\n' +
    '\t\t\t}\n' +
    '\t\t}\n' +
    '\t]\n' +
    '}');

  constructor(private readonly _cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onInputTouched(event: any) {

  }
}
