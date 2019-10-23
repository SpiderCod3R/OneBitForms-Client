FROM node:12.11.1

ENV INSTALL_PATH /onbitformsclient
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install
RUN npm audit fix

EXPOSE 4200

CMD ["npm", "start"]