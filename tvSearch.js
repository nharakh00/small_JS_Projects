const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`);
    const img = document.createElement('img');
    img.src = res.data.image.medium;
    document.body.append(img);
})