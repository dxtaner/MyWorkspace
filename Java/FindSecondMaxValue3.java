import java.util.Arrays;

public class FindSecondMaxValue3 {
    public static void main(String[] args) {
        int[] array = { 13, 139, 25, 56, 88, 101, 0, -11, 45, 7, 23, 56, 89 };

        // Diziyi küçükten büyüğe sıralayın
        Arrays.sort(array);

        // İkinci en büyük değeri dizi uzunluğuna bakarak belirleyin
        int secondMax = array[array.length - 2];

        System.out.println("İkinci en büyük değer: " + secondMax);
    }
}
