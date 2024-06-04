Instalando o Parcel:
1. npm intit --yes 
2. npm install --save-dev parcel

No package.json, add em scripts:
- "dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js"; (criar o ambiente de trabalho com essas pastas)

Criar um doc JSON chamado sharp.config.json com oseguinte código:
{
    "png": {
        "qualiy":75
    }
}

onde tratamos a qualidade da imagem

Na pasta .gitignore:
- .parcel-cache
- dist
- node_modules