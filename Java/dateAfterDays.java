import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Solution {
    public String dateAfterDays(String dateStr, int days) {
        // Verilen tarihi LocalDate nesnesine dönüştürme
        LocalDate date = LocalDate.parse(dateStr);

        // Belirtilen gün sayısı kadar gün ekleyerek yeni tarihi bulma
        LocalDate newDate = date.plusDays(days);

        // Yeni tarihi "YYYY-MM-DD" formatına dönüştürme
        return newDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case
        System.out.println(solution.dateAfterDays("2021-12-01", 10));  // Çıktı: "2021-12-11"
    }
}
