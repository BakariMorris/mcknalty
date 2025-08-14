#!/bin/bash

echo "🚀 Starting Mcknalty Marvel Rivals Website..."
echo ""

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo "✅ Node.js detected"
    
    # Try to start with serve (fastest option)
    if command -v npx &> /dev/null; then
        echo "🌐 Starting local server on http://localhost:3000"
        echo "Press Ctrl+C to stop the server"
        echo ""
        npx serve . -s -l 3000
    else
        echo "❌ npx not found. Please install Node.js with npm."
        exit 1
    fi
    
# Fallback to Python if Node.js is not available
elif command -v python3 &> /dev/null; then
    echo "✅ Python 3 detected"
    echo "🌐 Starting local server on http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
    
elif command -v python &> /dev/null; then
    echo "✅ Python detected"
    echo "🌐 Starting local server on http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
    
else
    echo "❌ Neither Node.js nor Python found."
    echo "Please install one of the following:"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - Python: https://python.org/"
    echo ""
    echo "Or manually open index.html in your browser."
    exit 1
fi