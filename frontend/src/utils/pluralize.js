export default function pluralize(count, noun) {
  return `${count} ${noun}${count !== 1 ? 's' : ''}`
}
