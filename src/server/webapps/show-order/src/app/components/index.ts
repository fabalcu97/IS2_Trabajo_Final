import { ShowOrderComponent } from './ShowOrder';
import { SearchOrderComponent } from "./SearchOrder";

export let components = {
    ShowOrderComponent: ShowOrderComponent,
    SearchOrderComponent: SearchOrderComponent
}

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
})