FROM node:15.10.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Hardwarestore frontend react app."
LABEL maintainer = ["vojtechpavelka37@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g gatsby-cli
RUN npm install

COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]