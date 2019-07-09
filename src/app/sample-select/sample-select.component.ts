import { Component, OnInit, Input } from "@angular/core";
import { ISelectItem } from "../iselect-item";
import { SelectSettings } from "../select-settings";

@Component({
  selector: "app-sample-select",
  templateUrl: "./sample-select.component.html",
  styleUrls: ["./sample-select.component.css"]
})
export class SampleSelectComponent implements OnInit {
  constructor() {}

  self = this;

  close: boolean = true;

  selectedItem: any = null;

  triggerBlind(): void {
    this.close = !this.close;
  }
  selectItem(item: ISelectItem): void {
    !!this.selectedItem && this.selectedItem.text;

    switch (this.settings.type) {
      case "mono":
        this.monoSelect(item);
        break;
      case "multi":
        this.multiSelect(item);
        break;
      default:
        break;
    }
  }

  monoSelect(item: ISelectItem) {
    this.close = true;
    this.selectedItem = item;
  }
  multiSelect(item: ISelectItem) {
    item.selected = !item.selected;
  }
  selectedItems() {
    return this.dataSource.filter(i => i.selected === true);
  }
  onSearch(key: string) {
    if (typeof this.search === "function") {
    } else {
      this.dataSource = this.dataSource.filter(c => c.text.includes(key));
    }
  }

  @Input() selectItemChange: Function;

  @Input() dataSource: ISelectItem[];

  @Input() settings: SelectSettings = {
    type: "multi"
  };
  @Input() search: Function;

  ngOnInit() {}
}
