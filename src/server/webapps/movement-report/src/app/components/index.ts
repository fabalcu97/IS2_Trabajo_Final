import { ReportComponent } from './Report';

export let components = {
    ReportComponent: ReportComponent,
};

export let componentsList = Object.keys(components).map((key) => {
    return components[key];
});
