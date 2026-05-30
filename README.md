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

Если команда `npm start` не находит Electron, можно запустить напрямую:

```powershell
npm.cmd run start:direct
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

## Что происходит в приложении

1. Electron открывает окно и загружает `src/index.html`.
2. `renderer.js` выбирает случайную ширину, высоту и seed.
3. Формируется URL картинки через Lorem Picsum.
4. Картинка предварительно загружается через объект `Image`.
5. После загрузки приложение показывает картинку и её размер в пикселях.
6. Кнопка `Обновить` повторяет загрузку.

Если внешний сервис временно недоступен, приложение показывает локальную резервную картинку, чтобы интерфейс не ломался.
