# Развертывание Strapi CMS на Render.com

## Шаги для развертывания:

### 1. Создание репозитория на GitHub
- Создайте новый репозиторий на GitHub (например: `strapi-cms-demo`)
- Скопируйте URL репозитория

### 2. Настройка Git Remote
```bash
git remote add origin https://github.com/YOUR_USERNAME/strapi-cms-demo.git
git push -u origin main
```

### 3. Создание сервиса на Render.com
- Войдите в [Render.com](https://render.com)
- Нажмите "New +" → "Web Service"
- Подключите ваш GitHub репозиторий
- Render автоматически определит настройки из `render.yaml`

### 4. Переменные окружения
Render автоматически сгенерирует:
- `APP_KEYS`
- `API_TOKEN_SALT` 
- `ADMIN_JWT_SECRET`
- `JWT_SECRET`

### 5. Доступ к Strapi
После развертывания:
- Админ панель: `https://your-service.onrender.com/admin`
- API: `https://your-service.onrender.com/api`

### 6. Обновление основного приложения
После получения URL Strapi, обновите переменную `STRAPI_URL` в основном сервисе `booking-aggregator-demo-1`.
