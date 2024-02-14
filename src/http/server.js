"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const create_poll_1 = require("./routes/create-poll");
const app = (0, fastify_1.default)();
app.register(create_poll_1.createPoll);
app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running');
});
