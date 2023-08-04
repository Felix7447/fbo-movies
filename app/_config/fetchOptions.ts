const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}