const axios = require("axios");

async function getUserData(userId) {
  try {
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const userData = userResponse.data;
    const userPosts = postResponse.data;

    const result = {
      user: userData,
      posts: userPosts,
    };

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

module.exports = getUserData;
