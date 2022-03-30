#  サーバーサイドの構築手順

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

## 仮想環境

### 仮想環境フォルダの作成

```bash
# .venvという名前でフォルダを作成
python3 -m venv .venv
```

### 仮想環境を起動

```bash
# 下記コマンドを/appディレクトリ配下で実行
source .venv/bin/activate
```

### 仮想環境を終了

```bash
deactivate
```
