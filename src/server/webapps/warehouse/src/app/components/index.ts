import { RegisterProductComponent } from './RegisterProduct';
import { ListsComponent } from './List';
import { RegisterLocationComponent } from './RegisterLocation';

export let components = {
    RegisterProductComponent: RegisterProductComponent,
    ListsComponent: ListsComponent,
    RegisterLocationComponent: RegisterLocationComponent
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
