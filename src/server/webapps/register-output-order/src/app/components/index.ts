import { RegisterOutputOrderComponent } from './RegisterOutput';

export let components = {
  RegisterOutputOrderComponent: RegisterOutputOrderComponent,
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
