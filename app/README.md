#  サーバーサイドの構築手順

## 対象のOS

Ubuntu

## OSに必要なパッケージ

### Python3

#### 用途

開発言語

#### バージョン確認

```bash
python3 -V
```

### pip

#### 用途

Pythonソフトウェアパッケージ管理ツール

#### インストール


```bash
sudo apt install -y python3-pip
```

### venv

#### 用途

Python用仮想環境構築

#### インストール

```bash
sudo apt install -y python3-venv
```

### 開発用パッケージ

#### 用途

Pythonを使ってデータベース制御を行うために必要な開発パッケージ

### インストール

```bash
sudo apt install python3-dev default-libmysqlclient-dev build-essential
```

## 仮想環境

### 仮想環境フォルダの作成

```bash
# .venvという名前で仮想環境用アプリケーションを作成
python3 -m venv .venv
```

### 仮想環境を起動

```bash
# 下記コマンドをルートディレクトリ配下で実行
source .venv/bin/activate
```

### 仮想環境を終了

```bash
deactivate
```

### 仮想環境に入れたパッケージ情報を出力

```bash
pip freeze > requirements.txt
```

### requirements.txtから必要パッケージをインストール

```bash
pip install -r requirements.txt
```

# Djangoアプリケーション

```bash
python manage.py startapp [アプリケーション名]
```

## Djangoプロジェクトを作成

```bash
# Djangoを動かすためのアプリケーションを作成する
# アプリケーションの操作を行う`manage.py`とアプリケーション全体の設定を行うサブフォルダ(プロジェクトフォルダと同名)を生成
django-admin startproject [プロジェクトフォルダ名]
```

## Djangoアプリケーションの起動

```bash
python manage.py runserver (IPaddress:PortNum)
```

## Djangoアプリケーション

# Django テーブルの作成

## migrationファイルの作成

```bash
python manage.py makemigrations [アプリケーションフォルダ]
```

## migrationファイルからSQLの作成

```bash
python manage.py sqlmigrate [アプリケーションフォルダ] [マイグレーションID]
```

## migrationの実行（データーベースへの反映）

```bash
python manage.py migrate
```

## 初期データの読み込み

```bash
python manage.py loaddata [fixturesのファイル名]
```

# mariadb

## 起動コマンド

```bash
mysql -u natsumi -p [データベース名]
```

## データベースの指定

```bash
use [データベース名]
```
