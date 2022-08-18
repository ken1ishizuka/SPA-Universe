export function activePage() {
    let currentPage = 0;
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[i].href === document.URL) {
            currentPage = i;
        }
    }
    document.links[currentPage].className = 'menu-active-page';
}