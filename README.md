# gap

## Backend(gap)環境構築

```shell
#dockerfileのあるdirで
$ docker-compose up -d
$ docker-compose exec rest_api ./manage.py migrate
$ docker-compose exec rest_api ./manage.py runserver 0:8000
# http://localhost:8000/にアクセス
```

## react環境構築
reactの環境構築は以下のコマンドにて実施します。

```
$ docker-compose up -d
$ docker-compose exec web_front bash
#bash内に入ります
#vscodeでスーパーユーザー推奨
$ cd frontend
$ npm install
$ npm start
```
