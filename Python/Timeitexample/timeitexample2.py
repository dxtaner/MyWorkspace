import math
import os
import random
import re
import sys
import time

# delay_max işlevi: args içindeki en büyük değeri döndürür


def delay_max(*args, **kwargs):
    time.sleep(kwargs["delay"] / 1000.0)
    return max(args)

# delay_min işlevi: args içindeki en küçük değeri döndürür


def delay_min(*args, **kwargs):
    time.sleep(kwargs["delay"] / 1000.0)
    return min(args)

# delay_sum işlevi: args içindeki tüm değerleri toplayarak döndürür


def delay_sum(*args, **kwargs):
    time.sleep(kwargs["delay"] / 1000.0)
    return sum(args)


# İşlev çağrılarının yürütme sürelerini depolamak için boş bir liste
execution_time = []

# timeit dekoratörü tanımlanır


def timeit(func):
    def wrapper(*args, **kwargs):
        first_time = time.time() * 1000  # İşlevin başladığı zaman
        result = func(*args, **kwargs)   # İşlevi çalıştır
        last_time = time.time() * 1000   # İşlevin bittiği zaman
        # Yürütme süresini listeye ekle
        execution_time.append(int(last_time - first_time))
        return result
    return wrapper


if __name__ == '__main__':
    n = 3  # İşlev çağrısı sayısı

    # İşlev adlarına göre işlevleri eşleştiren bir sözlük
    function_mapper = {
        "delay_max": delay_max,
        "delay_min": delay_min,
        "delay_sum": delay_sum,
    }

    # İşlev adı, parametreler ve gecikme değerlerini içeren liste
    input_data = [
        ("delay_max", [1, 2, 3], 100),
        ("delay_min", [5, 10, 15], 200),
        ("delay_sum", [2, 4, 6], 50),
    ]

    # Her bir işlev çağrısı için
    for i in range(n):
        row = input_data[i]
        func_name = row[0]
        # İşlevi timeit dekoratörü ile süsle
        decorated_func = timeit(function_mapper[func_name])
        args = row[1]  # İşlev parametreleri
        delay = row[2]  # Gecikme değeri
        # İşlevi çağır ve sonucu sakla
        result = decorated_func(*args, delay=delay)
        print(f"{func_name} sonucu: {result}")

    error = 5

    # Ölçülen yürütme sürelerini kontrol et
    for i in range(n):
        approx_execution_time = int(round(execution_time[i] / 50)) * 50
        if abs(execution_time[i] - approx_execution_time) > error:
            print("timeit beklenen gibi çalışmadı.")
            break
        else:
            execution_time[i] = approx_execution_time

    # Yürütme sürelerini yazdır
    print(f"Yürütme süreleri: {execution_time}")
