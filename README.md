# ModelScope 批量文生图工具

一个基于魔搭社区 API 的批量文生图工具，拥有简洁的 Web 界面。支持为多个提示词批量生成图片，并可自定义生成数量、尺寸和模型。所有图片将自动下载到本地。

<img width="1013" height="1081" alt="PixPin_2025-11-11_20-53-43" src="https://github.com/user-attachments/assets/91a1bc6b-b762-443b-a2eb-eb36445c19b4" />
<img width="1083" height="313" alt="PixPin_2025-11-11_20-53-59" src="https://github.com/user-attachments/assets/5ca1e1ba-d02c-4b2a-86d0-d2d6ad1ec313" />


## ✨ 功能特性

- 🚀 **批量生成**：支持一次输入多个提示词（每行一个），并为每个提示词生成指定数量的图片。
- 🎨 **模型支持**：内置支持 `FLUX.1-Krea-dev` 高质量模型。
- ⚙️ **自定义参数**：可自由设置图片尺寸（如 `1024x1024`）和每个提示词的生成数量。
- 💾 **自动下载**：图片生成成功后，会自动以 `提示词_批次_时间戳.png` 的格式下载到本地。
- 🖥️ **友好界面**：简洁直观的 Web UI，实时显示生成进度和调试信息。
- 🛠️ **Node.js 代理**：通过本地代理服务器解决跨域问题，无需复杂配置。

## 🛠️ 技术栈

- **前端**: HTML, CSS, JavaScript (原生)
- **后端**: Node.js, Express
- **API**: 魔搭社区

## 📋 先决条件

在开始之前，请确保您的系统已安装：

- [Node.js](https://nodejs.org/) (建议 v14 或更高版本)
- npm 或 yarn
- 一个 [魔搭社区](https://modelscope.cn/) 账号，并已获取 Access Token

## 🚀 快速开始

### 1. 克隆项目

'''bash

git clone https://github.com/starttown/AI_Batch_Images_Gen.git

cd AI_Batch_Images_Gen

'''

### 2. 安装依赖

项目依赖 `express`, `node-fetch` 和 `cors` 来运行代理服务器。

'''bash

npm install

'''



### 3. 启动代理服务器

在项目根目录下运行以下命令启动代理服务：

'''bash

node proxy.js

'''




您应该会看到以下输出，表示服务器已成功运行：

Proxy server running on http://localhost:3000



### 4. 打开 Web 界面

在您的浏览器中打开 [http://localhost:3000](http://localhost:3000) 。

## 📖 使用方法

1.  **获取 API Token**：
    - 访问 [魔搭社区 Access Token 页面](https://modelscope.cn/my/myaccesstoken) 。
    - 创建一个新的 Token，并复制它（`ms-*************`）。

2.  **配置工具**：
    - 在界面的 "设置 API Token" 区域输入您的 Token。
    - 选择您想要使用的模型。
    - 在 "输入提示词" 文本框中，每行输入一个提示词。
    - （可选）设置图片尺寸和批量生成个数。

3.  **开始生成**：
    - 点击 "开始批量生成" 按钮。
    - 工具会依次提交任务，并在界面上实时显示进度。
    - 图片生成成功后，会自动下载到您的默认下载文件夹，并在页面上显示预览。

## ⚠️ 重要提示

- **API 额度**：魔搭社区为每个账号提供每日 2000 次的免费调用额度，请合理使用。
- **Token 安全**：请勿将您的 Access Token 泄露或提交到公共代码仓库。
- **网络环境**：由于需要访问魔搭 API，请确保您的网络环境可以正常访问 `api-inference.modelscope.cn`。

## 📁 项目结构

.
├── index.html # 前端界面文件
├── proxy.js # Node.js 代理服务器
├── package.json # 项目依赖和脚本
└── README.md # 项目说明文档



## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。查看 [LICENSE](LICENSE) 文件了解更多信息。

## 🙏 致谢

- 感谢 [魔搭社区](https://modelscope.cn/) 提供的强大且免费的 API 服务。


更新日志
v1.1.0 - 2025-11-13
🚀 新增功能
串行任务处理：实现严格的串行化任务处理，确保每个任务完全完成后再提交下一个
日志自动保存：日志自动保存到浏览器的localStorage，支持历史记录管理
日志复制功能：添加一键复制日志到剪贴板功能
任务间延迟：每个任务完成后自动添加3秒延迟，避免触发API频率限制
🐛 问题修复
解决任务超时问题：修复了批量生成时出现的任务超时问题
⚡ 性能优化
延长轮询超时：轮询超时时间从5分钟增加到10分钟（120次轮询）
优化状态显示：简化状态栏显示，移除冗余的轮询详情
改进日志记录：将详细日志记录到后台存储，界面只显示关键信息
🎨 用户体验改进
简化界面显示：移除不必要的轮询打印，界面更简洁
日志管理优化：日志自动分类存储，最多保留10条历史记录
状态提示优化：改进任务状态提示，更直观显示当前进度
🔧 技术改进
重构按钮逻辑：使用动态创建按钮的方式，确保按钮正确显示
优化错误处理：改进异常捕获和错误提示机制
代码结构优化：改进函数组织和代码可读性


