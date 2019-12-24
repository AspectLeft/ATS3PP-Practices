"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Very important - reflect metadata needs to be at the top of the stack of imports
const apollo_server_1 = require("apollo-server");
const path = __importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const TodoItemResolver_1 = require("./graph/TodoItemResolver");
const Prefill_1 = require("./graph/Prefill");
const Database_1 = require("./database/Database");
class MyApp {
    constructor(mongo = new Database_1.Mongo()) {
        this.mongo = mongo;
    }
    Start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.mongo.Connect();
            const schema = yield type_graphql_1.buildSchema({
                resolvers: [TodoItemResolver_1.TodoItemResolver],
                validate: false,
                emitSchemaFile: path.resolve(__dirname, 'apolloschema.gql')
            });
            // GraphQL uses lazy loading. In order to respond to our clients faster, we're going to pre-populate this
            // list.
            yield Prefill_1.Prefill.Instance.Populate();
            const server = new apollo_server_1.ApolloServer({ schema, playground: true });
            yield server.listen(3000);
        });
    }
}
exports.MyApp = MyApp;
new MyApp().Start();
