# 🎨 颜色调整指南

## 如何根据您的Logo调整网站颜色

### 第一步：分析您的Logo色调

1. **提取主色调** - 从您的logo中提取最主要的颜色
2. **提取辅助色** - 从您的logo中提取次要颜色
3. **确定中性色** - 选择与logo搭配的灰色系

### 第二步：调整颜色配置

在 `tailwind.config.js` 文件中，找到以下颜色配置并替换：

```javascript
colors: {
  // 主色调 - 根据您的logo主色调调整
  primary: {
    main: '#1E40AF', // 替换为您的logo主色调
    light: '#3B82F6', // 替换为您的logo主色调的亮色版本
    dark: '#1E3A8A', // 替换为您的logo主色调的暗色版本
    blue: '#4F46E5', // 保留作为备用
  },
  // 辅助色 - 根据logo的辅助色调调整
  accent: {
    main: '#F59E0B', // 替换为您的logo辅助色
    light: '#FCD34D', // 替换为您的logo辅助色的亮色版本
    dark: '#D97706', // 替换为您的logo辅助色的暗色版本
    orange: '#F59E0B', // 保留作为备用
    warm: '#FED7AA', // 保留作为备用
  },
}
```

### 第三步：颜色搭配建议

#### 常见Logo色调搭配：

**蓝色系Logo：**
- 主色调：深蓝色 (#1E40AF, #2563EB, #3B82F6)
- 辅助色：橙色 (#F59E0B, #F97316) 或 绿色 (#10B981, #059669)

**绿色系Logo：**
- 主色调：深绿色 (#059669, #047857, #065F46)
- 辅助色：橙色 (#F59E0B, #F97316) 或 蓝色 (#3B82F6, #1D4ED8)

**红色系Logo：**
- 主色调：深红色 (#DC2626, #B91C1C, #991B1B)
- 辅助色：蓝色 (#3B82F6, #1D4ED8) 或 橙色 (#F59E0B, #F97316)

**橙色系Logo：**
- 主色调：深橙色 (#EA580C, #C2410C, #9A3412)
- 辅助色：蓝色 (#3B82F6, #1D4ED8) 或 绿色 (#10B981, #059669)

### 第四步：工具推荐

1. **颜色提取工具：**
   - Adobe Color (color.adobe.com)
   - Coolors (coolors.co)
   - ColorZilla (浏览器插件)

2. **颜色生成工具：**
   - Tailwind CSS Color Generator
   - Material Design Color Tool

### 第五步：测试颜色效果

调整颜色后，请测试以下元素：

1. **按钮效果** - 确保按钮在不同状态下都清晰可见
2. **文本对比度** - 确保文本在背景色上有足够的对比度
3. **悬停效果** - 确保悬停状态的颜色变化自然
4. **移动端显示** - 在不同设备上测试颜色效果

### 第六步：更新其他颜色引用

如果您在代码中直接使用了颜色值，也需要相应更新：

```javascript
// 旧的颜色引用
className="bg-primary-blue"
className="text-accent-orange"

// 新的颜色引用
className="bg-primary-main"
className="text-accent-main"
```

### 注意事项

1. **保持一致性** - 确保整个网站使用统一的颜色系统
2. **考虑可访问性** - 确保颜色对比度符合WCAG标准
3. **测试不同设备** - 在不同屏幕和浏览器上测试颜色效果
4. **备份原配置** - 在修改前备份原始颜色配置

### 快速颜色调整示例

如果您想要快速调整颜色，可以修改 `tailwind.config.js` 中的这些值：

```javascript
// 示例：蓝色系logo
primary: {
  main: '#2563EB',    // 主蓝色
  light: '#60A5FA',   // 浅蓝色
  dark: '#1D4ED8',    // 深蓝色
},
accent: {
  main: '#F59E0B',    // 橙色作为辅助色
  light: '#FCD34D',   // 浅橙色
  dark: '#D97706',    // 深橙色
}
```

这样就能快速为您的网站应用新的品牌色调！ 