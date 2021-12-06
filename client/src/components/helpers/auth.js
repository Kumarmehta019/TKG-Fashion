export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('token') // get token from local storage
}

export const getPayload = () => {
  const token = getTokenFromLocalStorage() // store the response of get token function in variable
  if (!token) return // if no token exists just return here
  const splitToken = token.split('.') // split the token into an array of 3 strings
  if (splitToken.length < 3) return // if the array of strings has a length less than 3 return here
  const payloadString = splitToken[1] // get just the payload string from the array
  return JSON.parse(atob(payloadString)) // decode the payload string, using json.parse to convert from JSON to JS object
}