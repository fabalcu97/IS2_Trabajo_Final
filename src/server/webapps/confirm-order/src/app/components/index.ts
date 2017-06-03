import { ConfirmOrderComponent } from './ConfirmOrder';
import {SearchOrderComponent} from "./SearchOrder/index";

export let components = {
  ConfirmOrderComponent: ConfirmOrderComponent,
  SearchOrderComponent: SearchOrderComponent
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
