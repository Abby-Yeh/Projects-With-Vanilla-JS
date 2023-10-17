const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

//   console.log(data)
  showData(data)
}

// Show songs and artists in DOM
function showData(data){
    let output = '';

    data.data.forEach(element => {
        output +=`
        <li>
            <span><strong>${element.artist.name}</strong> - ${element.title}</span>
            <button class="btn" data-artist = "${element.artist.name} data-songtitle = "${element.title}">Get Lyrics</button>
        </li>
        `;
    });

    result.innerHTML = `
        <ul class = "songs">
        ${output}
        </ul>
    
    `

}

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  const searchItem = search.value.trim();

  if (!searchItem) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchItem);
  }
});

