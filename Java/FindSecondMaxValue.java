public class FindSecondMaxValue {
    public static void main(String[] args) {
        int[] array = { 11, 15, 25, 36, -1 };
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;

        for (int num : array) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax) {
                secondMax = num;
            }
        }

        System.out.println("İkinci en büyük değer: " + secondMax);
    }
}
