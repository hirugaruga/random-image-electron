# Случайная картинка на Electron

Минималистичное Electron-приложение: загружает случайную картинку, обновляет её по кнопке и показывает размер изображения.

## Используемое API

Приложение использует Lorem Picsum:

```text
https://picsum.photos/seed/{seed}/{width}/{height}
```


## Запуск

```bash
npm install
npm start
```

На Windows в PowerShell можно использовать:

```powershell
npm.cmd install
npm.cmd start
```

## Структура

```text
random-image-electron-clean/
├── package.json
├── README.md
├── .gitignore
└── src/
    ├── main.js
    ├── index.html
    ├── renderer.js
    └── styles.css
```
