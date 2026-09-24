# IP归属地查询工具

一个简洁易用的纯前端IP地址归属地查询应用，采用Facebook设计风格。

## 功能特点

- **快速查询**：输入IP地址即可查询详细归属地信息
- **自动定位**：页面加载时自动查询并显示当前IP地址信息
- **详细信息**：显示国家、地区、城市、运营商、经纬度、时区等
- **地图定位**：支持在Google Maps和OpenStreetMap上查看地理位置
- **IP类型识别**：自动识别公网IP和内网IP
- **响应式设计**：完美适配PC端和移动端
- **Facebook风格**：简洁专业的现代化界面设计
- **免费无限制**：使用免费API，无需注册和申请密钥

## 使用说明

### 第一步：启动应用

1. **方式一：直接打开**
   - 双击 `index.html` 文件即可在浏览器中打开
   - 适合本地快速使用

2. **方式二：本地服务器**（推荐）
   ```bash
   # 如果安装了Python 3
   python -m http.server 8000

   # 如果安装了Node.js
   npx http-server
   ```
   然后在浏览器访问 `http://localhost:8000`

### 第二步：查询IP地址

1. **自动查询当前IP**：
   - 打开页面后会自动查询您当前的IP地址
   - 显示您的公网IP及其归属地信息

2. **手动输入IP查询**：
   - 在输入框输入要查询的IP地址（如：8.8.8.8）
   - 点击"查询"按钮或按回车键
   - 支持任意IPv4格式的IP地址

3. **快速查询我的IP**：
   - 点击"查询我的IP"按钮
   - 一键快速查询当前公网IP信息

## 功能说明

### 显示的信息

查询结果包含以下详细信息：

- **IP地址**：显示查询的IP地址
- **IP类型**：标识为公网IP或内网IP
- **国家/地区**：IP所在的国家或地区
- **省份/州**：IP所在的省份或州
- **城市**：IP所在的城市
- **邮编**：所在地区的邮政编码
- **运营商**：Internet服务提供商（ISP）
- **组织**：IP所属的组织或AS号
- **经纬度**：地理坐标位置
- **时区**：所在地的时区信息
- **地图链接**：Google Maps和OpenStreetMap查看链接

### IP类型识别

应用会自动识别IP类型：

- **公网IP**：可以在互联网上访问的IP地址
- **内网IP**：私有网络IP地址，包括：
  - 10.0.0.0 - 10.255.255.255
  - 172.16.0.0 - 172.31.255.255
  - 192.168.0.0 - 192.168.255.255
  - 127.0.0.0 - 127.255.255.255（回环地址）

## 技术栈

- **HTML5**：页面结构
- **CSS3**：Facebook风格界面设计（响应式布局、动画效果）
- **JavaScript (ES6+)**：业务逻辑（Async/Await、Fetch API）
- **IP-API.com**：免费IP地理位置查询服务

## 文件结构

```
ip_location/
├── index.html      # 主HTML文件
├── css/
│   └── style.css   # 样式文件（Facebook风格）
├── js/
│   └── app.js      # JavaScript逻辑
└── README.md       # 使用说明
```

## API说明

本项目使用 [ip-api.com](http://ip-api.com) 提供的免费API服务。

### API特点

- **完全免费**：无需注册和申请密钥
- **无使用限制**：非商业用途下免费使用
- **快速响应**：查询速度快，数据准确
- **中文支持**：支持返回中文地理位置信息

### API限制

免费版本限制：
- 每分钟最多45次请求
- 仅支持HTTP协议（生产环境建议升级到Pro版使用HTTPS）
- 完全满足个人和小型项目使用

## 常见问题

### 1. 提示"查询失败，请检查IP地址是否正确"

**解决方法**：
- 检查IP地址格式是否正确（如：192.168.1.1）
- 确保IP地址的每个数字在0-255之间
- 不要输入域名，只支持IP地址

### 2. 提示"网络请求失败"

**解决方法**：
- 检查网络连接是否正常
- 确认防火墙没有阻止API请求
- 如果使用文件直接打开，建议使用本地服务器运行

### 3. 内网IP无法查询详细信息

**说明**：内网IP（如192.168.x.x）是私有地址，无法获取地理位置信息。只能查询公网IP的归属地。

### 4. 显示的位置不准确

**说明**：IP地址定位基于运营商分配的IP段，可能与实际位置有偏差。通常精确到城市级别，无法精确到具体街道。



## 生产环境部署

### 使用 Nginx 部署

#### 1. 安装 Nginx

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nginx
```

**CentOS/RHEL:**
```bash
sudo yum install nginx
```

**macOS:**
```bash
brew install nginx
```

#### 2. 配置 Nginx

创建站点配置文件：

```bash
sudo nano /etc/nginx/sites-available/ip-location
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名或IP

    root /var/www/ip-location;  # 项目文件路径
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    gzip_min_length 1000;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    # 安全头部
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### 3. 部署项目文件

```bash
# 创建项目目录
sudo mkdir -p /var/www/ip-location

# 复制项目文件
sudo cp -r . /var/www/ip-location/

# 设置权限
sudo chown -R www-data:www-data /var/www/ip-location
sudo chmod -R 755 /var/www/ip-location
```

#### 4. 启用站点配置

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/ip-location /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 5. 配置 HTTPS（推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书并自动配置
sudo certbot --nginx -d your-domain.com

# 自动续期测试
sudo certbot renew --dry-run
```

### 使用 Docker 部署

创建 `Dockerfile`:

```dockerfile
FROM nginx:alpine

# 复制项目文件
COPY . /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

构建并运行：

```bash
# 构建镜像
docker build -t ip-location .

# 运行容器
docker run -d -p 80:80 --name ip-location ip-location
```

## 注意事项

1. **API使用**：
   - 免费API每分钟限制45次请求
   - 请勿滥用API服务
   - 商业用途建议升级到Pro版

2. **隐私保护**：
   - 本工具不存储任何查询记录
   - 所有查询通过客户端直接访问API
   - 不收集用户个人信息

3. **网络安全**：
   - IP地址是公开信息，不属于敏感数据
   - 通过IP无法获取具体的个人信息
   - 仅能查询到运营商和大致地理位置

4. **HTTPS部署**：
   - 生产环境建议使用HTTPS
   - 可以使用Let's Encrypt免费证书
   - 升级到IP-API的Pro版以支持HTTPS API



## 许可证

本项目采用 MIT 许可证，可自由使用和修改。

## 相关链接

- [IP-API官网](http://ip-api.com)
- [IP-API文档](http://ip-api.com/docs)
- [Facebook设计规范](https://design.facebook.com)

## 联系方式

如有问题或建议，欢迎反馈！

---

**快速查询IP归属地，让网络世界更透明！** 🌍
