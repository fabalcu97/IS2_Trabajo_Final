import { MainComponent } from './Main';

export let components = {
    MainComponent: MainComponent,
}

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
})