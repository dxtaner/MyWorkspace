function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Soru(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "javascipt", d: "sql" },
    "d"
  ),
  new Soru(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "node.js", b: "typescript", c: "angular", d: "react" },
    "a"
  ),
  new Soru(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];

sorular.push(
  new Soru(
    "5- Hangisi CSS'in bir ön işlemcisidir?",
    { a: "Sass", b: "Java", c: "Python", d: "C++" },
    "a"
  ),
  new Soru(
    "6- Hangisi bir backend framework'üdür?",
    { a: "React", b: "Vue.js", c: "Django", d: "Angular" },
    "c"
  ),
  new Soru(
    "7- Hangisi bir veritabanı dilidir?",
    { a: "HTML", b: "CSS", c: "SQL", d: "JavaScript" },
    "c"
  )
);
