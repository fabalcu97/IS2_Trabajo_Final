import { RegisterProductComponent } from './RegisterProduct';
import { ListsComponent } from './List';
import { RegisterLocationComponent } from './RegisterLocation';
import { CodeGeneratorComponent } from './CodeGenerator';

export let components = {
    RegisterProductComponent: RegisterProductComponent,
    ListsComponent: ListsComponent,
    RegisterLocationComponent: RegisterLocationComponent,
    CodeGeneratorComponent: CodeGeneratorComponent
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
