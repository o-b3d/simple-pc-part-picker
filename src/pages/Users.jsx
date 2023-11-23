export const Users = () => {
  const apiURL = "https://random-data-api.com/api/v2/users?size=10"
  const response = fetch(apiURl)

  async function getUserData(amount) {
    const response = await fetch("https://random-data-api.com/api/v2/users?size=10")
    return response.json()
  }
};

await getUserData(1)

console.log(getUserData)