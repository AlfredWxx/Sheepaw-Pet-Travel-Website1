# 🎥 Hero视频优化指南

## 如何准备和优化您的Hero视频

### 第一步：视频文件准备

#### 文件要求：
- **格式**: MP4 (推荐)
- **分辨率**: 1920x1080 (1080p) 或更高
- **时长**: 15-30秒 (推荐20秒)
- **文件大小**: 建议小于10MB
- **帧率**: 24fps 或 30fps

#### 内容建议：
- 展示宠物运输相关的场景
- 体现温馨、专业、可靠的服务特点
- 避免文字或复杂图形
- 确保画面稳定，避免剧烈晃动

### 第二步：文件放置

1. 将您的视频文件重命名为 `hero-video.mp4`
2. 放置在项目的 `public/` 目录下
3. 确保文件路径为：`public/hero-video.mp4`

### 第三步：视频优化

#### 使用FFmpeg优化视频（可选）：

```bash
# 安装FFmpeg (如果还没有安装)
# macOS: brew install ffmpeg
# Windows: 下载FFmpeg并添加到PATH

# 优化视频大小和质量
ffmpeg -i input-video.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart hero-video.mp4

# 参数说明：
# -c:v libx264: 使用H.264编码
# -crf 23: 控制质量 (18-28之间，数值越小质量越高)
# -preset medium: 编码速度和质量平衡
# -c:a aac: 音频编码
# -b:a 128k: 音频比特率
# -movflags +faststart: 优化网络播放
```

#### 在线工具优化：
- **HandBrake**: 免费的视频压缩工具
- **Online Video Compressor**: 在线视频压缩
- **CloudConvert**: 在线格式转换

### 第四步：备用方案

如果您的视频文件较大或加载较慢，可以考虑：

1. **使用视频托管服务**：
   - 将视频上传到YouTube/Vimeo
   - 使用CDN服务
   - 使用云存储服务

2. **创建多个版本**：
   - 高质量版本用于桌面端
   - 压缩版本用于移动端

### 第五步：性能优化

#### 在Hero组件中添加性能优化：

```javascript
// 在Hero组件中添加懒加载
const [videoLoaded, setVideoLoaded] = useState(false)

// 视频加载完成后的处理
const handleVideoLoad = () => {
  setVideoLoaded(true)
}

// 在video元素中添加
<video
  onLoadedData={handleVideoLoad}
  className={`w-full h-full object-cover transition-opacity duration-500 ${
    videoLoaded ? 'opacity-100' : 'opacity-0'
  }`}
  // ... 其他属性
>
```

### 第六步：测试和调试

#### 测试清单：
- [ ] 视频在不同设备上正常播放
- [ ] 视频加载时间合理
- [ ] 视频质量清晰
- [ ] 视频循环播放正常
- [ ] 移动端性能良好

#### 常见问题解决：

**视频不播放：**
- 检查文件路径是否正确
- 确认文件格式支持
- 检查浏览器控制台错误

**视频加载慢：**
- 压缩视频文件
- 使用CDN服务
- 添加加载动画

**视频质量差：**
- 提高视频分辨率
- 调整编码参数
- 使用更高质量的原文件

### 第七步：SEO优化

#### 添加视频元数据：

```javascript
// 在Hero组件中添加
<video
  aria-label="Sheepaw Pet Travel Services"
  title="Professional Pet Travel Services"
  // ... 其他属性
>
```

#### 添加结构化数据：

```javascript
// 在页面中添加视频结构化数据
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Sheepaw Pet Travel Services",
  "description": "Professional pet travel services between China and Canada",
  "thumbnailUrl": "/hero-poster.jpg",
  "uploadDate": "2024-01-01",
  "contentUrl": "/hero-video.mp4"
}
</script>
```

### 第八步：无障碍访问

#### 确保视频可访问：

```javascript
<video
  aria-label="Sheepaw Pet Travel Services Video"
  role="img"
  aria-describedby="video-description"
  // ... 其他属性
>
  <track 
    kind="descriptions" 
    src="/video-descriptions.vtt" 
    label="English" 
    srclang="en"
  />
</video>
<div id="video-description" className="sr-only">
  Video showing professional pet travel services
</div>
```

### 视频内容建议

#### 推荐的视频内容：
1. **服务展示** - 展示宠物运输过程
2. **团队介绍** - 展示专业团队
3. **客户见证** - 展示成功案例
4. **设施展示** - 展示专业设施
5. **温馨场景** - 展示宠物与主人的温馨时刻

#### 避免的内容：
- 过于复杂的文字或图形
- 快速切换的场景
- 过于嘈杂的背景音乐
- 与业务无关的内容

### 文件命名规范

建议的文件命名：
- `hero-video.mp4` - 主视频文件
- `hero-video-mobile.mp4` - 移动端优化版本
- `hero-poster.jpg` - 视频封面图片
- `hero-video.webm` - WebM格式备用版本

这样您就能拥有一个完美优化的Hero视频了！ 