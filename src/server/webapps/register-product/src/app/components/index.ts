import { ProductComponent } from './Product';

export let components = {
    ProductComponent: ProductComponent,
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
