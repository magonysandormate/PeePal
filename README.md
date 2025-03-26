# Budapesti Nyilvános Mosdók

Ez a projekt a Budapesti nyilvános mosdókat listázza ki, és egy funkciója, hogy megmutatja, melyik van a legközelebb a felhasználóhoz. A frontend React-ben, a backend pedig Laravel-ben készült.

## Funkciók

- Nyilvános mosdók listázása Budapesten
- Legközelebbi mosdó megkeresése a felhasználó aktuális helyzetéhez képest
- Mosdók nyitvatartási idejének és használati díjának megjelenítése

## Telepítés

### Backend

1. Klónozd a repository-t:
    ```bash
    git clone https://git.gszi.edu.hu/magonysandormate/PeePal.git
    ```
2. Lépj be a backend könyvtárába:
    ```bash
    cd Backend/peepal_backend
    ```
3. Telepítsd a szükséges függőségeket:
    ```bash
    composer install
    ```
4. Állítsd be a környezeti változókat:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
5. Futtasd az adatbázis migrációkat:
    ```bash
    php artisan migrate
    ```

### Frontend

1. Lépj be a frontend könyvtárába:
    ```bash
    cd frontend/peepal_react
    ```
2. Telepítsd a szükséges függőségeket:
    ```bash
    npm install
    ```

## Használat

### Backend

1. Indítsd el a Laravel szervert:
    ```bash
    php artisan serve
    ```

### Frontend

1. Indítsd el a React alkalmazást:
    ```bash
    npm start
    ```
2. Nyisd meg a böngésződet és navigálj a következő címre:
    ```
    http://localhost:3000
    ```