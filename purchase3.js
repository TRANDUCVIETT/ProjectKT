// Giá của từng loại vé
const ticketPrices = {
    adult: 34.00,
    child: 22.00,
    infant: 0.00
};

// Hàm thay đổi số lượng và cập nhật tổng quan vé
function changeQuantity(ticketType, change) {
    const quantityInput = document.getElementById(`${ticketType}Quantity`);
    let currentQuantity = parseInt(quantityInput.value);
    
    // Đảm bảo số lượng không giảm xuống dưới 0
    currentQuantity = Math.max(0, currentQuantity + change);
    quantityInput.value = currentQuantity;

    updateOverview();
}

// Hàm cập nhật phần "Your Tickets Overview"
function updateOverview() {
    const adultQuantity = parseInt(document.getElementById("adultQuantity").value);
    const childQuantity = parseInt(document.getElementById("childQuantity").value);
    const infantQuantity = parseInt(document.getElementById("infantQuantity").value);

    // Tính giá cho từng loại vé
    const adultPrice = adultQuantity * ticketPrices.adult;
    const childPrice = childQuantity * ticketPrices.child;
    const infantPrice = infantQuantity * ticketPrices.infant;

    // Cập nhật hiển thị giá
    document.getElementById("adult-price").innerText = `€${adultPrice.toFixed(2)}`;
    document.getElementById("child-price").innerText = `€${childPrice.toFixed(2)}`;
    document.getElementById("infant-price").innerText = `€${infantPrice.toFixed(2)}`;

    // Tính tổng giá
    const totalPrice = adultPrice + childPrice + infantPrice;
    document.getElementById("total-price").innerText = `€${totalPrice.toFixed(2)}`;

    // Cập nhật ngày và giờ (nếu đã chọn)
    const selectedDate = document.getElementById("visitDate").value || "Select a date";
    const selectedTime = document.getElementById("visitTime").value || "Select a time";
    document.getElementById("selected-date").innerText = selectedDate;
    document.getElementById("selected-time").innerText = selectedTime;
}


function populateTimeOptions() {
    const visitTimeSelect = document.getElementById("visitTime");

    // Xóa tất cả các tùy chọn hiện có (nếu có)
    visitTimeSelect.innerHTML = "";

    // Duyệt qua 24 giờ với bước nhảy là 30 phút
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            // Định dạng giờ và phút để có dạng HH:MM
            const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            
            // Tạo một phần tử option mới
            const option = document.createElement("option");
            option.value = time;
            option.textContent = time;

            // Thêm option vào dropdown
            visitTimeSelect.appendChild(option);
        }
    }
}

// Gọi hàm khi trang được tải
window.onload = function() {
    populateTimeOptions();
    updateOverview(); // Cập nhật hiển thị mặc định nếu cần
};

