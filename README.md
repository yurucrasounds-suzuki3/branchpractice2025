# branchpractice2025

簡単なブランチ練習用の静的サイトを追加しました。

ローカルでページを確認する方法:

1. このリポジトリをクローンまたは最新にする。
2. ターミナルでリポジトリのルートに移動する。
3. 以下のコマンドで簡易HTTPサーバーを起動する (Pythonが使える場合):

```bash
python3 -m http.server 8000
```

4. ブラウザで `http://localhost:8000` にアクセスし、`index.html` を表示する。

ブランチ練習の推奨ワークフロー:

```bash
# メインブランチから新しいブランチを作る
git checkout -b feature/your-change
# ファイルを編集 -> ステージ -> コミット
git add .
git commit -m "Describe your change"
# リモートにプッシュ
git push -u origin feature/your-change
# GitHubでプルリクを作成
```

作業が終わったら、Pull Request を作成してレビューを依頼してください。

ファイル:

- `index.html` — サイト本体
- `styles.css` — スタイル
- `script.js` — 簡単な動作

次のステップ: 変更をコミットして新しいブランチで編集を練習してください。
