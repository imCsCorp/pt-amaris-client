# 💾 Frontend Fondos - Angular + Tailwind + Docker + GitHub Actions

Este proyecto es el frontend de la prueba técnica **Fondos**, desarrollado en **Angular 20**, estilizado con **TailwindCSS** y empacado con **Docker** para despliegue automático en **AWS ECR**.

---

## 🚀 Tecnologías

* ✅ Angular 20
* TypeScript
* 🎨 TailwindCSS
* 🐳 Docker + NGINX
* ☁️ AWS ECR Public
* CloudFormation
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
docker build -t funds-client .
```

### Etiquetado y push a Amazon ECR Public

```bash
docker tag funds-client:latest public.ecr.aws/ACCOUNT_ID/casv/funds-client:latest
docker push public.ecr.aws/ACCOUNT_ID/casv/funds-client:latest
```

> Reemplaza `ACCOUNT_ID` por el ID de tu cuenta o el nombre generado por CloudFormation.

### 🚀 Ejecutar localmente

```bash
docker run -p 4201:80 funds-client
```

Accede en: [http://localhost:4201](http://localhost:4201)

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

---

## 📦 Despliegue con CloudFormation y GitHub Actions

El despliegue se realiza en dos etapas:

1. Creación del repositorio en Amazon ECR Public (CloudFormation: `ecr-repo.yaml`).
2. Despliegue de la infraestructura del frontend (`cloudformation-frontend.yaml`) y push de la imagen desde GitHub Actions.

El flujo completo de CI/CD se encuentra en `.github/workflows/deploy.yml`.

## 📄 CloudFormation

- `ecr-repo.yaml`: crea el repositorio público en Amazon ECR para el frontend.

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
