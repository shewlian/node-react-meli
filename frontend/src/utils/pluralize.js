export default function(count, noun) {
  return `${count} ${noun}${count !== 1 ? 's' : ''}`
}
