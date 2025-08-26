@echo off
rem 设置UTF-8编码，解决中文显示问题
chcp 65001 >nul

echo ========================================
echo           Git 自动提交推送脚本
echo ========================================
echo.

rem 添加所有修改的文件到暂存区
git add -A
if %errorlevel% neq 0 (
    echo 错误：git add 失败！
    pause
    exit /b 1
)

echo 已添加所有文件到暂存区
echo.

rem 提示用户输入commit message
set /p commit_msg=请输入commit message: 

rem 检查用户是否输入了内容
if "%commit_msg%"=="" (
    echo 错误：commit message 不能为空！
    pause
    exit /b 1
)

echo.
echo 正在提交更改...

rem 执行git commit
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo 错误：git commit 失败！
    pause
    exit /b 1
)

echo 提交成功！
echo.
echo 正在推送到远程仓库...

rem 执行git push
git push
if %errorlevel% neq 0 (
    echo 错误：git push 失败！
    echo 请检查网络连接或远程仓库配置
    pause
    exit /b 1
)

echo ========================================
echo           推送成功！
echo ========================================
echo.
pause