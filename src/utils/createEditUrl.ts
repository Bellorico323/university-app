export function createEditUrl(url: string, id: string) {
  const path = url.split('/')
  const newUrl = `/${path[1]}/${id}/${path[2]}`

  return newUrl
}
