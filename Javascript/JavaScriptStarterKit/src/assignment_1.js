// 1000  asal sayi
function prime(number) {
  if (number == 2) {
    console.log(number, "asal sayidir");
  } else {
    let isPrime = true;
    for (let j = 2; j < number - 1 / 2; j++) {
      if (number % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      console.log("sayi", number, "asal");
    }
  }
}

// prime(2)
for (let i = 2; i < 1000; i++) {
  prime(i);
}

// 1000  mükemmel sayi
function mSayi(number) {
  let toplam = 0;
  for (let j = 1; j < number; j++) {
    if (number % j == 0) {
      toplam += j;
    }
    if (toplam === number) {
      console.log("sayi", number, "mükemmel sayidir");
    }
  }
}

// mSayi(6)
for (let i = 0; i < 1000; i++) {
  mSayi(i);
}

// asalmi değilmi
function isPrimeNotPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    // console.log(num)
    if (num < 0) {
      console.log(num, "negatif sayidir");
    } else if (num == 1) {
      console.log(num, "asal değil");
    } else if (num == 2) {
      console.log(num, "asal sayidir");
    } else {
      let isPrime = true;
      for (let j = 2; j < num - 1; j++) {
        if (num % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime == true) {
        console.log("sayi", num, "asal");
      } else {
        console.log("sayi", num, "asal degil");
      }
    }
  }
}

isPrimeNotPrime(2, 1, 15, 5, -5, 7, 19, 21, 26);
isPrimeNotPrime(-8, 1, 0, 20, 5, 2);

// arkadas sayilar ör: 220,284
function firendsNumber(number1, number2) {
  let toplam1 = 0;
  let toplam2 = 0;
  // ilk sayi için toplama
  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      toplam1 += i;
    }
  }
  // ikinci sayi için toplama
  for (let j = 1; j < number2; j++) {
    if (number2 % j == 0) {
      toplam2 += j;
    }
  }
  // karşılaştırma işlemi
  console.log(
    number1 +
      " bolenlerinin toplami: " +
      toplam1 +
      "--" +
      number2 +
      " bolenlerinin toplami: " +
      toplam2
  );
  if (toplam1 == number2 && toplam2 == number1) {
    console.log(number1, " ve ", number2, "arkadas sayidir");
  } else {
    console.log(number1, " ve ", number2, "arkadas sayi degildir");
  }
}

firendsNumber(17296, 18416);
firendsNumber(25, 55);
firendsNumber(220, 284);
firendsNumber(46, 82);
firendsNumber(1184, 1210);
