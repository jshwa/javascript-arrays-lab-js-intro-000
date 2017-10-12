const app = "I don't do much."

var Kitten = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  Kitten.push(name)
  return Kitten
}

function destructivelyPrependKitten(name) {
  Kitten.unshift(name)
  return Kitten
}

function destructivelyRemoveLastKitten() {
  Kitten.pop()
  return Kitten
}

function destructivelyRemoveFirstKitten() {
  Kitten.shift()
  return Kitten
}

function appendKitten(name) {
  return [...Kittens, name]
}

function prependKitten(name) {
  return [name, ...Kittens]
}

function removeLastKitten() {
  return Kitten.slice(0, Kitten.legnth - 1)
}

function removeFirstKitten() {
  return Kitten.slice(1)
}