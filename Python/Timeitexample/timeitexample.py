import math
import os
import random
import re
import sys
import time

# delay_max işlevi: args içindeki en büyük değeri döndürür


def delay_max(*args, **kwargs):
    # Belirtilen gecikme süresi kadar bekler
    time.sleep(kwargs["delay"] / 1000.0)
    return max(args)

# delay_min işlevi: args içindeki en küçük değeri döndürür


def delay_min(*args, **kwargs):
    # Belirtilen gecikme süresi kadar bekler
    time.sleep(kwargs["delay"] / 1000.0)
    return min(args)

# delay_sum işlevi: args içindeki tüm değerleri toplayarak döndürür


def delay_sum(*args, **kwargs):
    # Belirtilen gecikme süresi kadar bekler
    time.sleep(kwargs["delay"] / 1000.0)
    return sum(args)


# İşlev çağrılarının yürütme sürelerini depolamak için boş bir liste
execution_time = []

# timeit dekoratörü tanımlanır


def timeit(func):
    def wrapper(*args, **kwargs):
        first_time = time.time() * 1000  # İşlevin başladığı zamanı ölçer
        result = func(*args, **kwargs)   # İşlevi çağırır
        last_time = time.time() * 1000   # İşlevin bittiği zamanı ölçer
        # Yürütme süresini listeye ekler
        execution_time.append(int(last_time - first_time))
        return result
    return wrapper


if __name__ == '__main__':
    n = 2  # İşlev çağrısı sayısı

    # İşlev adlarına göre işlevleri eşleştiren bir sözlük
    function_mapper = {
        "delay_max": delay_max,
        "delay_min": delay_min,
        "delay_sum": delay_sum,
    }

    # İşlev adı, parametreler ve gecikme değerlerini içeren liste
    input_data = [
        # delay_max işlevi için örnek girdi
        ("delay_max", [10, 20, 30, 40, 50], 300),
        # delay_sum işlevi için örnek girdi
        ("delay_sum", [8, 12, 17, 25, 31], 150),
    ]

    # Her bir işlev çağrısı için
    for i in range(n):
        row = input_data[i]
        func_name = row[0]
        # İşlevi timeit dekoratörü ile süsler
        decorated_func = timeit(function_mapper[func_name])
        args = row[1]  # İşlev parametreleri
        delay = row[2]  # Gecikme değeri
        # İşlevi çağırır ve sonucu saklar
        result = decorated_func(*args, delay=delay)
        print(f"{func_name} işlevinin sonucu: {result}")

    error = 5

    # Ölçülen yürütme sürelerini kontrol eder
    for i in range(n):
        approx_execution_time = int(round(execution_time[i] / 50)) * 50
        if abs(execution_time[i] - approx_execution_time) > error:
            print("timeit işlevi beklenen gibi çalışmadı.")
            break
        else:
            execution_time[i] = approx_execution_time

    # Yürütme sürelerini yazdırır
    print(f"Ölçülen yürütme süreleri: {execution_time}")


# Kodun genel amacı, belirli işlevlerin yürütme sürelerini ölçmek ve bu sürelerin beklendiği
# gibi davranıp davranmadığını kontrol etmektir. Bu tür bir kod, işlevlerin performansını ölçmek, hızı
# analiz etmek ve optimize etmek için kullanılabilir. Ayrıca, ölçülen sürelerin istenilen tolerans aralığında
# olup olmadığını kontrol ederek kodun düzgün çalıştığından emin olunabilir.
