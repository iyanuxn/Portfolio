 const pages = [
    {
        id: 1,
        link: 'https://joemarv.github.io/Projects/',
        linktitle: 'Colab work on Fylo Landing Page',
        repo: 'https://www.github.com/JoeMarv/Projects/',
        html: '42.5%',
        css: '57.5%',
        js: '0%',
    },
    {
        id: 2,
        link: 'https://joemarv.github.io/Landing-Page/',
        linktitle: 'Colab work on Huddle Landing Page',
        repo: 'https://www.github.com/JoeMarv/Landing-Page/',
        html: '28.8%',
        css: '71.2%',
        js: '0%',
    },
    {
        id: 3,
        link: 'https://joemarv.github.io/chat-app/',
        linktitle: 'Colab work on Chat App',
        repo: 'https://www.github.com/JoeMarv/chat-app/',
        html: '37.5%',
        css: '62.5%',
        js: '0%',
    }, 
    {
        id: 4,
        link: 'https://iyanuxn.github.io/NFT-preview-card/',
        linktitle: 'NFT Preview Card',
        repo: 'https://github.com/iyanuxn/NFT-preview-card/',
        html: '44.7%',
        css: '55.3%',
        js: '0%',
    },
    {
        id: 5,
        link: 'https://iyanuxn.github.io/base-apparel-coming-soon-form',
        linktitle: 'Base Apparel Coming Soon',
        repo: 'https://github.com/iyanuxn/base-apparel-coming-soon-form',
        html: '29.1%',
        css: '59.1%',
        js: '11.8%',
    }, 
    {
        id: 6,
        link: 'https://iyanuxn.github.io/Rating/',
        linktitle: 'Interactive Rating Component',
        repo: 'https://www.github.com/iyanuxn/Rating/',
        html: '33.3%',
        css: '48.0%',
        js: '18.7%',
    },
    {
        id: 7,
        link: 'https://iyanuxn.github.io/charts/',
        linktitle: 'Expenses Chart Component',
        repo: 'https://www.github.com/iyanuxn/charts/',
        html: '21.6%',
        css: '52.3%',
        js: '26.1%',
    },
    {
        id: 8,
        link: 'https://joemarv.github.io/faq/',
        linktitle: 'Colab work on FAQ Accordion Card',
        repo: 'https://www.github.com/JoeMarv/faq/',
        html: '47.5%',
        css: '44.2%',
        js: '8.3%',
    },
    {
        id: 9,
        link: 'https://iyanuxn.github.io/article/',
        linktitle: 'Article Preview Component',
        repo: 'https://www.github.com/iyanuxn/article/',
        html: '27.4%',
        css: '67.7%',
        js: '4.9%',
    },
    {
        id: 10,
        link: 'https://joemarv.github.io/intro-component/',
        linktitle: 'Colab work Intro Component',
        repo: 'https://www.github.com/JoeMarv/intro-component/',
        html: '43.5%',
        css: '43.5%',
        js: '13.0%',
    }
 ];

const article = document.querySelector('.project')
const topBtn = document.querySelector ('.top-btn')


window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(pages)
})

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show')
    } 
    else {
        topBtn.classList.remove('show')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="project">
                    <div class="project-link">
                        <a href="${item.link}"><span class="link-title">${item.linktitle}</span></a>
                    </div>

                    <div class="repo-link">
                        <a href="${item.repo}">Repository Link</a>
                    </div>

                    <div class="languages">
                        <div class="html">HTML: <span id="html">${item.html}</span></div>
                        <div class="css">CSS: <span id="css">${item.css}</span></div>
                        <div class="js">JavaScript: <span id="js">${item.js}</span></div>
                    </div>
                </article>`
    })

    displayMenu = displayMenu.join('')

    article.innerHTML = displayMenu
}
