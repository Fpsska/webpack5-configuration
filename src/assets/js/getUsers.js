export const getUsers = async () => {
  try {
    const id = 1
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`

    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error('some erorr with response')
    }

    const data = await response.json()
    return data
  } catch (err) {
    console.error(err.message || err)
  }
}
