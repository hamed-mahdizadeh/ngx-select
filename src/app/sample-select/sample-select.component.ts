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

  key: string;

  filteredDataSource: ISelectItem[] = [];

  triggerBlind(): void {
    this.close = !this.close;
  }
  textBoxClick(event: Event):void{
      event.preventDefault();
      return;
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
    this.close = false;
    if (typeof this.search === "function") {
    } else {
      this.filteredDataSource = this.dataSource.filter(c => c.text.includes(key));
    }
  }

  @Input() selectItemChange: Function;

  private _dataSource: ISelectItem[];

  @Input() set dataSource(value: ISelectItem[]){
      this._dataSource = value;
      this.filteredDataSource = value.copyWithin(0, value.length);
  };
  get dataSource(): ISelectItem[]{
    return this._dataSource;
  }

  @Input() settings: SelectSettings = {
    type: "multi"
  };
  @Input() search: Function;

  ngOnInit() {}
}
