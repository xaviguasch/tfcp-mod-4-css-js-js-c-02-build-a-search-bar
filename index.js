let searchInput = document.getElementById('searchInput')
const names = document.querySelectorAll('.name')
const results = document.getElementById('results')

const arr = []
let searchQuery = ''

for (const name of names) {
  arr.push(name.innerText)
}

searchInput.addEventListener('keyup', (e) => {
  searchQuery = e.target.value.toLowerCase()
})

searchInput.addEventListener('click', (e) => {
  arr.forEach((name) => {
    if (name.toLowerCase() === searchQuery) {
      console.log('a match')
      const match = (document.createElement('h2').innerText = name)
      results.append(match)
    }
  })
})
