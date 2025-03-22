--Létrehozás
CREATE DATABASE IF NOT EXISTS peepal DEFAULT CHARACTER SET utf8 COLLATE utf8_hungrian_ci;

--Táblalétrehozás
CREATE TABLE IF NOT EXISTS wc_adatok (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(250),
    kerulet VARCHAR(250),
    kozeli_megall VARCHAR(250),
    akadalym BOOLEAN,
    ar INT,
    nyitva VARCHAR(250),
    hossz_koord DOUBLE,
    szel_koord DOUBLE,
    utvonal VARCHAR(1000)
);

--Adatfeltöltés
INSERT INTO wc_adatok (nev, kerulet, kozeli_megall, akadalym, ar, nyitva, hossz_koord, szel_koord, utvonal) VALUES
('Déli Pályaudvar Nyilvános Mosdó', 'I. kerület', 'Déli Pályaudvar (M2-es metró, 2-es villamos, 4-es villamos, 18-as villamos, 59-es villamos, 61-es villamos)', TRUE, 250, '6:00-20:00', 47.50025507357977, 19.025074759382747, 'https://maps.app.goo.gl/X3TSMUwhTV4fALyd6'),
('Nyugati Pályaudvar Nyilvános Mosdó', 'VI. kerület', 'Nyugati Pályaudvar (M3-as metró, 4-es villamos, 6-os villamos)', TRUE, 200, '5:00-23:00', 47.510861527052484, 19.057794223722723, 'https://maps.app.goo.gl/z73zXwGX6HxkPNQu8'),
('Keleti Pályaudvar Nyilvános Mosdó', 'VIII. kerület', 'Keleti Pályaudvar (M2-es metró, M4-es metró, 7-es busz, 30-as busz, 78-as busz)', TRUE, 300, '0:00-24:00', 47.499972, 19.082667, 'https://maps.app.goo.gl/YBY2qVcbxZ9ebc7t8'),
('Margitszigeti Nyilvános Mosdó', 'XIII. kerület', 'Margitsziget (26-os busz)', TRUE, 150, '7:00-22:00', 47.518553, 19.044224, 'https://maps.app.goo.gl/V8azExcDm1weqrBU6'),
('Városligeti Nyilvános Mosdó', 'XIV. kerület', 'Városliget (70-es troli, 75-ös troli, 79-es troli)', TRUE, 200, '6:00-21:00', 47.51098933275473, 19.086019177929227, 'https://maps.app.goo.gl/yMVYSfZqQ9U7ZHLTA'),
('Széll Kálmán téri Nyilvános Mosdó', 'II. kerület', 'Széll Kálmán tér (M2-es metró, 4-es villamos, 6-os villamos, 17-es villamos, 56-os villamos, 59-es villamos, 61-es villamos)', TRUE, 250, '6:00-20:00', 47.50740741462604, 19.024610790375228, 'https://maps.app.goo.gl/Mjip13V5G4BN8rPj6'),
('Blaha Lujza téri Nyilvános Mosdó', 'VIII. kerület', 'Blaha Lujza tér (M2-es metró, 4-es villamos, 6-os villamos)', TRUE, 200, '5:00-23:00', 47.496403892547505, 19.068833611658484, 'https://maps.app.goo.gl/GuoNNjJjXcRW3914A'),
('Astoria Nyilvános Mosdó', 'V. kerület', 'Astoria (M2-es metró, 7-es busz, 8E busz, 112-es busz)', TRUE, 250, '6:00-20:00', 47.494151232460275, 19.05985662145968, 'https://maps.app.goo.gl/TW2ZwH7YiMpMMzSb7'),
('Kálvin téri Nyilvános Mosdó', 'IX. kerület', 'Kálvin tér (M3-as metró, M4-es metró, 47-es villamos, 48-as villamos, 49-es villamos)', TRUE, 200, '5:00-23:00', 47.48960659445002, 19.061634424103033, 'https://maps.app.goo.gl/TXY9EZdqfG2tXMru6'),
('Fővám téri Nyilvános Mosdó', 'IX. kerület', 'Fővám tér (M4-es metró, 47-es villamos, 48-as villamos, 49-es villamos)', TRUE, 250, '6:00-20:00', 47.4861911566426, 19.059586662994935, 'https://maps.app.goo.gl/WH3fCiWs8vnckFRz6'),
('Deák Ferenc téri Nyilvános Mosdó', 'V. kerület', 'Deák Ferenc tér (M1-es metró, M2-es metró, M3-as metró, 47-es villamos, 48-as villamos, 49-es villamos)', TRUE, 200, '5:00-23:00', 47.498069146347675, 19.053907077736074, 'https://maps.app.goo.gl/aGpFrnKszDEFeYdt7'),
('Ferenciek tere Nyilvános Mosdó', 'V. kerület', 'Ferenciek tere (M3-as metró, 7-es busz, 8E busz, 112-es busz)', TRUE, 250, '6:00-20:00', 47.4931164079512, 19.055890504323266, 'https://maps.app.goo.gl/6PfPvTVxSipzBhuZ7'),
('Kossuth Lajos téri Nyilvános Mosdó', 'V. kerület', 'Kossuth Lajos tér (M2-es metró, 2-es villamos)', TRUE, 200, '5:00-23:00', 47.505472668809034, 19.046749164211178, 'https://maps.app.goo.gl/EKAQR7uj5LVsZy4x5'),
('Batthyány téri Nyilvános Mosdó', 'I. kerület', 'Batthyány tér (M2-es metró, 19-es villamos, 41-es villamos)', TRUE, 250, '6:00-20:00', 47.50660730946977, 19.039155411436823, 'https://maps.app.goo.gl/t8hinEkANUqhMWRw5'),
('Móricz Zsigmond körtéri Nyilvános Mosdó', 'XI. kerület', 'Móricz Zsigmond körtér (M4-es metró, 6-os villamos, 7-es busz, 19-es villamos, 41-es villamos, 47-es villamos, 49-es villamos)', TRUE, 200, '5:00-23:00', 47.477323272765794, 19.047051394186987, 'https://maps.app.goo.gl/fd7wdgKJ9s5nC7pVA'),
('Oktogon Nyilvános Mosdó', 'VI. kerület', 'Oktogon (M1-es metró, 4-es villamos, 6-os villamos)', TRUE, 200, '5:00-23:00', 47.505250575621616, 19.061415791523817, 'https://maps.app.goo.gl/HeNeMXcNwu2ZPzKH8'),
('Hősök tere Nyilvános Mosdó', 'XIV. kerület', 'Hősök tere (M1-es metró, 75-ös troli, 79-es troli)', TRUE, 250, '6:00-20:00', 47.51373662991904, 19.080080605229554, 'https://maps.app.goo.gl/LbgvLsMUJSdDE7Sq9'),
('Népliget Nyilvános Mosdó', 'X. kerület', 'Népliget (M3-as metró, 1-es villamos)', TRUE, 200, '5:00-23:00', 47.47544930399268, 19.09925596186508, 'https://maps.app.goo.gl/Qsq5sFJRfqKmB5Er7'),
('Kelenföldi Pályaudvar Nyilvános Mosdó', 'XI. kerület', 'Kelenföldi Pályaudvar (M4-es metró, 19-es villamos, 49-es villamos)', TRUE, 250, '6:00-20:00', 47.463951751942105, 19.023199196825974, 'https://maps.app.goo.gl/ofKLMzZePzkQDRv97'),
('Újpest-Központ Nyilvános Mosdó', 'IV. kerület', 'Újpest-Központ (M3-as metró, 12-es villamos, 14-es villamos)', TRUE, 200, '5:00-23:00', 47.56152337335255, 19.09003531432967, 'https://maps.app.goo.gl/j3hEnc35djGJR3tx6'),
('Puskás Ferenc Stadion Nyilvános Mosdó', 'XIV. kerület', 'Puskás Ferenc Stadion (M2-es metró, 1-es villamos)', TRUE, 250, '6:00-20:00', 47.50357893256982, 19.10278532843446, 'https://maps.app.goo.gl/obJbWh81c7TSnwXC7'),
('Köki Terminál Nyilvános Mosdó', 'XIX. kerület', 'Köki Terminál (M3-as metró, 200E busz)', TRUE, 200, '5:00-23:00', 47.46277428339623, 19.14711616498906, 'https://maps.app.goo.gl/EJvn53JsSUwQNuRo6'),
('Bikás park Nyilvános Mosdó', 'XI. kerület', 'Bikás park (M4-es metró, 7E busz, 103-as busz)', TRUE, 200, '5:00-23:00', 47.46569504698277, 19.029679418269968, 'https://maps.app.goo.gl/WVxmBkv5cVp3z2ZG9');

