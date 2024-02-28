let counter = 0

function generate () {
  return (++counter).toString(36)
}

module.exports = generate
