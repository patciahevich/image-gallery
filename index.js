const searchButton = document.querySelector('.search')
const searchArea = document.querySelector('.search_area');
const gallery = document.querySelector('.gallery');
const form = document.forms.searchForm;

const errorMessage = document.querySelector('.error')

let request = 'fall'



searchButton.addEventListener('click', function(){})

async function getImages () {
    const url = `https://api.unsplash.com/search/photos?query=${request}&client_id=dDckk5uTk8rQI8sQ2tyDtSXSeayJu-tt8AP7L3P437Q`
    const res = await fetch(url);
    const data = await res.json();
    showImages(data)
}

getImages()

function showImages(data) {
    const arr = data.results;
    if (arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            const img = arr[i].urls.regular;
            const item = document.createElement('div');
            item.classList.add('gallery_item');
            item.style.backgroundImage = `url("${img}")`;
            gallery.append(item)
        }
    } else {
        errorMessage.classList.add('message')
    }
    
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
    request = form.req.value;
    errorMessage.classList.remove('message')
    getImages();
})
