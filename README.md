# sandbox

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## DOCKER 

### Build 

```bash
docker build -f install/Dockerfile -t scraper-sandbox .
```

### Run 

```bash
docker run -it --rm -p 80:80 scraper-sandbox
```
