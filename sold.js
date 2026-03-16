function getConditionText(condition) {
  if (condition === "1" || condition === 1) return "Đã bán/ thanh lý";
  if (condition === "2" || condition === 2) return "Hết hàng";
  return condition || "Unknown";
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
  buyer = ''
) {

  const conditionText = getConditionText(condition);

  const modalBody = document.getElementById("carModalContent");

  modalBody.innerHTML = `
    <div style="color:#1e3f3f;font-family:'Space Mono';">
      <strong>Tên xe:</strong> ${name}<br>
      <strong>Tỉ lệ:</strong> ${scale}<br>
      <strong>Tình trạng:</strong> ${conditionText}<br>
      <strong>Sản xuất tại:</strong> ${origin}<br>
      <strong>Thông tin phụ:</strong> ${additionalInfo && additionalInfo.trim() !== '' ? additionalInfo : 'Không có thông tin'}<br>
      <strong>Số lượng:</strong> ${quantity || 1}<br>
      <strong>Giá gốc:</strong> ${(originalPrice && originalPrice.trim() !== '') ? originalPrice + '.VND' : '0.VND'}<br>
      <strong>Bán:</strong> ${(price && price.trim() !== '') ? price + '.VND' : '0.VND'}<br>
      <strong>Người mua:</strong> ${buyer && buyer.trim() !== '' ? buyer : 'none'}
    </div>
  `;

  const myModal = new bootstrap.Modal(document.getElementById('carInfoModal'));
  myModal.show();
}