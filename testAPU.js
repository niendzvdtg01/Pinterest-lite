const accessKey = "ZHlnokAphfexz7xjHVKpKrbc_Bh3LqV1ppatzFhAt7E"; // Thay bằng Access Key của bạn
const query = "anime";
let gallery = document.getElementById('gallery');

fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.urls.small;
            img.alt = photo.alt_description || "img"
            gallery.appendChild(img);
        });
    })
    .catch(error => console.error(error));
