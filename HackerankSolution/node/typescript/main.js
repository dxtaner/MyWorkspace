"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(commands) {
    class Shape {
        constructor(id) {
            this.id = id;
        }
        getArea() {
            return "error";
        }
    }
    class Rectangle extends Shape {
        constructor(id, width, height) {
            super(id);
            this.id = id;
            this.width = width;
            this.height = height;
        }
        getArea() {
            return Math.floor(this.width * this.height).toString();
        }
    }
    class Triangle extends Shape {
        constructor(id, base, height) {
            super(id);
            this.id = id;
            this.base = base;
            this.height = height;
        }
        getArea() {
            return Math.floor((this.base * this.height) / 2).toString();
        }
    }
    class GeometryChatbot {
        constructor() {
            this.shapes = {};
        }
        executeCommand(command) {
            const parts = command.split(" ");
            const action = parts[0];
            switch (action) {
                case "add":
                    return this.addShape(parts.slice(1));
                case "area":
                    return this.calculateArea(parts[1]);
                default:
                    return "Invalid command";
            }
        }
        addShape(params) {
            const type = params[0];
            const id = params[1];
            if (this.shapes[id]) {
                return "error";
            }
            switch (type) {
                case "rectangle":
                    this.shapes[id] = new Rectangle(id, +params[2], +params[3]);
                    break;
                case "triangle":
                    this.shapes[id] = new Triangle(id, +params[2], +params[3]);
                    break;
                // Add more shape types here in the future
                default:
                    return "Unsupported shape type";
            }
            return "";
        }
        calculateArea(id) {
            const shape = this.shapes[id];
            if (shape) {
                return shape.getArea();
            }
            else {
                return "error";
            }
        }
        processCommands(commands) {
            const results = [];
            for (const command of commands) {
                const result = this.executeCommand(command);
                if (result !== "") {
                    results.push(result);
                }
            }
            return results.join(",");
        }
    }
    const chatbot = new GeometryChatbot();
    return chatbot.processCommands(commands);
}
exports.default = solution;
