const monthYearDisplay = document.getElementById("month-year");
const datesContainer = document.getElementById("dates");
let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Thiết lập tháng và năm
    monthYearDisplay.textContent = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });
    
    // Xóa các ngày trước đó
    datesContainer.innerHTML = "";
    
    // Tìm ngày đầu và số ngày trong tháng
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Thêm các ô trống cho các ngày trước ngày đầu tiên của tháng
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement("span");
        emptyDiv.classList.add("empty");
        datesContainer.appendChild(emptyDiv);
    }
    
    // Thêm các ngày trong tháng
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("span");
        dayDiv.textContent = day;
        
        // Đánh dấu ngày hiện tại
        if (
            day === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear()
        ) {
            dayDiv.classList.add("selected");
        }
        
        // Sự kiện chọn ngày
        dayDiv.addEventListener("click", () => {
            // Xóa đánh dấu ngày cũ
            const previousSelected = datesContainer.querySelector(".selected");
            if (previousSelected) previousSelected.classList.remove("selected");
            
            // Đánh dấu ngày mới
            dayDiv.classList.add("selected");
        });
        
        datesContainer.appendChild(dayDiv);
    }
}

// Chuyển tháng trước
function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

// Chuyển tháng sau
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

// Khởi tạo lịch
renderCalendar(currentDate);


