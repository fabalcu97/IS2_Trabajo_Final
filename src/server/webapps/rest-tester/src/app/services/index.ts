import { Resources } from './Resources';
export { Resources };

export let services = {
  Resources: Resources,
}

export let servicesList = Object.keys(services).map((key) => {
    return services[key];
})
