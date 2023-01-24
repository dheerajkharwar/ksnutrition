let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', function (e) {
    let products = document.getElementsByClassName('product');
    Array.from(products).forEach(element => {
        let productDesc = element.getElementsByTagName('p')[0].innerText;
        if (productDesc.includes(searchBox.value)) {
            element.style.display = "inline-block";
        }
        else {
            element.style.display = "none";
        }
    });
});

// search query ends here

document.getElementById("logo1").setAttribute("href", "index.html");