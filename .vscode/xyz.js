function searchGoogle() {
    var query = document.getElementById('search').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
}
