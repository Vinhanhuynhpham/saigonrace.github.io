function showCarInfo(bio = '', facebookName = '', email = '', instagramName = '', zaloNumber = '', hobby = '', role = '') {
    const modalBody = document.getElementById("carModalContent");
    
    modalBody.innerHTML = `
      <div style="color: #1e3f3f; font-family:'Space Mono'; font-size: 14px;">
        
        <div style="border-left: 3px solid #1e3f3f; padding-left: 10px; margin-bottom: 15px;">
            <strong style="text-transform: uppercase; letter-spacing: 1px;">Liên hệ</strong>
        </div>

        <div class="row mb-4">
            <div class="col-6">
                <strong><i class="bi bi-facebook"></i> Facebook:</strong><br>
                <a href="https://www.facebook.com/vinhan.huynhpham.1" target="_blank" style="color: #1e3f3f; text-decoration: none;">
                    ${facebookName || 'Huynh Pham Vinh An'}
                </a>
            </div>
            <div class="col-6">
                <strong><i class="bi bi-envelope-fill"></i> Email:</strong><br>
                <span style="font-size: 12px;">${email || 'vinhanhuynhpham@gmail.com'}</span>
            </div>
            <div class="col-6 mt-2">
                <strong><i class="bi bi-instagram"></i> Instagram:</strong><br>
                <a href="https://www.instagram.com/vinh_an_huynh_pham/" target="_blank" style="color: #1e3f3f; text-decoration: none;">
                    ${instagramName || 'vinh_an_huynh_pham'}
                </a>
            </div>
            <div class="col-6 mt-2">
                <strong><i class="bi bi-telephone-fill"></i> Zalo:</strong><br>
                <a href="https://zalo.me/${zaloNumber || '0944835045'}" target="_blank" style="color: #1e3f3f; text-decoration: none;">
                    ${zaloNumber || '0944835045'}
                </a>
            </div>
        </div>

        <div style="border-left: 3px solid #1e3f3f; padding-left: 10px; margin-bottom: 15px;">
            <strong style="text-transform: uppercase; letter-spacing: 1px;">Thông tin phụ</strong>
        </div>

        <div style="line-height: 2;">
            <strong>Bio:</strong> ${hobby || 'bị xe chơi'}<br>
            <div class="d-flex align-items: center; gap: 10px; margin-top: 5px;">
                <span style="
                    background-color: #1e3f3f; 
                    color: #fff; 
                    padding: 2px 12px; 
                    border-radius: 20px; 
                    font-size: 11px; 
                    font-weight: 700;
                    text-transform: uppercase;
                    display: inline-block;
                    letter-spacing: 1px;
                ">
                    ${role || 'Admin'}
                </span>
                
            </div>
        </div>
      </div>
    `;

    const myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('carInfoModal'));
    myModal.show();
}