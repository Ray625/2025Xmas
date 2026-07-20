# Taipei Xmas 2025

台北聖誕節活動網站專案（Vue 3 + Vite）。

## 環境需求

- Node.js >= 18
- pnpm（建議使用）

## 安裝套件

```bash
pnpm install
```

## 本地開發

```bash
pnpm run dev
```

## 打包（Production Build）

```bash
pnpm run build
```

打包完成後，輸出於：

```
/dist
```

---

## 專案技術

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- vue-i18n（多語系）

---

## 專案結構說明

```
public/
  assets/        # 靜態檔案（PDF、OG圖等），會直接原樣輸出

src/
  assets/        # 專案內使用圖片、icon、字體等資源
    collect/
    font/
    icon/
    img/
    kv/
    lights/
    map/
    mock/

  components/    # Vue 元件
  composables/   # 組合式邏輯
  data/          # 靜態資料
  locales/       # i18n 多語系設定
    en.ts
    zh-TW.ts
    index.ts
```

---

## 圖片與資源修改

### 靜態資源（不經過打包）

- 路徑：`public/assets/`
- 用途：PDF、OG image 等
- 特性：build 後會原樣輸出

### 專案內圖片

- 路徑：`src/assets/`
- 用途：頁面圖片、icon、裝飾素材等
- 修改後需重新 build

---

## 文案修改（多語系）

多語系內容位於：

```
src/locales/
```

- `zh-TW.ts`：中文
- `en.ts`：英文

修改對應欄位即可更新頁面文案

---
