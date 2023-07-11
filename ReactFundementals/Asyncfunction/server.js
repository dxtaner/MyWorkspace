const getUserData = require("./getUserData.js");

// Kullanım 1: async/await
(async () => {
  try {
    const result = await getUserData(1);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

// Kullanım 2: then/catch
getUserData(1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
