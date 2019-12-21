import {Server} from "./server";

export class Backend extends Server{

}
new Backend(3000).WithCorsSupport().Start();
