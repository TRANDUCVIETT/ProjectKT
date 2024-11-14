function showSearch(tab) {
    const publicSearchPanel = document.getElementById('public-search');
    const privateSearchPanel = document.getElementById('private-search');
    const publicTab = document.getElementById('public-tab');
    const privateTab = document.getElementById('private-tab');

    if (tab === 'public') {
        publicSearchPanel.classList.add('active');
        privateSearchPanel.classList.remove('active');
        publicTab.classList.add('active');
        privateTab.classList.remove('active');
    } else {
        privateSearchPanel.classList.add('active');
        publicSearchPanel.classList.remove('active');
        privateTab.classList.add('active');
        publicTab.classList.remove('active');
    }
}

document.getElementById("language-select").addEventListener("change", function () {
    const selectedLang = this.value;
    const elements = document.querySelectorAll("[data-lang-eng]");

    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${selectedLang}`);
    });
});

function changeLanguage(lang) {
    const options = document.querySelectorAll('#tourSelect option');
    options.forEach(option => {
        option.textContent = option.getAttribute(`data-${lang}`);
    });
}

// Chuyển sang tiếng Việt
changeLanguage('vi');

// Chuyển lại sang tiếng Anh
// changeLanguage('en');


function showSearch(type) {
    if (type === 'public') {
        document.getElementById("publicTourSection").classList.add("active");
        document.getElementById("privateTourSection").classList.remove("active");
        document.getElementById("public-tab").classList.add("active");
        document.getElementById("private-tab").classList.remove("active");
    } else if (type === 'private') {
        document.getElementById("privateTourSection").classList.add("active");
        document.getElementById("publicTourSection").classList.remove("active");
        document.getElementById("private-tab").classList.add("active");
        document.getElementById("public-tab").classList.remove("active");
    }
}

