export default async function getUser() {
  const result = await fetch("// https://dummyjson.com/carts");
  return result.json();
}
