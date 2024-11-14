// Lấy tất cả các phần tử <p> trong .text1 và .text2
const titleItems1 = document.querySelectorAll('.text1 p');
const titleItems2 = document.querySelectorAll('.text2 p');

// Thêm sự kiện click cho mỗi phần tử trong .text1
titleItems1.forEach(item => {
    item.addEventListener('click', () => {
        // Xóa class 'active' khỏi tất cả các phần tử trong .text1
        titleItems1.forEach(el => el.classList.remove('active'));
        // Thêm class 'active' vào phần tử hiện tại
        item.classList.add('active');
    });
});

// Thêm sự kiện click cho mỗi phần tử trong .text2
titleItems2.forEach(item => {
    item.addEventListener('click', () => {
        // Xóa class 'active' khỏi tất cả các phần tử trong .text2
        titleItems2.forEach(el => el.classList.remove('active'));
        // Thêm class 'active' vào phần tử hiện tại
        item.classList.add('active');
    });
});

// Hàm xử lý khi thay đổi ngôn ngữ từ dropdown
document.querySelector('select').addEventListener('change', function () {
    const selectedLanguage = this.value;
    if (selectedLanguage === "EN") {
        alert("Ngôn ngữ đã chuyển sang Tiếng Anh");
    } else if (selectedLanguage === "VN") {
        alert("Ngôn ngữ đã chuyển sang Tiếng Việt");
    }
});

// Hàm xử lý khi nhấn nút đăng ký (hình ảnh)
document.querySelector('.signup img').addEventListener('click', function () {
    window.location.href = 'signup.html'; // Chuyển hướng đến trang đăng ký
});


let currentImageIndex = 0; // Biến cho chỉ số ảnh hiện tại  
const images = [
    'images/Rectangle 16 (10).png',
    'images/Rectangle 40.png',
    'images/Rectangle 41.png',
    'images/Rectangle 42.png',
    'images/Rectangle 43.png',  // Thêm ảnh từ gallery
    'images/Rectangle 44.png',
    'images/Rectangle 45.png',
    'images/Rectangle 46.png'
];

// Hàm để thay đổi ảnh và mở modal
function changeImage(imageSrc) {
    currentImageIndex = images.indexOf(imageSrc); // Cập nhật chỉ số ảnh hiện tại  
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = "block";
}

function nextImage(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền  
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Quay lại ảnh đầu tiên nếu đã đến ảnh cuối cùng  
    }
    document.getElementById('modalImage').src = images[currentImageIndex];
}

function previousImage(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền  
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Quay về ảnh cuối cùng nếu đã đến ảnh đầu tiên  
    }
    document.getElementById('modalImage').src = images[currentImageIndex];
}

function closeModal(event) {
    // Ngăn chặn sự kiện lan truyền nếu nhấp vào nút đóng  
    if (event.target.classList.contains('close')) {
        document.getElementById('imageModal').style.display = "none";
    } else if (event.target === document.getElementById('imageModal')) {
        document.getElementById('imageModal').style.display = "none";
    }
}

// Thêm sự kiện click cho các ảnh nhỏ trong tour-details
const smallImages = document.querySelectorAll('.small-image');
smallImages.forEach((img) => {
    img.addEventListener('click', (event) => {
        changeImage(event.target.src); // Gọi hàm changeImage với src của ảnh nhỏ
    });
});

// Thêm sự kiện click cho các ảnh trong gallery
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        changeImage(event.target.src); // Gọi hàm changeImage với src của ảnh trong gallery
    });
});


// calendar.js

let currentMonth = 11; // December (0-indexed)
let currentYear = 2022;

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function renderCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                cell.classList.add("inactive");
                cell.textContent = "";
            } else if (date > daysInMonth) {
                cell.classList.add("inactive");
                cell.textContent = "";
            } else {
                cell.textContent = date;
                cell.onclick = function () {
                    document.querySelectorAll(".calendar td.selected").forEach(el => el.classList.remove("selected"));
                    cell.classList.add("selected");
                };
                date++;
            }

            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function changeMonth(direction) {
    currentMonth += direction;

    if (currentMonth === 12) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth === -1) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar(currentMonth, currentYear);
}

// Initial render
renderCalendar(currentMonth, currentYear);


function toggleDropdown() {
    document.getElementById("userDropdown").classList.toggle("show");
}

// Đóng dropdown nếu nhấn ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.profile-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let currentIndex = 0;

function prevSlide() {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}


// Lấy phần tử select để chọn ngôn ngữ
const languageSelect = document.getElementById('language-select');

// Lắng nghe sự kiện thay đổi ngôn ngữ
languageSelect.addEventListener('change', function () {
    const selectedLang = languageSelect.value; // Lấy ngôn ngữ được chọn

    // Tìm tất cả các phần tử có thuộc tính data-lang-eng và data-lang-vie
    const langElements = document.querySelectorAll('[data-lang-eng]');

    // Thay đổi nội dung của từng phần tử dựa trên ngôn ngữ được chọn
    langElements.forEach(function (element) {
        if (selectedLang === 'eng') {
            element.textContent = element.getAttribute('data-lang-eng');
        } else {
            element.textContent = element.getAttribute('data-lang-vie');
        }
    });
});
function redirectToPurchase() {
    window.location.href = "purchase.html"; // Redirects to purchase.html
}
