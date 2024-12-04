// web-scraping from https://www.billboard.com/charts/greatest-hot-100-singles/





songNames = document.querySelectorAll('.chart-results-list h3')

songNames = Array.from(document.querySelectorAll('.chart-results-list h3'))

titles = songNames

songNames = []

for (let title of titles) {
  songNames.push(title.innerText)
}

authors = Array.from(document.getElementsByClassName('c-label'))

authors = titles.map((title) => title.nextElementSibling.innerText)

songs =[]

songs = songNames.map((name, i) => ({id: i+1, name: name, artist: authors[i]}))