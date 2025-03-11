function validsubmit(){
    var contactName = document.getElementById('contact-name').value;
    var contactPhone = document.getElementById('contact-phone').value;
    var numTravelers = document.getElementById('num-travelers').value;
    var joinLand = document.getElementById('join-land').checked;  


    if (contactName.trim() === "") {
        alert("กรุณากรอกชื่อผู้ติดต่อ");
        
    }

    if (contactPhone.trim() === "") {
        alert("กรุณากรอกเบอร์ผู้ติดต่อ");
    }
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(contactPhone)) {
        document.getElementById('phone-error').style.display = 'inline'; // แสดงข้อความเตือน
        return false; // หยุดการส่งฟอร์ม
    } else {
        document.getElementById('phone-error').style.display = 'none'; // ซ่อนข้อความเตือนหากเบอร์ถูกต้อง
    }

    if (numTravelers < 1 || numTravelers > 15) {
        alert("จำนวนผู้ร่วมเดินทางต้องเป็นตัวเลขระหว่าง 1 ถึง 15");

    }

    if (joinLand) {
        var confirmJoinLand = confirm("คุณต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่?");
        if (confirmJoinLand) {
            alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง");
        }
    }
    


}