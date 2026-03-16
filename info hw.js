function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`✅ Đã sao chép mã: ${text}`);
  }).catch(err => {
    alert("❌ Lỗi khi sao chép");
    console.error('Không thể sao chép', err);
  });
}

function showCarInfo(
  name,
  scale,
  condition,
  origin,
  additionalInfo = '',
  quantity = 1,
  originalPrice = 'Chưa định giá',
  price = 'Chưa định giá',
  inputCode = ''
) {

  const code = inputCode || "CHƯA CÓ MÃ";

  const modalBody = document.getElementById("carModalContent");

  modalBody.innerHTML = `
    <div style="color:#1e3f3f;font-family:'Space Mono';">
      <strong>Tên xe:</strong> ${name}<br>
      <strong>Tỉ lệ:</strong> ${scale}<br>
      <strong>Tình trạng:</strong> ${condition}<br>
      <strong>Sản xuất tại:</strong> ${origin}<br>
      <strong>Thông tin phụ:</strong> ${additionalInfo || 'Không có thông tin'}<br>
      <strong>Số lượng:</strong> ${quantity || 1}<br>

      <strong>Giá gốc:</strong> ${(originalPrice && originalPrice.trim() !== '') ? originalPrice + '.VND' : '69.000.VND'}<br>
      <strong>Bán:</strong> ${(price && price.trim() !== '') ? price + '.VND' : '0.VND'}<br>

      <strong>Mã số:</strong> <span id="carCodeText">${code}</span>
      <button onclick="copyToClipboard('${code}')" 
        style="margin-left:8px;" 
        class="btn btn-sm btn-outline-dark">
        <i class="bi bi-clipboard-fill"></i> Sao chép
      </button>
    </div>
  `;

  const myModal = new bootstrap.Modal(document.getElementById('carInfoModal'));
  myModal.show();
}