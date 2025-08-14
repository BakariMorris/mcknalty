@echo off
echo 🚀 Starting Mcknalty Marvel Rivals Website...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo ✅ Node.js detected
    where npx >nul 2>nul
    if %ERRORLEVEL% == 0 (
        echo 🌐 Starting local server on http://localhost:3000
        echo Press Ctrl+C to stop the server
        echo.
        npx serve . -s -l 3000
        goto :end
    ) else (
        echo ❌ npx not found. Please install Node.js with npm.
        goto :error
    )
)

REM Fallback to Python if Node.js is not available
where python >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo ✅ Python detected
    echo 🌐 Starting local server on http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto :end
)

where python3 >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo ✅ Python 3 detected
    echo 🌐 Starting local server on http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python3 -m http.server 8000
    goto :end
)

:error
echo ❌ Neither Node.js nor Python found.
echo Please install one of the following:
echo   - Node.js: https://nodejs.org/
echo   - Python: https://python.org/
echo.
echo Or manually open index.html in your browser.
pause
exit /b 1

:end