class Github {
  constructor() {
    this.baseUrl = "https://api.github.com/users/";
  }

  async getGithubData(username) {
    try {
      const userResponse = await fetch(`${this.baseUrl}${username}`);
      const repoResponse = await fetch(`${this.baseUrl}${username}/repos`);

      if (!userResponse.ok || !repoResponse.ok) {
        throw new Error("GitHub verileri alınamadı.");
      }

      const userData = await userResponse.json();
      const repoData = await repoResponse.json();

      return {
        user: userData,
        repo: repoData,
      };
    } catch (error) {
      throw new Error(
        `GitHub verileri alınırken bir hata oluştu: ${error.message}`
      );
    }
  }
}
