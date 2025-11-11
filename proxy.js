const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

// 静态文件服务
app.use(express.static(__dirname));

// POST 代理（提交任务）
app.post('/proxy', async (req, res) => {
    const { url, headers, body } = req.body;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// GET 代理（查询任务状态）
app.get('/proxy', async (req, res) => {
    const { url, authorization } = req.query;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': authorization,
                'Content-Type': 'application/json', // <-- 关键修复：添加此头
                'X-ModelScope-Task-Type': 'image_generation'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


// 所有其他 GET 请求都返回 index.html（SPA 支持）
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Proxy server running on http://localhost:3000'));
