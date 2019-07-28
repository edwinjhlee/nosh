
install_global(){
    npm install pkg -g
}

dist(){
    OUTPUT_PATH=$1
    pkg dist/main.js --options no-warnings -o $OUTPUT_PATH -c package.json
}
