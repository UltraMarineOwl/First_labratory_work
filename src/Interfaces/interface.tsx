import {Instance} from "mobx-state-tree";
import {ContentModel} from "../mobx_imp/models/ContentModel";
import LocalStorage from "../mobx_imp/local_store/LocalStorage";

export interface ILocalStorage extends Instance<typeof LocalStorage>{
}
export interface IContentModel extends Instance<typeof ContentModel> {
}