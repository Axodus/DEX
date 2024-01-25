export default async function getFont(origin: string) {
  const url = origin + '/fonts/Ubuntu-Regular.woff'
  const font = await fetch(url)
  return font.arrayBuffer()
}
