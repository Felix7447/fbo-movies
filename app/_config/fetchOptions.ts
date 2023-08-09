const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}

export const addFavOptions = (body: {media_type: string, media_id: number}) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify({...body, favorite: true})
  }

  return options
}

export const removeFavOptions = (body: {media_type: string, media_id: number}) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify({...body, favorite: false})
  }

  return options
}