import { LoginComponent } from './Login';
import { RegisterComponent } from './Register';

export let components = {
  LoginComponent: LoginComponent,
  RegisterComponent: RegisterComponent
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
