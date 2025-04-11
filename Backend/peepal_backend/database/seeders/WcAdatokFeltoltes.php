<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WcAdatokFeltoltes extends Seeder
{
    public function run(): void
    {
        $wcAdatok = [
            [
                'nev' => 'Déli Pályaudvar Nyilvános Mosdó',
                'kerulet_id' => 1,
                'kozeli_megall' => 'Déli Pályaudvar (M2-es metró, 2-es villamos, 4-es villamos, 18-as villamos, 59-es villamos, 61-es villamos)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.50025507357977,
                'szel_koord' => 19.025074759382747,
                'utvonal' => 'https://maps.app.goo.gl/X3TSMUwhTV4fALyd6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Nyugati Pályaudvar Nyilvános Mosdó',
                'kerulet_id' => 6,
                'kozeli_megall' => 'Nyugati Pályaudvar (M3-as metró, 4-es villamos, 6-os villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.510861527052484,
                'szel_koord' => 19.057794223722723,
                'utvonal' => 'https://maps.app.goo.gl/z73zXwGX6HxkPNQu8',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Keleti Pályaudvar Nyilvános Mosdó',
                'kerulet_id' => 8,
                'kozeli_megall' => 'Keleti Pályaudvar (M2-es metró, M4-es metró, 7-es busz, 30-as busz, 78-as busz)',
                'akadalym' => true,
                'ar' => 300,
                'nyitva' => '0:00-24:00',
                'hossz_koord' => 47.499972,
                'szel_koord' => 19.082667,
                'utvonal' => 'https://maps.app.goo.gl/YBY2qVcbxZ9ebc7t8',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Margitszigeti Nyilvános Mosdó',
                'kerulet_id' => 13,
                'kozeli_megall' => 'Margitsziget (26-os busz)',
                'akadalym' => true,
                'ar' => 150,
                'nyitva' => '7:00-22:00',
                'hossz_koord' => 47.518553,
                'szel_koord' => 19.044224,
                'utvonal' => 'https://maps.app.goo.gl/V8azExcDm1weqrBU6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Városligeti Nyilvános Mosdó',
                'kerulet_id' => 14,
                'kozeli_megall' => 'Városliget (70-es troli, 75-ös troli, 79-es troli)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '6:00-21:00',
                'hossz_koord' => 47.51098933275473,
                'szel_koord' => 19.086019177929227,
                'utvonal' => 'https://maps.app.goo.gl/yMVYSfZqQ9U7ZHLTA',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Széll Kálmán téri Nyilvános Mosdó',
                'kerulet_id' => 2,
                'kozeli_megall' => 'Széll Kálmán tér (M2-es metró, 4-es villamos, 6-os villamos, 17-es villamos, 56-os villamos, 59-es villamos, 61-es villamos)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.50740741462604,
                'szel_koord' => 19.024610790375228,
                'utvonal' => 'https://maps.app.goo.gl/Mjip13V5G4BN8rPj6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Blaha Lujza téri Nyilvános Mosdó',
                'kerulet_id' => 8,
                'kozeli_megall' => 'Blaha Lujza tér (M2-es metró, 4-es villamos, 6-os villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.496403892547505,
                'szel_koord' => 19.068833611658484,
                'utvonal' => 'https://maps.app.goo.gl/GuoNNjJjXcRW3914A',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Astoria Nyilvános Mosdó',
                'kerulet_id' => 5,
                'kozeli_megall' => 'Astoria (M2-es metró, 7-es busz, 8E busz, 112-es busz)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.494151232460275,
                'szel_koord' => 19.05985662145968,
                'utvonal' => 'https://maps.app.goo.gl/TW2ZwH7YiMpMMzSb7',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Kálvin téri Nyilvános Mosdó',
                'kerulet_id' => 9,
                'kozeli_megall' => 'Kálvin tér (M3-as metró, M4-es metró, 47-es villamos, 48-as villamos, 49-es villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.48960659445002,
                'szel_koord' => 19.061634424103033,
                'utvonal' => 'https://maps.app.goo.gl/TXY9EZdqfG2tXMru6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Fővám téri Nyilvános Mosdó',
                'kerulet_id' => 9,
                'kozeli_megall' => 'Fővám tér (M4-es metró, 47-es villamos, 48-as villamos, 49-es villamos)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.4861911566426,
                'szel_koord' => 19.059586662994935,
                'utvonal' => 'https://maps.app.goo.gl/WH3fCiWs8vnckFRz6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Deák Ferenc téri Nyilvános Mosdó',
                'kerulet_id' => 5,
                'kozeli_megall' => 'Deák Ferenc tér (M1-es metró, M2-es metró, M3-as metró, 47-es villamos, 48-as villamos, 49-es villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.498069146347675,
                'szel_koord' => 19.053907077736074,
                'utvonal' => 'https://maps.app.goo.gl/aGpFrnKszDEFeYdt7',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Ferenciek tere Nyilvános Mosdó',
                'kerulet_id' => 5,
                'kozeli_megall' => 'Ferenciek tere (M3-as metró, 7-es busz, 8E busz, 112-es busz)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.4931164079512,
                'szel_koord' => 19.055890504323266,
                'utvonal' => 'https://maps.app.goo.gl/6PfPvTVxSipzBhuZ7',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Kossuth Lajos téri Nyilvános Mosdó',
                'kerulet_id' => 5,
                'kozeli_megall' => 'Kossuth Lajos tér (M2-es metró, 2-es villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.505472668809034,
                'szel_koord' => 19.046749164211178,
                'utvonal' => 'https://maps.app.goo.gl/EKAQR7uj5LVsZy4x5',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Batthyány téri Nyilvános Mosdó',
                'kerulet_id' => 5,
                'kozeli_megall' => 'Batthyány tér (M2-es metró, 19-es villamos, 41-es villamos)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.50660730946977,
                'szel_koord' => 19.039155411436823,
                'utvonal' => 'https://maps.app.goo.gl/t8hinEkANUqhMWRw5',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Móricz Zsigmond körtéri Nyilvános Mosdó',
                'kerulet_id' => 9,
                'kozeli_megall' => 'Móricz Zsigmond körtér (M4-es metró, 6-os villamos, 7-es busz, 19-es villamos, 41-es villamos, 47-es villamos, 49-es villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.477323272765794,
                'szel_koord' => 19.047051394186987,
                'utvonal' => 'https://maps.app.goo.gl/fd7wdgKJ9s5nC7pVA',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Oktogon Nyilvános Mosdó',
                'kerulet_id' => 6,
                'kozeli_megall' => 'Oktogon (M1-es metró, 4-es villamos, 6-os villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.505250575621616,
                'szel_koord' => 19.061415791523817,
                'utvonal' => 'https://maps.app.goo.gl/HeNeMXcNwu2ZPzKH8',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Hősök tere Nyilvános Mosdó',
                'kerulet_id' => 14,
                'kozeli_megall' => 'Hősök tere (M1-es metró, 75-ös troli, 79-es troli)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.51373662991904,
                'szel_koord' => 19.080080605229554,
                'utvonal' => 'https://maps.app.goo.gl/LbgvLsMUJSdDE7Sq9',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Népliget Nyilvános Mosdó',
                'kerulet_id' => 10,
                'kozeli_megall' => 'Népliget (M3-as metró, 1-es villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.47544930399268,
                'szel_koord' => 19.09925596186508,
                'utvonal' => 'https://maps.app.goo.gl/Qsq5sFJRfqKmB5Er7',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Kelenföldi Pályaudvar Nyilvános Mosdó',
                'kerulet_id' => 11,
                'kozeli_megall' => 'Kelenföldi Pályaudvar (M4-es metró, 19-es villamos, 49-es villamos)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.463951751942105,
                'szel_koord' => 19.023199196825974,
                'utvonal' => 'https://maps.app.goo.gl/ofKLMzZePzkQDRv97',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Újpest-Központ Nyilvános Mosdó',
                'kerulet_id' => 4,
                'kozeli_megall' => 'Újpest-Központ (M3-as metró, 12-es villamos, 14-es villamos)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.56152337335255,
                'szel_koord' => 19.09003531432967,
                'utvonal' => 'https://maps.app.goo.gl/j3hEnc35djGJR3tx6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Puskás Ferenc Stadion Nyilvános Mosdó',
                'kerulet_id' => 14,
                'kozeli_megall' => 'Puskás Ferenc Stadion (M2-es metró, 1-es villamos)',
                'akadalym' => true,
                'ar' => 250,
                'nyitva' => '6:00-20:00',
                'hossz_koord' => 47.50357893256982,
                'szel_koord' => 19.10278532843446,
                'utvonal' => 'https://maps.app.goo.gl/obJbWh81c7TSnwXC7',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Köki Terminál Nyilvános Mosdó',
                'kerulet_id' => 19,
                'kozeli_megall' => 'Köki Terminál (M3-as metró, 200E busz)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.46277428339623,
                'szel_koord' => 19.14711616498906,
                'utvonal' => 'https://maps.app.goo.gl/EJvn53JsSUwQNuRo6',
                'felhasznalo_id' => 1
            ],
            [
                'nev' => 'Bikás park Nyilvános Mosdó',
                'kerulet_id' => 11,
                'kozeli_megall' => 'Bikás park (M4-es metró, 7E busz, 103-as busz)',
                'akadalym' => true,
                'ar' => 200,
                'nyitva' => '5:00-23:00',
                'hossz_koord' => 47.46569504698277,
                'szel_koord' => 19.029679418269968,
                'utvonal' => 'https://maps.app.goo.gl/WVxmBkv5cVp3z2ZG9',
                'felhasznalo_id' => 1
            ],
        ];

        foreach ($wcAdatok as $data) {
            DB::table('wc_adatok')->insert($data);
        }
    }
}
