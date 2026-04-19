# 老魚 oldfish — 個人網站

簡約深色、毛玻璃風格的靜態個人頁，可部署於 [GitHub Pages](https://pages.github.com/)。

## 本機預覽

在專案根目錄（含 `index.html` 的資料夾）啟動任一靜態伺服器，例如：

```bash
npx --yes serve .
```

或用 Python：

```bash
python -m http.server 8080
```

瀏覽器開啟對應本機網址即可。

## 部署到 GitHub Pages（專案站）

1. 將此資料夾推上 GitHub，建議獨立成一個 repository（例如名稱 `about_oldfish`）。
2. 在 repository：**Settings → Pages**。
3. **Build and deployment**：Source 選 **Deploy from a branch**。
4. Branch 選 **`main`**（或你的預設分支），資料夾選 **`/ (root)`**，儲存。

完成後網址形如：

`https://oldfish101240.github.io/about_oldfish/`

（帳號與 repo 名請依你的實際設定替換。）

## 檔案說明

| 檔案 | 說明 |
|------|------|
| `index.html` | 單頁結構與文案節點 |
| `styles.css` | 版面、深色主題、毛玻璃與響應式 |
| `script.js` | 繁中／英文切換與 `localStorage` 記憶語言 |
| `assets/oldfish.jpg` | 頭像 |
