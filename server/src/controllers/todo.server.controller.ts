import { Request, Response } from 'express';
import { todoInstance, web3 } from '../services/web3.server.service';
import { flatten, map, times } from 'lodash';

export interface ITodoContractInstance {
    getTodos: () => Promise<any>;
    completeTodo: (id: number, from: any) => Promise<any>;
    addTodo: (name: string, from: any) => Promise<any>;
}

export default class IndexController {
    static from = { from: web3.eth.accounts[0] };

    public static add(req: Request, res: Response, next: Function): void {
        console.log(todoInstance);
        todoInstance().then((contract: any) => {
            contract.addTodo(req.params.todoName, IndexController.from).then(() => {
                res.json({
                    success: true,
                    todoName: req.params.todoName
                });
            });
        });
    }

    public static list(req: Request, res: Response, next: Function) {
        console.log(todoInstance);
        todoInstance().then((contract: ITodoContractInstance) => {
            contract.getTodos().then((response) => {
                var len = 0;
                var list = [];
                var arr = flatten(map(response, (todos: any[], i) => {
                    len = todos.length;
                    return todos;
                }));
                times(len, (i) => {
                    list.push({
                        id: arr[i].toString(),
                        name: web3.toUtf8(arr[i + len].toString()),
                        completed: arr[i + len * 2].toString()
                    });
                });
                res.json(list);
            });
        });
    }

    public static complete(req: Request, res: Response, next: Function): void {
        todoInstance().then((contract: ITodoContractInstance) => {
            contract.completeTodo(req.params.todoIndex, IndexController.from).then(() => {
                res.json({
                    success: true
                });
            });
        });
    }
}