import {
  Directive,
  ElementRef, EventEmitter,
  Host,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { InputNumber } from "primeng/inputnumber";
import { Dropdown } from "primeng/dropdown";
import { InputText } from "primeng/inputtext";
import { MultiSelect } from "primeng/multiselect";

@Directive({
  selector: '[dckControlConfigurator]'
})
export class InputConfiguratorDirective implements OnChanges {

  @Input() attributes = {};

  @Output() attributesChange: EventEmitter<any> = new EventEmitter();
  constructor(@Host() private _pHost: InputNumber) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    Object.assign(this._pHost, this.attributes);
    this._pHost.updateConstructParser();
  }
}
