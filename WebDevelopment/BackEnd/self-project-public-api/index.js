const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // form data
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submit
app.post("/cocktail", async (req, res) => {
  const cocktailName = req.body.cocktail;

  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`,
    );

    if (!response.data.drinks) {
      return res.render("error", {
        message: "No cocktail found 😢",
      });
    }

    const drink = response.data.drinks[0];
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredients.push(
          `${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`] || ""}`,
        );
      }
    }

    res.render("cocktail", {
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      instructions: drink.strInstructions,
      ingredients,
    });
  } catch (error) {
    console.log(error);
    res.render("error", {
      message: "Something went wrong with the API 🚨",
    });
  }
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("error", {
    message: "Page not found (404)",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
