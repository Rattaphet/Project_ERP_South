document.addEventListener('DOMContentLoaded', function () {
    console.log('หน้าเว็บโหลดเสร็จแล้ว');

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('formResponse').innerText = "ขอบคุณที่ติดต่อเรา! เราจะตอบกลับโดยเร็วที่สุด";
    });
});
