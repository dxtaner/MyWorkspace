import java.util.HashMap;

class Shape {
    String type;
    int param1;
    int param2;

    Shape(String type, int param1, int param2) {
        this.type = type;
        this.param1 = param1;
        this.param2 = param2;
    }

    int calculateArea() {
        switch (type) {
            case "rectangle":
                return param1 * param2;
            case "triangle":
                return (param1 * param2) / 2;
            // Add more shape types and their area calculations as needed
            default:
                return -1; // Invalid shape type
        }
    }
}

public class TestTaker {
    public static String output(String[] commands) {
        HashMap<String, Shape> shapeMap = new HashMap<>();
        StringBuilder result = new StringBuilder();

        for (String command : commands) {
            String[] tokens = command.split(" ");

            if (tokens[0].equals("add")) {
                String shapeType = tokens[1];
                String id = tokens[2];
                int param1 = Integer.parseInt(tokens[3]);
                int param2 = Integer.parseInt(tokens[4]);

                shapeMap.put(id, new Shape(shapeType, param1, param2));
            } else if (tokens[0].equals("area")) {
                String id = tokens[1];
                Shape shape = shapeMap.get(id);

                if (shape != null) {
                    int area = shape.calculateArea();
                    result.append(area).append(",");
                } else {
                    result.append("error,");
                }
            }
        }

        if (result.length() > 0) {
            result.deleteCharAt(result.length() - 1);
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String[] commands = {"add triangle t1 5 8", "area t1", "add rectangle r1 4 6", "area r1"};

        String output = TestTaker.output(commands);
        System.out.println(output);
    }
}
