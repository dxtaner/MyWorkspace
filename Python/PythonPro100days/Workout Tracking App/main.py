import datetime as dt
import json
import os

class Exercise:
    """Tek bir egzersizi temsil eder"""
    def __init__(self, name, duration, calories=0, category="Genel"):
        self.name = name.title()
        self.duration = int(duration)
        self.calories = float(calories)
        self.category = category
        self.date = dt.datetime.now().strftime("%d/%m/%Y")
        self.time = dt.datetime.now().strftime("%H:%M:%S")

    def to_dict(self):
        return {
            "date": self.date,
            "time": self.time,
            "name": self.name,
            "duration": self.duration,
            "calories": self.calories,
            "category": self.category
        }

class WorkoutTracker:
    """Egzersizleri yöneten ve dosyaya kaydeden sınıf"""
    def __init__(self, file_path="workout_log.json"):
        self.file_path = file_path
        self.exercises = self.load_exercises()

    def load_exercises(self):
        """Var olan egzersizleri JSON dosyasından yükler"""
        if os.path.exists(self.file_path):
            try:
                with open(self.file_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except json.JSONDecodeError:
                return []
        return []

    def add_exercise(self, exercise):
        """Yeni egzersizi ekler ve dosyaya kaydeder"""
        self.exercises.append(exercise.to_dict())
        self.save_exercises()
        print(f"✔ {exercise.name} kaydedildi!")

    def save_exercises(self):
        """Egzersizleri JSON dosyasına kaydeder"""
        with open(self.file_path, "w", encoding="utf-8") as f:
            json.dump(self.exercises, f, ensure_ascii=False, indent=4)

    def show_summary(self):
        """Toplam süre, kalori ve kategori bazlı özet gösterir"""
        if not self.exercises:
            print("📄 Henüz kayıtlı egzersiz yok.")
            return

        total_duration = sum(e['duration'] for e in self.exercises)
        total_calories = sum(e['calories'] for e in self.exercises)
        print("\n📊 Egzersiz Özeti")
        print(f"Toplam süre: {total_duration} dk")
        print(f"Toplam kalori: {total_calories} kcal")
        categories = set(e['category'] for e in self.exercises)
        for cat in categories:
            cat_duration = sum(e['duration'] for e in self.exercises if e['category']==cat)
            cat_calories = sum(e['calories'] for e in self.exercises if e['category']==cat)
            print(f" - {cat}: {cat_duration} dk, {cat_calories} kcal")

def main():
    tracker = WorkoutTracker()

    while True:
        print("\n--- Yeni Egzersiz Ekle ---")
        name = input("Egzersiz adı: ")
        duration = input("Süre (dk): ")
        calories = input("Yakılan kalori (opsiyonel, boş bırakabilirsiniz): ") or 0
        category = input("Kategori (örn: Kardiyo, Kuvvet, Esneme): ") or "Genel"

        exercise = Exercise(name, duration, calories, category)
        tracker.add_exercise(exercise)

        cont = input("Başka egzersiz ekle? (e/h): ").lower()
        if cont != "e":
            break

    tracker.show_summary()

if __name__ == "__main__":
    main()
