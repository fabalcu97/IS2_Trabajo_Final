import { HomeComponent } from './Home';

export let components = {
    HomeComponent: HomeComponent,
}

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
})