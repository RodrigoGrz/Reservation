FROM node

WORKDIR /usr/app

COPY package.json ./
COPY ./prisma ./

RUN npx prisma generate
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]