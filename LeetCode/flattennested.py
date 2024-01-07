def flat(arr, depth=1):
    """
    Verilen bir dizi içerisindeki elemanları belirtilen derinlikte tek bir dizi haline getirir.

    Args:
    - arr (list): Düzleştirilecek dizi.
    - depth (int, optional): Düzleştirme derinliği. Varsayılan değer 1'dir.

    Returns:
    - list: Düzleştirilmiş dizi.
    """

    result = []
    for item in arr:
        if isinstance(item, list) and depth > 0:
            result.extend(flat(item, depth - 1))
        else:
            result.append(item)
    return result


# Örnekler:
liste = [1, 2, [3, 4], [5, [6, 7]], 8]
print(flat(liste))  # Çıktı: [1, 2, 3, 4, 5, [6, 7], 8]

# Derinlik parametresi kullanarak daha fazla düzleştirme yapalım
print(flat(liste, depth=2))  # Çıktı: [1, 2, 3, 4, 5, 6, 7, 8]
