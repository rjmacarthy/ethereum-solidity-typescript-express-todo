import { Express } from "express";
import TodoController from "../controllers/todo.server.controller";

export default class IndexRoute {
	constructor(app: Express) {
		app.route("/addtodo/:todoName")
			.post(TodoController.add);

		app.route("/completetodo/:todoIndex")
			.post(TodoController.complete);

		app.route("/listtodos")
			.get(TodoController.list);
	}
}