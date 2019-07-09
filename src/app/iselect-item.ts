export interface ISelectItem {
    text: string;
    id: number;
    value: any;
    callback?: Function | null;
    selected?: boolean;
}
