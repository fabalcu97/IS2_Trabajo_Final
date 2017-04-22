
import { apiRoutes } from "./api";
import { webappsRoutes } from "./webapps";



export function setupRouters(server: any){
    server.use('/api', apiRoutes.router);
    server.use('/', webappsRoutes.router);
}