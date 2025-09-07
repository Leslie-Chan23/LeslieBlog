// 文件时间更新脚本 - 用于自动更新movies目录下md文件的修改时间
const fs = require('fs');
const path = require('path');

// 配置参数
const MOVIES_DIR = path.join(__dirname, 'docs', 'movies');
const TIME_FORMAT = 'YYYY-MM-DD HH:mm';

/**
 * 格式化日期时间为指定格式
 * @param {Date} date - 日期对象
 * @param {string} format - 格式字符串
 * @returns {string} 格式化后的时间字符串
 */
function formatDateTime(date, format) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes);
}

/**
 * 生成方法三格式的时间信息
 * @param {string} createdTime - 格式化的创建时间字符串
 * @param {string} modifiedTime - 格式化的修改时间字符串
 * @returns {string} 方法三格式的时间信息
 */
function generateTimeInfo(createdTime, modifiedTime) {
    return `<!-- 文章编辑时间信息 -->
***

📅 **文章时间线**
- **首次创建**：\`${createdTime}\`
- **最后更新**：\`${modifiedTime}\`

***
<!-- 编辑时间信息结束 -->`;
}

/**
 * 更新单个文件的时间信息
 * @param {string} filePath - 文件路径
 * @param {string} fileName - 文件名
 */
function updateFileTime(filePath, fileName) {
    try {
        // 获取文件创建时间和最后修改时间
        const stats = fs.statSync(filePath);
        const createdTime = new Date(stats.birthtime);
        const modifiedTime = new Date(stats.mtime);
        const formattedCreatedTime = formatDateTime(createdTime, TIME_FORMAT);
        const formattedModifiedTime = formatDateTime(modifiedTime, TIME_FORMAT);
        
        // 读取文件内容
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 检查是否已存在时间信息
        const timeInfoRegex = /<!-- 文章编辑时间信息 -->[\s\S]*?<!-- 编辑时间信息结束 -->/;
        const newTimeInfo = generateTimeInfo(formattedCreatedTime, formattedModifiedTime);
        
        let updatedContent;
        if (timeInfoRegex.test(content)) {
            // 替换现有时间信息
            updatedContent = content.replace(timeInfoRegex, newTimeInfo);
        } else {
            // 在文件末尾添加时间信息
            updatedContent = content.trim() + '\n\n' + newTimeInfo;
        }
        
        // 写入更新后的内容
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        
        console.log(`✅ 已更新: ${fileName} (创建时间: ${formattedCreatedTime}, 最后修改: ${formattedModifiedTime})`);
        
    } catch (error) {
        console.error(`❌ 处理文件 ${fileName} 时出错:`, error.message);
    }
}

/**
 * 主函数 - 遍历movies目录并更新所有md文件
 */
function main() {
    console.log('🚀 开始更新movies目录下md文件的时间信息...\n');
    
    // 检查movies目录是否存在
    if (!fs.existsSync(MOVIES_DIR)) {
        console.error(`❌ 错误：找不到目录 ${MOVIES_DIR}`);
        process.exit(1);
    }
    
    // 读取movies目录下的所有文件
    const files = fs.readdirSync(MOVIES_DIR);
    let processedCount = 0;
    
    // 遍历所有文件
    files.forEach(fileName => {
        // 只处理.md文件，跳过index.md
        if (fileName.endsWith('.md') && fileName !== 'index.md') {
            const filePath = path.join(MOVIES_DIR, fileName);
            updateFileTime(filePath, fileName);
            processedCount++;
        }
    });
    
    console.log(`\n🎉 处理完成！共更新了 ${processedCount} 个文件。`);
}

// 执行主函数
main();