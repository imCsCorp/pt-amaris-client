# 💾 Frontend Fondos - Angular + Tailwind + Docker + GitHub Actions

Este proyecto es el frontend de la prueba técnica **Fondos**, desarrollado en **Angular 20**, estilizado con **TailwindCSS** y empacado con **Docker** para despliegue automático en **AWS ECR**.

---

## 🚀 Tecnologías

* ✅ Angular 20
* 🎨 TailwindCSS
* 🐳 Docker + NGINX
* ☁️ AWS ECR (Public o Private)
* ⚙️ GitHub Actions

---

## 📦 Estructura del proyecto

```
frontend-fondos/
├── src/
├── dist/
├── Dockerfile
├── nginx.conf
├── angular.json
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ Scripts de desarrollo

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
ng serve

# Compilar para producción
ng build --configuration production
```

---

## 🐳 Docker

### 🧱 Build local

```bash
docker build -t frontend-fondos .
```

### 🚀 Ejecutar localmente

```bash
docker run -p 4201:80 frontend-fondos
```

Accede en: [http://localhost:4201](http://localhost:4201)

---

## 🌐 Dockerfile

```Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build -- --configuration production

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/prueba-tecnica-amaris-frontend /usr/share/nginx/html
```

---

## 🌐 `nginx.conf`

```nginx
server {
  listen 80;
  server_name localhost;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## ⚙️ Despliegue automático con GitHub Actions

El flujo `deploy.yml`:

1. Compila Angular.
2. Crea una imagen Docker.
3. La sube al repositorio **ECR**.

### 📁 Ubicación

`.github/workflows/deploy.yml`

### 🔐 Secrets requeridos

Configura en **Settings > Secrets and variables > Actions**:

| Nombre                  | Descripción                               |
| ----------------------- | ----------------------------------------- |
| `AWS_ACCESS_KEY_ID`     | Access key de IAM                         |
| `AWS_SECRET_ACCESS_KEY` | Secret key de IAM                         |
| `AWS_REGION`            | Ej: `us-east-1`                           |
| `ECR_REPOSITORY_URI`    | URI de tu repo ECR (`public.ecr.aws/...`) |

---

## ✅ Resultado

Al hacer push a `main`:

* 🔧 Se compila el proyecto.
* 🐳 Se construye la imagen Docker.
* ☁️ Se publica en Amazon ECR.

---

## 🧑 Autor

Camio Alejandro Soto Vega  
Prueba técnica Angular + Tailwindcss + AWS

---
