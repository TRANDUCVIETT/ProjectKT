document.addEventListener("DOMContentLoaded", function() {
    // Lấy dữ liệu từ LocalStorage
    const visitDate = localStorage.getItem("visitDate") || "Select a date";
    const visitTime = localStorage.getItem("visitTime") || "Select a time";
    const adultQuantity = localStorage.getItem("adultQuantity") || 0;
    const childQuantity = localStorage.getItem("childQuantity") || 0;
    const infantQuantity = localStorage.getItem("infantQuantity") || 0;
    const totalPrice = localStorage.getItem("totalPrice") || 0;

    // Hiển thị dữ liệu trên giao diện
    document.getElementById("displayDate").innerText = visitDate;
    document.getElementById("displayTime").innerText = visitTime;
    document.getElementById("adult-price").innerText = `€${(adultQuantity * 34).toFixed(2)}`;
    document.getElementById("child-price").innerText = `€${(childQuantity * 22).toFixed(2)}`;
    document.getElementById("infant-price").innerText = `€${(infantQuantity * 0).toFixed(2)}`;
    document.getElementById("total-price").innerText = `€${parseFloat(totalPrice).toFixed(2)}`;
});
