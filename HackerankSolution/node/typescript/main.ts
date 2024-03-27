export default function solution(commands: string[]): string {
  class Shape {
    constructor(public id: string) {}

    getArea(): string {
      return "error";
    }
  }

  class Rectangle extends Shape {
    constructor(
      public id: string,
      public width: number,
      public height: number
    ) {
      super(id);
    }

    getArea(): string {
      return Math.floor(this.width * this.height).toString();
    }
  }

  class Triangle extends Shape {
    constructor(public id: string, public base: number, public height: number) {
      super(id);
    }

    getArea(): string {
      return Math.floor((this.base * this.height) / 2).toString();
    }
  }

  class GeometryChatbot {
    shapes: { [id: string]: Shape } = {};

    executeCommand(command: string): string {
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

    addShape(params: string[]): string {
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
        default:
          return "Unsupported shape type";
      }

      return "";
    }

    calculateArea(id: string): string {
      const shape = this.shapes[id];

      if (shape) {
        return shape.getArea();
      } else {
        return "error";
      }
    }

    processCommands(commands: string[]): string {
      const results: string[] = [];

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
