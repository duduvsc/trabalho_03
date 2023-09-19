# Use uma imagem base do Node.js
FROM node:14

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY package*.json ./
COPY src ./src

# Instale as dependências
RUN npm install

# Exponha a porta que o aplicativo vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/app.js"]
