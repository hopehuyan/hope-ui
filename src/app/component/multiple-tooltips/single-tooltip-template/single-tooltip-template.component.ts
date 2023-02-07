import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-tooltip-template',
  templateUrl: './single-tooltip-template.component.html',
  styleUrls: ['./single-tooltip-template.component.scss']
})
export class SingleTooltipTemplateComponent implements OnInit {
  /**
   * templateData model:
   * [ { text: '',  value: [] } ]
   * text can be null
   */

  @Input()
  templateData: any;
  @Input()
  blankContent: string;
  @Input()
  trigger: string;

  valueLength: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.generateDta();
  }

  generateDta() {
    this.templateData.map(res => {
      this.valueLength += res.value.length;
    });
  }
}
