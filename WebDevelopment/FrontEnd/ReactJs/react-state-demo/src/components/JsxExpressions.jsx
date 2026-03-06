function JsxExpressions() {
  const name = "Taner";
  const year = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div>
      <h2>Javascript Expressions in JSX</h2>

      <p>Merhaba, {name}</p>
      <p>Yıl: {year}</p>

      <p>{isLoggedIn ? "Giriş Yapıldı ✅" : "Giriş Yapılmadı ❌"}</p>

      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

export default JsxExpressions;
