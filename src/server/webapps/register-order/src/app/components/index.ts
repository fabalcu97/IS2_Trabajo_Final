import { DemoComponent } from './Demo';

export let components = {
    DemoComponent: DemoComponent,
}

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
})