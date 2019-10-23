FROM node:12.11.1

ENV INSTALL_PATH /onbitforms-client
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn global add --no-lockfile @angular/cli
RUN ng set --global packageManager=yarn
RUN yarn install
CMD ["yarn", "start"]