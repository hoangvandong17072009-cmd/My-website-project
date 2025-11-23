// 1. Tìm tất cả các nút "Xem Chi Tiết"
const viewDetailButtons = document.querySelectorAll('.view-detail');

// 2. Lặp qua từng nút và gắn sự kiện click cho chúng
// script.js (Thay thế đoạn code cũ)

// 1. Tìm tất cả các nút "Thêm vào Giỏ" (vẫn giữ class cũ)
const addToCartButtons = document.querySelectorAll('.view-detail'); 

// 2. Lặp qua từng nút và gắn sự kiện click
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = button.closest('.product-card'); 
        const productName = productCard.querySelector('h2').innerText;
        
        // Hiển thị thông báo (chúng ta có thể loại bỏ sau này)
        alert(Đã thêm ${productName} vào giỏ hàng!);

        // *LOGIC MỚI: Đổi trạng thái của nút*
        button.innerText = 'Đã thêm (✓)'; // Đổi chữ
        button.style.backgroundColor = '#27ae60'; // Đổi màu nền (Xanh lá)
        button.style.pointerEvents = 'none'; // Vô hiệu hóa nút để không bấm được nữa
    });
});