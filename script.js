const API_URL = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=mfYrFvmKpBQWElETdnc4qV52Nmw3GuBC'


const main = document.querySelector('.main-container')

getHeadlines(API_URL);

async function getHeadlines(url) {
    const res = await fetch(url);
    const data = await res.json();

    showHeadlines(data.results);
}

function showHeadlines(headlines) {
    // main.innerHTML = "";

    headlines.forEach((headline) => {
        const { title, url, abstract} = headline;

        const headlineEl = document.createElement('div');
        headlineEl.classList.add('headline');

        headlineEl.innerHTML = `
            <ul>
                <li>
                    <div class="item-container">
                        <a href="${url}" target="_blank"><p class="title" >${title}</p></a>
                        <p class="abstract">${abstract}</p>
                    </div>
                </li>
            </ul>
        `
        main.appendChild(headlineEl);
    })

}

