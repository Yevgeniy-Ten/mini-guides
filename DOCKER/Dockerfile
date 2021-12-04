FROM python:3

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app
RUN npm install
EXPOSE 3050
ENV TZ = Europe/Almaty
CMD ["python","main.py"]
