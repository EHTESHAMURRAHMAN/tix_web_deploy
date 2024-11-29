'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9d1122ef75fff5d185c6b8cea8c6136d",
"index.html": "becf4150582be37e3311bab15f889cc8",
"/": "becf4150582be37e3311bab15f889cc8",
"main.dart.js": "fec938363d1a1b0bc95f263034b631cc",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "072930cb3e140848c8a3343796362497",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c0ddc887589e4826e8a1bb559a602482",
"assets/AssetManifest.json": "342ce4ff5d5d8b558f77f133c19563f6",
"assets/NOTICES": "6717533e617cc9bfba05375fe5cc483f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "402b525ad371ea234a63ffa418a9dbed",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "00cf4dc24b016bc311c417c3db24ca3f",
"assets/fonts/MaterialIcons-Regular.otf": "a6fa84f4148b4f5efa6a4c446fc6a5b6",
"assets/assets/tix_terms.pdf": "6d0fbcedb6ed853b185ff67f5a6a971b",
"assets/assets/images/gfx-a.png": "9c42657fa315f5d2ee851dc202bb8832",
"assets/assets/images/sline.png": "a3d7e26d95b3fee1e0a4f9ea7115e45e",
"assets/assets/images/launchloago.png": "a3d7e26d95b3fee1e0a4f9ea7115e45e",
"assets/assets/images/slogo.png": "a3d7e26d95b3fee1e0a4f9ea7115e45e",
"assets/assets/SVG_Icons/Ic_share.svg": "e70256dcb9f0b70b914854ba13b7ec44",
"assets/assets/SVG_Icons/IC_Qr_code.svg": "3dee91def18c2a207bc87c91de0f2cc9",
"assets/assets/SVG_Icons/Ic_arrow_back.svg": "7a6159fc4600d07288f75a426c59b2a3",
"assets/assets/SVG_Icons/Ic_add.svg": "e7d4fe55ee12ff55cc44e5d35ea1116a",
"assets/assets/SVG_Icons/Ic_lifebuoy.svg": "868e1dc4ea1be086d232fc65604dec91",
"assets/assets/SVG_Icons/Ic_account_mail.svg": "fd0c6a9843b355026f66125196c68e25",
"assets/assets/SVG_Icons/Ic_more_vert.svg": "0ad865d18cf44567ac6c0a5872722f19",
"assets/assets/SVG_Icons/Ic_arrow_forward.svg": "c437085b9b92b0f9b24b940b0809dee1",
"assets/assets/SVG_Icons/Ic_arrow_right.svg": "8cf70a70eb4b0778f3b3ba3bedb9b2db",
"assets/assets/SVG_Icons/Ic__arrow_down.svg": "1a9860d5b730ce89612661b91e9ebecf",
"assets/assets/SVG_Icons/Ic_arrow_drop_down.svg": "16a26295c5091eb8607e987935b0fad1",
"assets/assets/SVG_Icons/Ic_menu.svg": "4d04b20b3275871f15e5a2173ed34080",
"assets/assets/SVG_Icons/Ic_arrow_down.svg": "06a37339718296d592d75f0946bc4449",
"assets/assets/SVG_Icons/Ic_google_play.svg": "575583f72a9fa3670d2f3efa60d3a546",
"assets/assets/SVG_Icons/Ic_dollar.svg": "0ceee243cece322a05017b57fa25408a",
"assets/assets/SVG_Icons/Ic_telegram.svg": "db2d4ed9c7a846dff915124699323aa6",
"assets/assets/SVG_Icons/Ic_arrow_up.svg": "95f2d5f6b0686308170887ec9758d797",
"assets/assets/SVG_Icons/Ic_loop.svg": "90119e5c868a2c54e2c247c0fd38aec7",
"assets/assets/icons/premium1.png": "2d8e5e92943588e3141d8c849f118162",
"assets/assets/icons/gift_icon.png": "8e72ea80b2ee916c8d2bc463a1c7e0a3",
"assets/assets/icons/startp2.png": "77b881c52c78d5dc38dd7d8fea5635c5",
"assets/assets/icons/ethereum_logo.png": "a3d7e26d95b3fee1e0a4f9ea7115e45e",
"assets/assets/icons/fullNode.jpeg": "14fe10a56c0ab480d6556bd37eef31c8",
"assets/assets/icons/SuperNode.jpeg": "c0db455257df1056e3225130d52988f9",
"assets/assets/icons/load.png": "b50e69af9d3f2466be39fe2389d24994",
"assets/assets/icons/ic_etherium.png": "a3d7e26d95b3fee1e0a4f9ea7115e45e",
"assets/assets/icons/donateIMG!.jpeg": "e935d391bdc101f4d820c20e1d8f168f",
"assets/assets/icons/startp1.png": "22678c3f5e5484a5becd329293817f90",
"assets/assets/icons/finalRed.png": "91d211b6500097cb351346b72aafcd2d",
"assets/assets/icons/sp_logo.png": "125b5d827b780cd4ebca38fced02dd39",
"assets/assets/icons/donationBg.png": "f762a7a6fc1fae548a7e733d939decce",
"assets/assets/icons/stake1.png": "6656b51dd36f38170201b0f56ee64b4d",
"assets/assets/icons/server.png": "b1fca0e640f1116c275348e88781349a",
"assets/assets/icons/vote.png": "7a86acc501e189961be16dfd6ba91190",
"assets/assets/icons/Wallpaper.jpg": "52d258449d3ecf48a92f8202f49a0630",
"assets/assets/icons/store.png": "24d16c7415b423ef388e8967deb27ace",
"assets/assets/icons/health.png": "8323a484761437a1e938e25678943d69",
"assets/assets/icons/institutional.png": "169477456c7d50dfee2552e4d2a38586",
"assets/assets/icons/DonateIMG2.jpeg": "b2d008a9b9636339952c0a1a7cd601d7",
"assets/assets/icons/courses.png": "7075f6d549167b453031128c7b2371b4",
"assets/assets/icons/whitelist.png": "f2118f1f69a5462d4704e9370075456e",
"assets/assets/icons/community.png": "a6e3f9c03098845b2722a31c99d0269c",
"assets/assets/icons/renew.png": "88bd6e039015ed652a3ffd6e45514fac",
"assets/assets/icons/miningBG.jpg": "d54c28fd861be6431a112afac592da97",
"assets/assets/icons/ic_globe.png": "40ca02620a8b3825d62e076f544bfeda",
"assets/assets/icons/1inch.png": "60cf005c976ce88c93d5140ec47b2d3d",
"assets/assets/icons/institute.jpg": "0a370f459cc5ce386f038a9d6bfa3c29",
"assets/assets/icons/kyc.png": "518df7439ac25d3bcf63d8d0b727b246",
"assets/assets/icons/Pancakeswap.png": "bcc5271f9dea2e11df6ec3772b2e55d1",
"assets/assets/icons/DonateIMG3.jpeg": "07251a7e9dbf0ef52dcbfbf9c4737dfb",
"assets/assets/icons/Trading.png": "9e01a73242c79e84a1aafc32f4baba8d",
"assets/assets/icons/clebrate.png": "cad85a09788bcf77c4bf42443be7d578",
"assets/assets/icons/finger_print.png": "9ddbf90cb99e0544edbdb84b3fb2921d",
"assets/assets/icons/run.png": "d9d5f7e5da715aa4048220754942399a",
"assets/assets/icons/bannerbtc.jpeg": "0276e5bc22b6c5ceea0e0125d28ff0b0",
"assets/assets/icons/referral1.png": "342bdbad4bebd3a5b0f87899e7a73e69",
"assets/assets/icons/cash_share.png": "602a6af08f9cf8af70830c838b5a321e",
"assets/assets/icons/redIcon.png": "49335df9ad50bce7f299e43612c8392f",
"assets/assets/icons/ic_fingerprint.png": "f009083fb09889411055e289dff33c3e",
"assets/assets/icons/logo.png": "1068a735c883efc762fef591d4151106",
"assets/assets/icons/profits.png": "552db430599f916c6be86737cdee09cc",
"assets/assets/icons/gift.png": "df1ba4e345d9ce5c70bcc0c15dd6b0f9",
"assets/assets/icons/Yearn.png": "3917c10463654b7ed4a5a50f829c7bd1",
"assets/assets/icons/30Stake.png": "e56a84c0c5264de19e240877444b57aa",
"assets/assets/icons/Uniswap.png": "60c858d545643c30f32fccd868e7801b",
"assets/assets/icons/foundation.png": "c3788d330ac4ce4666babdf9aef98bf7",
"assets/assets/icons/waiting.png": "62c80f810e7fdc1ee7f33ce9640c7291",
"assets/assets/icons/CoinMarketCap.png": "d054e73a56a0e6d47d45404403e81822",
"assets/assets/icons/Explorerbackground.jpeg": "75b09243e73c84194da3fa629ecc59f6",
"assets/assets/icons/Sushi.png": "0de630ff4479cb5deea760d4d66f93f2",
"assets/assets/icons/redenvelopeWallapaper.jpg": "42dead1575022d80db88762341c760ac",
"assets/assets/icons/fitness.png": "f11ad5035e77e9801f06033c796121b7",
"assets/assets/icons/mining.png": "9bcc9df6fbd815df2d7455348d143e89",
"assets/assets/icons/btcbanner.png": "8bdae65eecb87a1871d7a8f5b1eb37d5",
"assets/assets/icons/legacyBG.jpg": "fed074b5880f435fa7b4cbd985eed39f",
"assets/assets/icons/donation.png": "1cbf59304ddac6fb5349cc5cca7d76f4",
"assets/assets/icons/bg.jpeg": "2e134f843ac33862976afafe1d041b6a",
"assets/assets/icons/crown.png": "f94a7e6108af41760b390b0ac4f0f16f",
"assets/assets/icons/Curve.png": "83bddb360bfc46171eba9d36881b8eb5",
"assets/assets/icons/back.png": "cf0415af56d662e6ff22eb99ddd5370c",
"assets/assets/icons/front.png": "3ea4b333258653bf7caecb11b0ae6f54",
"assets/assets/icons/openBox.png": "01811f9d45fe2be4052aa15da6390491",
"assets/assets/icons/red.png": "c285a681795465dcb5f6f9b08e6dae38",
"assets/assets/icons/donationhand.png": "89471c795bec0042469b7db65e7f103d",
"assets/assets/tix_privacy.pdf": "bdd5dfe103b49b66aed43805e46dca63",
"assets/assets/icon/doge@2x.png": "fb74d36c2bbab10b748f419b55ba67ed",
"assets/assets/icon/edo@2x.png": "6a519b219bd081823756aaa121f23bda",
"assets/assets/icon/matic@2x.png": "6b6bd6693723335530013d5c4571148d",
"assets/assets/icon/polis@2x.png": "b0316878d138293eb801ec1582862cf5",
"assets/assets/icon/data@2x.png": "43c74c18aaa12e0ffb2aac4617d5094b",
"assets/assets/icon/poe@2x.png": "c5b758f9c983c073917352b6d9d5d37d",
"assets/assets/icon/start@2x.png": "9d6ca16dd74f264f593ec12634cb784a",
"assets/assets/icon/rdn@2x.png": "9024cf30500ca8f5ee8d8f8af7ca8744",
"assets/assets/icon/sberbank@2x.png": "62fd156b6a4237802b2837a325395ff0",
"assets/assets/icon/ubq@2x.png": "207d5c255d476fb0b8ecb0695635bd7f",
"assets/assets/icon/nmc@2x.png": "1da80625a57a2c767b3084d8ccc1a663",
"assets/assets/icon/payx@2x.png": "80bb8defb03aec3724ad34ec8af21ab4",
"assets/assets/icon/bab@2x.png": "6248deb4a07e3a139d27ea092a8bae45",
"assets/assets/icon/dtr@2x.png": "4eb12b7ceeef7da7c6c2b053e664eb88",
"assets/assets/icon/dcn@2x.png": "ec702e76d0b4cfdeb9d5c8d5c97c6acd",
"assets/assets/icon/pink@2x.png": "e8380916d77062cf38b8016f28d3b3d1",
"assets/assets/icon/zcl@2x.png": "ea8c54362a1db5a2a5eb7354f1a3f486",
"assets/assets/icon/one@2x.png": "251d41f5f88ab0086af708530f76ce8a",
"assets/assets/icon/trx@2x.png": "5e4938a6abb8de2819f1461d70b17a81",
"assets/assets/icon/miota@2x.png": "5bae3f80967387ab3e4a3c6fda076f7d",
"assets/assets/icon/amp@2x.png": "629a6a47b0c793cee9cb55ee23c03ef5",
"assets/assets/icon/grin@2x.png": "32fec57d850e27bbf4100d2912fc566a",
"assets/assets/icon/algo@2x.png": "77df104ea1a492056570e1724911f864",
"assets/assets/icon/krb@2x.png": "fc74fb11ea57ed5e010d002f1b292627",
"assets/assets/icon/0xbtc@2x.png": "0e281db84409e2425df1a9dc8c5308f2",
"assets/assets/icon/html@2x.png": "ca7d0130fca47562b4dcf454a4261998",
"assets/assets/icon/zec@2x.png": "369bea58e73e7a26f4677f18233d971c",
"assets/assets/icon/vib@2x.png": "dce5fd9e0bd67dad1f42f66cc0fca091",
"assets/assets/icon/qlc@2x.png": "134a5a7782c8ebc64684dcb1a6be9203",
"assets/assets/icon/lbc@2x.png": "0398d966a3535f4f6385a7ede87d802e",
"assets/assets/icon/rpx@2x.png": "29bab058150eb589d65a9f0106791ac2",
"assets/assets/icon/mana@2x.png": "60c845e375848251b3e0a004d59e8f27",
"assets/assets/icon/aeon@2x.png": "6842c8243ba9806c81ac8e22621cc097",
"assets/assets/icon/eos@2x.png": "bcd604052be20fac2331a10f49523a18",
"assets/assets/icon/mod@2x.png": "8757d00c7240776941b5819b93194e02",
"assets/assets/icon/xas@2x.png": "7d01c0e44b90f509ffb9811060e91c1d",
"assets/assets/icon/qtum@2x.png": "c4b1206f5e6942eca2f4bcb654448a9e",
"assets/assets/icon/emc@2x.png": "664c3edda9a4e01d9e752cdbaa286a53",
"assets/assets/icon/ast@2x.png": "77b6721404c8688d70809b1d6add0896",
"assets/assets/icon/xdn@2x.png": "6b1d3040d90687e3071f4e1087831865",
"assets/assets/icon/husd@2x.png": "6f9fe7a339820fd99673d16e661f2ab2",
"assets/assets/icon/wax@2x.png": "eec5c4fc1aa8e667ac432f698bd35c8e",
"assets/assets/icon/powr@2x.png": "e0de47b2c990d9202f748b95c8a7d1d2",
"assets/assets/icon/add@2x.png": "3abb7a6ce385b350dac7abcb3b507b1d",
"assets/assets/icon/ht@2x.png": "99a3cf348335907260fadcf98b3e071b",
"assets/assets/icon/hush@2x.png": "a377e8df5cd0108d4b7f4b6612e901e2",
"assets/assets/icon/kmd@2x.png": "fbf4bb98715975e5305106d1aada0a9a",
"assets/assets/icon/ela@2x.png": "26c6658334901f0f12c448d8b94a3153",
"assets/assets/icon/xvc@2x.png": "3147829058d4e82b458a67bb7d47256f",
"assets/assets/icon/xrp@2x.png": "d6403a1af75f4f9f4189a35c86591026",
"assets/assets/icon/vrc@2x.png": "b5da8fd8a30ef5ba59b4f0639f96d6b3",
"assets/assets/icon/cred@2x.png": "0968311bcf3a275807f7d43166f1f969",
"assets/assets/icon/sky@2x.png": "100de0fb0ad612454df6249ca2042084",
"assets/assets/icon/atm@2x.png": "e56ffc148e3d39e62133f55ebf849c9f",
"assets/assets/icon/pivx@2x.png": "b31b5729739a19599d0b7ae43c5b0cf8",
"assets/assets/icon/tpay@2x.png": "9508134e76c8e0f4a5c2cdae8e4e9129",
"assets/assets/icon/clam@2x.png": "1038f29fbbddeffe73d5dbbafda85fda",
"assets/assets/icon/arn@2x.png": "2e70bc310b97b80c7315ff7238324372",
"assets/assets/icon/bix@2x.png": "e4dc8a70ad15e1cbfe29175416d268fa",
"assets/assets/icon/cix@2x.png": "fba63fb55f8471b6cd242c86c9f2c9b8",
"assets/assets/icon/wabi@2x.png": "1767d617a428ebf43282718024345b78",
"assets/assets/icon/hight@2x.png": "62d0259ff161eaad952c38b50f7c62aa",
"assets/assets/icon/xby@2x.png": "23cffbb7a4a182616892d3b2ed0a8bef",
"assets/assets/icon/mln@2x.png": "e135f8927474e5fcbb43b856ca30e8c9",
"assets/assets/icon/cny@2x.png": "6ff860bb84cb8f0090ea3056dc233968",
"assets/assets/icon/tgch@2x.png": "2da9c60f7f9b3f434efd9ef015b2ecea",
"assets/assets/icon/tnt@2x.png": "8297a84baf3864872b4b5f513e87343a",
"assets/assets/icon/neu@2x.png": "f0c9cb4c1a99ed3bc406a8611934b1d2",
"assets/assets/icon/spacehbit@2x.png": "09de3183f79a6d5d08194b263c678547",
"assets/assets/icon/2give@2x.png": "c4ecbd00ca909fd7374fb56a2261dbdd",
"assets/assets/icon/ppc@2x.png": "30cbf66730626b12b5fbcc3ffd4fb2dd",
"assets/assets/icon/xbc@2x.png": "8c5b69833b2de76d59de6d4c4b8b303f",
"assets/assets/icon/bela@2x.png": "533e513a5dd88eab9b74ea329820dad4",
"assets/assets/icon/pre@2x.png": "d38918cc89bc078eef7c6cdc4c7866b1",
"assets/assets/icon/tnb@2x.png": "effc442884e378fce7d736f7da6a1a8a",
"assets/assets/icon/icp@2x.png": "dbde8b2f150951f51bbc117b3127266d",
"assets/assets/icon/neo@2x.png": "cbe61ecf605a9422a6dc004eb4368500",
"assets/assets/icon/steem@2x.png": "291d7653b2638250b201b37ae212a04e",
"assets/assets/icon/jnt@2x.png": "b205fc9b7e72cabfc8e5be33bdc9bf9c",
"assets/assets/icon/gold@2x.png": "cb231a55a56525bcce308c1de08ddc90",
"assets/assets/icon/tks@2x.png": "b08cac8743d36be3633d33d158dc3f49",
"assets/assets/icon/gas@2x.png": "cbe61ecf605a9422a6dc004eb4368500",
"assets/assets/icon/eng@2x.png": "6c04497aa31eb8f228dce06320ecd041",
"assets/assets/icon/repv2@2x.png": "e6f4f12eb0f061a5d8f28a02861b7e65",
"assets/assets/icon/blk@2x.png": "762ff30fd6fc6e725668fc2a86816450",
"assets/assets/icon/shift@2x.png": "60c151d46dce031fc4d45cf30f679d6d",
"assets/assets/icon/theta@2x.png": "30f2c4351fd3d4a5ee42f233e85364f1",
"assets/assets/icon/call@2x.png": "675a7a9ad0325971c5ddf115c2d6b35e",
"assets/assets/icon/music@2x.png": "f0f71bd95704836af54a0cd85838bdc4",
"assets/assets/icon/usdc@2x.png": "a7e7b3c718ebb73992a77f039d5348cf",
"assets/assets/icon/wan@2x.png": "6f5bbbbbe7f3d65151a2e1db61e94062",
"assets/assets/icon/ant@2x.png": "aa681960f5c6cf4c3c7d28af1a251944",
"assets/assets/icon/lpt@2x.png": "1109746a70b9bb371990975adb098d74",
"assets/assets/icon/etp@2x.png": "e77d8526d40fa90dabc30292afb45188",
"assets/assets/icon/ncash@2x.png": "7d4e1541c5f0e3e7b48aa45905f92894",
"assets/assets/icon/fldc@2x.png": "fb8c55dca5a953255b0c7f91f1a77df5",
"assets/assets/icon/stq@2x.png": "402805b551c8ae0c3469e330fbcc08db",
"assets/assets/icon/eur@2x.png": "86d6d1df6fa8002764dc0fa498add8e0",
"assets/assets/icon/generic@2x.png": "74954f57b744c877695b648ff7000979",
"assets/assets/icon/nkn@2x.png": "a672559dfb5c37e3933b718d8a04be86",
"assets/assets/icon/bal@2x.png": "cec8964d433bbf46cfd97179e75adb6f",
"assets/assets/icon/ren@2x.png": "a2708c256bf00b58ffabbf1f53d5bd30",
"assets/assets/icon/btc_icon.png": "4e9838a3c3e37d9470936278b9a398fc",
"assets/assets/icon/ntbc@2x.png": "498ea2c776eff833c50b27f10a3106d5",
"assets/assets/icon/ignis@2x.png": "bd57527be2b2e5a8738c5110ae76506c",
"assets/assets/icon/kcs@2x.png": "412d512a0a850185dbe3c7b950f875a1",
"assets/assets/icon/btx@2x.png": "776f4e926d7d5174d45fc1042429af71",
"assets/assets/icon/bcd@2x.png": "ba45f72b352e7ad626faa08ad6a1c8b5",
"assets/assets/icon/tern@2x.png": "e65b05f48a15cb428656c19919a6b76b",
"assets/assets/icon/mco@2x.png": "5403cf8930b5fdf8d315663dcc55abe8",
"assets/assets/icon/bat@2x.png": "dba8f8fef57eb7a1b6e42ecae0113745",
"assets/assets/icon/eth@2x.png": "767a15d118f5a8353e445d01141930e0",
"assets/assets/icon/dth@2x.png": "72c52504183331302c0aedb9f6531590",
"assets/assets/icon/crw@2x.png": "8b42b79892cb39542668d3c7c3582174",
"assets/assets/icon/npxs@2x.png": "b081a5c2bf574b5afe7fbe3a897733ce",
"assets/assets/icon/msr@2x.png": "641ab6bfa260d9575a52fc8213ff43e1",
"assets/assets/icon/sai@2x.png": "26f4e137ab2d15b8d1e681ebffb1fef4",
"assets/assets/icon/coinxplus@2x.png": "c7e00fa7bf1a80bc95b442619d36aab3",
"assets/assets/icon/bch@2x.png": "594981320a697177707c347419e68853",
"assets/assets/icon/ilk@2x.png": "4134a594f3aa78033a443203910ce824",
"assets/assets/icon/trtl@2x.png": "11d0fc225d48700911c4722dec6e5758",
"assets/assets/icon/gzr@2x.png": "46d307a92c24b2c8151b71b97d205cfc",
"assets/assets/icon/btt@2x.png": "72fd0a829c6a426ad52e9e4b6cd9300e",
"assets/assets/icon/drop@2x.png": "51115a126e5cdfa28bf384c355f85c51",
"assets/assets/icon/sc@2x.png": "687aba9c22497b8a53def4770e219b0e",
"assets/assets/icon/dew@2x.png": "3acd58274be775217e793b4197d4f93d",
"assets/assets/icon/fjc@2x.png": "8a90d220a7f051133732e256ccadbb9a",
"assets/assets/icon/tau@2x.png": "0498b6ea6a80c559deb89a9e6a7e3ca1",
"assets/assets/icon/evx@2x.png": "ac3f9efea875a9e5b8de7011e402128a",
"assets/assets/icon/ong@2x.png": "2a44647f4375503a38e8110d604dae10",
"assets/assets/icon/apex@2x.png": "1ea25a9abcb98c3042e9f06b4dc9cfbe",
"assets/assets/icon/atom@2x.png": "8f17313eeb687e3bba0bb4a0d776dc99",
"assets/assets/icon/cmm@2x.png": "717b1b9604ecaf8aaf8674ef0e3b6bef",
"assets/assets/icon/xuc@2x.png": "0c6fdd71c3916da31df0c68a29dd6021",
"assets/assets/icon/iotx@2x.png": "0cd89d5f35ba8914a07d308a577a9737",
"assets/assets/icon/slr@2x.png": "616711e0f1c44ca485340c41f727f5ea",
"assets/assets/icon/sol@2x.png": "c68ed892667e422474923af1af7b4ae7",
"assets/assets/icon/grt@2x.png": "f37091641df769323d7a8bb4ca20ac7f",
"assets/assets/icon/mnx@2x.png": "9d0e1665fdc2a4fa678a01f52806fe15",
"assets/assets/icon/ok@2x.png": "c4f785db4ba7b4877d2705f038a8d8d4",
"assets/assets/icon/xpr@2x.png": "0c55f3d86c8eceb6aaa15a1fadab0e7d",
"assets/assets/icon/ric@2x.png": "8645bc2e8b363ceb5d9102cec47af90a",
"assets/assets/icon/ngc@2x.png": "85a7e926dcc7bb6e406c73990288e602",
"assets/assets/icon/sngls@2x.png": "6a7e89a171370f7c9a5ff4d514de08e6",
"assets/assets/icon/moac@2x.png": "fbaaca8ddfaeb19a103055826ab825e5",
"assets/assets/icon/oax@2x.png": "4c7f6aea02e6fc0b7298f97fe63d75fb",
"assets/assets/icon/fsn@2x.png": "2c61e7dafc27a23a9985f50cc79e52b6",
"assets/assets/icon/game@2x.png": "8bd38f11e8d0d235260c6d9f1d884dc1",
"assets/assets/icon/ftc@2x.png": "7754ff75862acc639839df84178fccdc",
"assets/assets/icon/zil@2x.png": "22e915571e72ea6ffcd2783860c34481",
"assets/assets/icon/bze@2x.png": "26e984187b8af72f2963f17e0d5b25c4",
"assets/assets/icon/cloak@2x.png": "bb535ea5715c5e8abb712755cae04b8a",
"assets/assets/icon/gto@2x.png": "fa3b71bf62f6040be9d0b34bca539b63",
"assets/assets/icon/pasl@2x.png": "ef282e713af9c6cac70886c1afa5a6bf",
"assets/assets/icon/drgn@2x.png": "aeb4602f192c03868df34f12d2b6846f",
"assets/assets/icon/chips@2x.png": "fefc205e2eb7395bb7120c93c4e17852",
"assets/assets/icon/icx@2x.png": "ede09490ad7901070490e789aec8425f",
"assets/assets/icon/sushi@2x.png": "c44ba006347b00deff161805429e61b6",
"assets/assets/icon/storm@2x.png": "cbd623b839cb699d90b1e54b9a3a1358",
"assets/assets/icon/gnt@2x.png": "4bc5c4bc1ef5f3957b27f3f4a3afa2ee",
"assets/assets/icon/med@2x.png": "768747d0c9e577b8c39321f3fd5b70d7",
"assets/assets/icon/ten@2x.png": "b8e0d5e1eb6132562e354bf01804ecdf",
"assets/assets/icon/hns@2x.png": "2d442f830241813b833178244a8d61b6",
"assets/assets/icon/srn@2x.png": "31af43dc290205c80f3dec6bbe8e8bc5",
"assets/assets/icon/ins@2x.png": "73f903f75a98f2d781274890b6f0b8a1",
"assets/assets/icon/dat@2x.png": "70c34d899ae8161ce366520808e5cdea",
"assets/assets/icon/rdd@2x.png": "5aef0cff08520f27c443ed5653dc49e7",
"assets/assets/icon/nlg@2x.png": "8ccf0d7812fa6fbbb85d0cf895354846",
"assets/assets/icon/amb@2x.png": "6c22f0317727f677593978165c822209",
"assets/assets/icon/flux@2x.png": "9b2ace17028d8af06015fb02794d1184",
"assets/assets/icon/usd@2x.png": "f6687b688558485f7013a9a5da714993",
"assets/assets/icon/ink@2x.png": "79cde3db7b5179c90699f0d3d363d114",
"assets/assets/icon/ltc@2x.png": "6ee9177ade6b0548a05a93bb4d1941a6",
"assets/assets/icon/smart@2x.png": "ee8cd6b011ce3ff6173b9e2b043a0829",
"assets/assets/icon/gmr@2x.png": "6454415264cb9833c2eea3203d292ba0",
"assets/assets/icon/chat@2x.png": "ec1cd6eda7860a45bd1f0536447dda9a",
"assets/assets/icon/poly@2x.png": "0d45ea63809635340125b28a27d57bd0",
"assets/assets/icon/rep@2x.png": "d4c66b18dba9aeb041b10677a4f316cd",
"assets/assets/icon/nebl@2x.png": "192cea47dd28bf091d54aeb7ae22cbe7",
"assets/assets/icon/band@2x.png": "e3d37d518670b753e17704ba3331efdb",
"assets/assets/icon/tel@2x.png": "bb8e182221b8bbd456ddbdad20e91c48",
"assets/assets/icon/fair@2x.png": "c8cae6f51b5c132b6ef644a9ef4b7d9b",
"assets/assets/icon/mft@2x.png": "36d6d761efde782eba1289e78638b8e2",
"assets/assets/icon/qash@2x.png": "0ccd6e90df2abd3cd966a87e79f94051",
"assets/assets/icon/ctr@2x.png": "bcb15a297b2c85671a05633382516a8e",
"assets/assets/icon/maid@2x.png": "cd91465afe471acdd3748e1d2757e83b",
"assets/assets/icon/aion@2x.png": "918810decfdf98d2ac546626029a2d1e",
"assets/assets/icon/bcn@2x.png": "abb6eeec51b0822c15e6183b4ad4cefc",
"assets/assets/icon/nxs@2x.png": "1d2243559daecb54221a81755ea93988",
"assets/assets/icon/meetone@2x.png": "b9fb133e8050fbbcd29a320c9623e3ec",
"assets/assets/icon/dcr@2x.png": "896a0199c2ab29a557c5b2a7bdedebf9",
"assets/assets/icon/etn@2x.png": "050652c7ad4a1060d2a59011232a2d1b",
"assets/assets/icon/xmr@2x.png": "2cde5560bda854954b009d75c9b7eded",
"assets/assets/icon/omg@2x.png": "103ca62978539c104da88bc020b20b62",
"assets/assets/icon/vtho@2x.png": "bd021f097179806de1453bdc08530b20",
"assets/assets/icon/ethos@2x.png": "4de71defd114081f3ede9d37ef614c29",
"assets/assets/icon/rads@2x.png": "cc0cbc3455298b9d2716098d15d2135e",
"assets/assets/icon/burst@2x.png": "fa8f2b3204e17bc368df57e69116b8b7",
"assets/assets/icon/edg@2x.png": "059b66a365c93dc996df3075cef64f22",
"assets/assets/icon/yoyow@2x.png": "52cbd8f654bf949c980d5294b12894cc",
"assets/assets/icon/btdx@2x.png": "763c3fd42872c9a3dcaca96a421cdf49",
"assets/assets/icon/utk@2x.png": "41403e62d43c940dbcf703cb35a1f2a2",
"assets/assets/icon/lend@2x.png": "0e7f297b72aacfd45bb8b39d940328a8",
"assets/assets/icon/dash@2x.png": "59260fa7628ef35c24bb24c3de1574a1",
"assets/assets/icon/wings@2x.png": "e93101d074aa6712561d98b329937c3a",
"assets/assets/icon/poa@2x.png": "f0b0ec819945a7fed82da8b430d5aaae",
"assets/assets/icon/booty@2x.png": "cf95d9bc12e05fe3469b70a746ddfaa0",
"assets/assets/icon/veri@2x.png": "b26cecbc59507f2f53cb81f102485edb",
"assets/assets/icon/lkk@2x.png": "bf6cdc1b91a94fc01c25d202bf3b5a7f",
"assets/assets/icon/pax@2x.png": "c2dfba6050474b708f70fa5e39960d65",
"assets/assets/icon/part@2x.png": "34c51e8d606e60b5e7b370409136bc39",
"assets/assets/icon/icn@2x.png": "362c21f5d4141777963b555a644048ad",
"assets/assets/icon/bos@2x.png": "7792db5dd2e5187313b6982be120b142",
"assets/assets/icon/nexo@2x.png": "a79b592cd9a4704bd8adc24d8d9e5dce",
"assets/assets/icon/neos@2x.png": "b32c02d4627274cef3b0e4832c26a484",
"assets/assets/icon/mnz@2x.png": "4dde423969a4e07a2a53a276ebddc856",
"assets/assets/icon/safe@2x.png": "c60e54f23a8c15c68cb322fd376042d3",
"assets/assets/icon/adx@2x.png": "2e43b4b9e10424122c87eb43aaf042f0",
"assets/assets/icon/sumo@2x.png": "db00b6aacce878c88377324ecc849a99",
"assets/assets/icon/nav@2x.png": "3c94edfaba4d79260266d1df3a7920a0",
"assets/assets/icon/agrs@2x.png": "f9f73b6516524f2b41ed1713609920ca",
"assets/assets/icon/xvg@2x.png": "3bb4af54b600e1b96e142507609cda5e",
"assets/assets/icon/snx@2x.png": "366c132c014c16ca62f0e432155debb2",
"assets/assets/icon/crpt@2x.png": "5d13ce8e37605f2f1bd745792e03d7c1",
"assets/assets/icon/$pac@2x.png": "4d110b963090ad3c4c1382290ba2aae0",
"assets/assets/icon/snt@2x.png": "6459acc0f9287aa01866498917d56758",
"assets/assets/icon/spank@2x.png": "d0d1488cbab4fcacdafc1ce7680b45cb",
"assets/assets/icon/vrsc@2x.png": "0480b72641640592dee0944e06645896",
"assets/assets/icon/wpr@2x.png": "3dd6601801c5e26d93eff2d938181936",
"assets/assets/icon/kin@2x.png": "0517fd5d1ee87b313ad0f436a7481456",
"assets/assets/icon/arnx@2x.png": "cf7197d1553dc64ddce4cc8d472888c3",
"assets/assets/icon/bnt@2x.png": "1acbca2d069c0d79b0f6f34b96f352c0",
"assets/assets/icon/knc@2x.png": "2db453529d6a7d6e9c479569f5d81b75",
"assets/assets/icon/d@2x.png": "8a39be71e68db401681a604bf4a3862a",
"assets/assets/icon/qsp@2x.png": "83eb00b5c71772498d84ee00915d8a12",
"assets/assets/icon/grs@2x.png": "3af519aa0a95f102210cb899230c713d",
"assets/assets/icon/xsg@2x.png": "bcda00621a01d9fe3995eea6f1ad7e84",
"assets/assets/icon/tix@2x.png": "254c84e1fcbb786a5ccc722097414872",
"assets/assets/icon/xp@2x.png": "1cf89036688a5cf2ca1d4efefe9e8245",
"assets/assets/icon/tron@2x.png": "5e4938a6abb8de2819f1461d70b17a81",
"assets/assets/icon/dlt@2x.png": "e3d73b0a5bc76b60c816ca1cbf69d685",
"assets/assets/icon/elix@2x.png": "b2e9d25b181ae1e44cef63c40042e7db",
"assets/assets/icon/ndz@2x.png": "82bb14036e1a10cbc370812c688acd1e",
"assets/assets/icon/cnx@2x.png": "4071daa2c58e64e2db24644c32d523f2",
"assets/assets/icon/gvt@2x.png": "5b8db7957fb37d63c61cad1d376495c0",
"assets/assets/icon/skl@2x.png": "2f06f5c0f240991a97ac896028e20a54",
"assets/assets/icon/equa@2x.png": "eddb12fdd87df5dcfadb1af45f98b357",
"assets/assets/icon/emb@2x.png": "c56d07f7a4d1a0a7589713a66311a7db",
"assets/assets/icon/xpm@2x.png": "4441d97eb4f9f4f645729f90fb0db419",
"assets/assets/icon/bcio@2x.png": "ce679d4a0e2da0ea57179369f3ee5b32",
"assets/assets/icon/usdt@2x.png": "48b61efaa9dd115030c0e0673e1cf991",
"assets/assets/icon/gusd@2x.png": "5ebdb46eabe04e987b7bc3858964a8c7",
"assets/assets/icon/xem@2x.png": "6cc7d5f72a87c7f0ad6e3c8c727fa8dc",
"assets/assets/icon/block@2x.png": "01e0600c9feae631988c9a056aa0861d",
"assets/assets/icon/fct@2x.png": "bc19ef86c4658eab63c27a344d72580b",
"assets/assets/icon/cob@2x.png": "8bcc810e6fada6d4bffbd158e71fde38",
"assets/assets/icon/nas@2x.png": "597c5eca4110960bec74b43e577dce29",
"assets/assets/icon/xpa@2x.png": "32aeea94ccab09f577c92be822c76a63",
"assets/assets/icon/ox@2x.png": "10252e81bbe9eeaca98e1829e31e7ab5",
"assets/assets/icon/itc@2x.png": "486569c6c96aec4a9a78e9e154954f3e",
"assets/assets/icon/tzc@2x.png": "bbcb6ea3cfc1c7983fc870fe1a2beea8",
"assets/assets/icon/btcd@2x.png": "c64d4a1a3f02441d3e9afb5d785dfc06",
"assets/assets/icon/zen@2x.png": "e97b40ba2a4871a5bae33586378a1eae",
"assets/assets/icon/dgd@2x.png": "251fcc56799bf0dd6365da29806a9634",
"assets/assets/icon/storj@2x.png": "fc21082b0513b7a2b001eea31003a218",
"assets/assets/icon/rise@2x.png": "09ec9f06632bf0b6dcbe655840e0d360",
"assets/assets/icon/qiwi@2x.png": "872d1083d187989485809b6a5e03dcfd",
"assets/assets/icon/ksm@2x.png": "0de5866ac8b2e9fda3008c179b7aeb85",
"assets/assets/icon/leo@2x.png": "3a003233489a0f3d40a1e601b1b2f8d9",
"assets/assets/icon/bsv@2x.png": "a369591444bd02bb5456de30f1c6d47c",
"assets/assets/icon/vivo@2x.png": "a2129aca31106889831a307fc190e922",
"assets/assets/icon/mda@2x.png": "f144041d0a726bdc69f884ed0a546535",
"assets/assets/icon/blcn@2x.png": "85015df872ff190255dfec59d635f477",
"assets/assets/icon/btch@2x.png": "ad3126b5ae07724122a28cd8604cc7f1",
"assets/assets/icon/flo@2x.png": "e03219a12cd2c70007d1508639f1abd1",
"assets/assets/icon/btc@2x.png": "c49b1f24351260aa6fdec7ffa2d7e8fa",
"assets/assets/icon/xlm@2x.png": "0864527d77852d18b9bf6994aca8f497",
"assets/assets/icon/rcn@2x.png": "a035b0724879d0181df49324aa306599",
"assets/assets/icon/omni@2x.png": "142641aa4eb7e1ab2369252f99a79ae1",
"assets/assets/icon/ctxc@2x.png": "d6d809491ab5dd54b547f24e50f4bce0",
"assets/assets/icon/xmcc@2x.png": "ff4f4d38cb46f9433e8bc6f549795a0e",
"assets/assets/icon/mth@2x.png": "58ec2d4d106fed8a595c36be6ede23f0",
"assets/assets/icon/btcp@2x.png": "0841302f84a6c8f5b3bd7a30a4372a35",
"assets/assets/icon/xmo@2x.png": "39b5906ad408a7f8e4a8beb57ccaf67b",
"assets/assets/icon/rvn@2x.png": "dc526ad7bfe7d7b8609a2f6d7cc442ee",
"assets/assets/icon/ardr@2x.png": "d9d835fc921439f25f4c080bd3813e6b",
"assets/assets/icon/ion@2x.png": "999be468b71c7e0953073ddfa151872f",
"assets/assets/icon/bq@2x.png": "b707c55bde79e781ae6573675d299788",
"assets/assets/icon/cenz@2x.png": "6a0ae41e1139f82a656d87cdb4fe72af",
"assets/assets/icon/xmy@2x.png": "bddaa30e00486b04c70cf51e99311dff",
"assets/assets/icon/dai@2x.png": "daee1b69acd981a9708e01b434a645e7",
"assets/assets/icon/via@2x.png": "3702cb709940e3a284ac3015d28b0447",
"assets/assets/icon/cs@2x.png": "afdcb69ed820a640dc89ed2c6f3a9eb8",
"assets/assets/icon/hot@2x.png": "9847e3d00afec81c19010093c75c376c",
"assets/assets/icon/wbtc@2x.png": "c2e9ded32a9ef6620e31b0d0a77f5521",
"assets/assets/icon/zel@2x.png": "5c10dfa01bfa775815e1ca8ee492405f",
"assets/assets/icon/crv@2x.png": "a5b4773deee923837d378add8f117069",
"assets/assets/icon/safemoon@2x.png": "71f85a0e3f2cda3bc3d13b6ec862d057",
"assets/assets/icon/oxt@2x.png": "aae5954a07877cc2cbc04e2ad5a4c62f",
"assets/assets/icon/nxt@2x.png": "9fe99118129a56155fb93ed0deff1619",
"assets/assets/icon/bay@2x.png": "bf6c47354f278e5d1d9dcfc9eae5db9e",
"assets/assets/icon/waves@2x.png": "05f44a84437907eee73d5591190da26f",
"assets/assets/icon/eql@2x.png": "556183369c8a9d8ddefb9f6f3797ee5a",
"assets/assets/icon/btm@2x.png": "406f652e9876e88572f1963712483f13",
"assets/assets/icon/dbc@2x.png": "7b0dce6f3fe63455411f70bc373ea035",
"assets/assets/icon/lsk@2x.png": "bcede2d4025196dbefbcdd4add4033ce",
"assets/assets/icon/rap@2x.png": "88bf75f59f348cc24807c93064742832",
"assets/assets/icon/gbyte@2x.png": "ff02755e9a8c2893f9520068197c07cb",
"assets/assets/icon/tusd@2x.png": "cab3db34d74e219ca9884c8c5a88f317",
"assets/assets/icon/ankr@2x.png": "943df3a1c797aad818b65dbba3137570",
"assets/assets/icon/eca@2x.png": "4c147e5f1ee1d7be52d00e938eeda70e",
"assets/assets/icon/sphtx@2x.png": "f525d52a72d7e3a85e832bd80a0f8739",
"assets/assets/icon/link@2x.png": "97c65ebdd3a9d9d1d6c8cdcf2a4b0508",
"assets/assets/icon/gup@2x.png": "1198a20dbe27a9bdc6de319212ab441e",
"assets/assets/icon/stox@2x.png": "f8dbd9acbf2cb7c2a9b69c070766f586",
"assets/assets/icon/enj@2x.png": "eaa949ea7a212eba55de1b97f44c1442",
"assets/assets/icon/vtc@2x.png": "c82e73a1dd9ac4972e7c3755b64511c0",
"assets/assets/icon/yfi@2x.png": "9f707a13ee001b54e139dd6a91728662",
"assets/assets/icon/wtc@2x.png": "ffdce4a0ae6e0938c8d7381d0f8a5d16",
"assets/assets/icon/tnc@2x.png": "d6e4bdf38106da775ceaa273b8f2236c",
"assets/assets/icon/ppt@2x.png": "56811d3e4b9f8191a83a460f2c750704",
"assets/assets/icon/gbx@2x.png": "6c73a4066f1d14e6b9f16f70c8eeaf46",
"assets/assets/icon/coqui@2x.png": "299bb53fc371e7e3dd346de85373da38",
"assets/assets/icon/taas@2x.png": "0a582958227f14568a1a8486df50613d",
"assets/assets/icon/loom@2x.png": "05d6c7df0424aaa86d599ad7fd32c972",
"assets/assets/icon/ryo@2x.png": "2661c652b12d2ed252879c156c3422e9",
"assets/assets/icon/ary@2x.png": "d8a5531b596fba0e82307fb08eb81ce0",
"assets/assets/icon/bnb@2x.png": "070e877321ffc33d6747a1f27e139150",
"assets/assets/icon/eop@2x.png": "f8408160db7cf644a91da85871cc7a6b",
"assets/assets/icon/comp@2x.png": "ab5279f5379831c1a318339bff91b219",
"assets/assets/icon/huc@2x.png": "8376ffebd1c707e5782eaf664698a666",
"assets/assets/icon/r@2x.png": "9398f9d27b00976c4adce307a7fcb019",
"assets/assets/icon/rlc@2x.png": "bde42c4102120c54a01ae88b0abbee7e",
"assets/assets/icon/deez@2x.png": "13461b0c180dd110ae49a822b73bcd7e",
"assets/assets/icon/gxs@2x.png": "888577f817488c027edbc4113fcdd76a",
"assets/assets/icon/cdt@2x.png": "104ea5f0d2584da34c9c0f930ede0ce2",
"assets/assets/icon/cc@2x.png": "6841e799725606873ca3d548502942aa",
"assets/assets/icon/bcpt@2x.png": "66da4a248a8a3acb7cc0282a3a9c64ee",
"assets/assets/icon/fil@2x.png": "fe63a4fc58be085dcc5db50dc4d5c0a2",
"assets/assets/icon/bsd@2x.png": "53222565aff577bea95d1beafb0f48e9",
"assets/assets/icon/stx@2x.png": "265a203af1eaba01daa3826185062048",
"assets/assets/icon/exmo@2x.png": "eea4c1b0ce7f60f44d0a4742fcf5a2a2",
"assets/assets/icon/btcz@2x.png": "759cda842f0f893ed27a6dbd99980dd0",
"assets/assets/icon/mds@2x.png": "e5bbeec13d4e9cf281b11f69146d2bbc",
"assets/assets/icon/oot@2x.png": "1bfc8c725167637dda49b338b25aca25",
"assets/assets/icon/ampl@2x.png": "8c0452341b9602581b84b8f9958530c2",
"assets/assets/icon/glxt@2x.png": "d0658ae060f0982d4889c08f928a372f",
"assets/assets/icon/sand@2x.png": "2a565e9c9e0a7c79b05b0a6a53cfa040",
"assets/assets/icon/nio@2x.png": "0228aa4f34bf4e9a1c10a2f6898bbf83",
"assets/assets/icon/iop@2x.png": "d0e388259e6ff8d6bf3e1539f800e572",
"assets/assets/icon/pungo@2x.png": "b873d317e25480a17ad4567e060cc854",
"assets/assets/icon/dgb@2x.png": "c4b3bdf40f0132330a184cd70f42dbbb",
"assets/assets/icon/salt@2x.png": "46be2c11f86f9ef6612254be61a31b37",
"assets/assets/icon/mona@2x.png": "0261dcd8ede3cc5d58252d4009844821",
"assets/assets/icon/elec@2x.png": "7b9a114e64e9c8b5ae7f6bdeeb0eae49",
"assets/assets/icon/klown@2x.png": "f3eafa37ebba10c1c70b462834b89888",
"assets/assets/icon/rub@2x.png": "48b3213a7c52e2cd1ad609d9f5b5389e",
"assets/assets/icon/pura@2x.png": "14867f216b938e47fbda2062371756d4",
"assets/assets/icon/sub@2x.png": "bfa5163b072e21f2edf1d2fd479b0179",
"assets/assets/icon/xin@2x.png": "cc8bc610c78417c59eae4ee61a3b1acc",
"assets/assets/icon/dta@2x.png": "5bd5cb358b649706b52f6481c39aa1b4",
"assets/assets/icon/zrx@2x.png": "93d5ca112e0041f42ac34b563ae97576",
"assets/assets/icon/jpy@2x.png": "db4565aaddc20a06217f06a8398d1104",
"assets/assets/icon/aeur@2x.png": "b82e8919888336d78535874aba4c8540",
"assets/assets/icon/bdl@2x.png": "2eb02e4cd2a121ed35661f9421061176",
"assets/assets/icon/prl@2x.png": "881a2150d33e7cd062bbd177d934bda5",
"assets/assets/icon/qrl@2x.png": "3fc42f69580703eed7e2021c2a4af96e",
"assets/assets/icon/iq@2x.png": "e25fbcd0070862e9e683f17da8a2eea4",
"assets/assets/icon/dot@2x.png": "771bc628726d7405cf6c5dff4f80ce14",
"assets/assets/icon/gbp@2x.png": "1e4fce91c8eb071e6495b1d2f5dac214",
"assets/assets/icon/wicc@2x.png": "f3401af6b2a5e6f0488ad93795fa6390",
"assets/assets/icon/emc2@2x.png": "5f2375ad4453731123cb2f5c9cc0a6ef",
"assets/assets/icon/ppp@2x.png": "f433c85b35fdde79c756d79ca5b03c94",
"assets/assets/icon/mzc@2x.png": "4bde68e4aff61ac09dc5f24a2d107f29",
"assets/assets/icon/blz@2x.png": "3e6be1c3f409742358eb95123396a53d",
"assets/assets/icon/cmt@2x.png": "a556859e7abae285930c10501206fc00",
"assets/assets/icon/elf@2x.png": "173d5f91a2f6571ae33c7eb34b87439c",
"assets/assets/icon/ost@2x.png": "71392cef8492d43ec98dfa9db6eabaee",
"assets/assets/icon/gsc@2x.png": "3febfc18f5101909abf828ba9b077063",
"assets/assets/icon/rhoc@2x.png": "6b0a161b9e2680c6fa59a047583d144c",
"assets/assets/icon/pirl@2x.png": "055ca98c1de9896d21d736a790037c7a",
"assets/assets/icon/sls@2x.png": "813655ba218017d6621a9b61cc5cda76",
"assets/assets/icon/uma@2x.png": "72343f1d8afe32fd9ec38057a86cd8ff",
"assets/assets/icon/xcp@2x.png": "64a96e85ee81c99e5d353117f675d58e",
"assets/assets/icon/nuls@2x.png": "03d78d970cb3e08a6ab9fb1c6f0af96b",
"assets/assets/icon/iost@2x.png": "a72a08e6bd8cea6b9984c366c6d41cc4",
"assets/assets/icon/sin@2x.png": "3d79a6bba96ca609488c5553017a79b1",
"assets/assets/icon/trig@2x.png": "d47f9a361994975d53a7ce055eaacd47",
"assets/assets/icon/tkn@2x.png": "a2a7cdcb685473bf003028f26e53c7b1",
"assets/assets/icon/exp@2x.png": "80078c904aecc49f35ec9e75cfd46eda",
"assets/assets/icon/sys@2x.png": "54dfa6079a58d73964ece7c7f880b9a2",
"assets/assets/icon/unity@2x.png": "c0aae3e660234582f6e4b2e565a15ce3",
"assets/assets/icon/abt@2x.png": "e2b508b927a1fddd44e95ca3388b24b2",
"assets/assets/icon/sib@2x.png": "f3bcc2799202b99e4a465e324f1c0fd2",
"assets/assets/icon/vet@2x.png": "4e0e1b4f83538bc7b7da9f5767ec1d73",
"assets/assets/icon/hpb@2x.png": "b1ecb3a76d95ef27945d4d189944ed8b",
"assets/assets/icon/agi@2x.png": "7e1a0af43b82733d0a8cc34144d56859",
"assets/assets/icon/wgr@2x.png": "23932baee5318d2b0c59955536b5d2b5",
"assets/assets/icon/bnty@2x.png": "4f804d9e8a8e8ce7aa4037ac36e8c786",
"assets/assets/icon/x@2x.png": "273cef3f6d9a3ff4d5ea968fe3814952",
"assets/assets/icon/ada@2x.png": "e56ed399808f9278ac539c0bd3a15f4c",
"assets/assets/icon/dnt@2x.png": "14f4fe0dbba1733d6228830506ba7f92",
"assets/assets/icon/strat@2x.png": "f25b1ebe0e764d5b9e6ce7e2a40c8433",
"assets/assets/icon/colx@2x.png": "767e2739ff9c8bb867a5a61da6bb878c",
"assets/assets/icon/fun@2x.png": "881923134163d8954a121bb7fc6b833f",
"assets/assets/icon/xtz@2x.png": "c4241cc743600e5642b2153390742878",
"assets/assets/icon/grc@2x.png": "9426cc5a28a8606c64689e39bc6e290c",
"assets/assets/icon/appc@2x.png": "dbc6ccaf93abfade3cb904de314b94ad",
"assets/assets/icon/uni@2x.png": "e5bae643b7c8f7fc23712635bf72e2e9",
"assets/assets/icon/mith@2x.png": "f03ff51b3f7da20fb134ab48a6471fc0",
"assets/assets/icon/pasc@2x.png": "660e97ff3481eb008014d4b1b0e63ae0",
"assets/assets/icon/cnd@2x.png": "59f1eec09549ed68cfae6011e93773f6",
"assets/assets/icon/mkr@2x.png": "281ff5371a91f7a885bc3b8499cc8231",
"assets/assets/icon/soc@2x.png": "ed9e27aa3128ed72f03ab2f3d857d68a",
"assets/assets/icon/nlc2@2x.png": "ca06eb642780ab2d7a42f6ffdc2edd7d",
"assets/assets/icon/zilla@2x.png": "94b8cf515a72874034837ecb11eab4ad",
"assets/assets/icon/ella@2x.png": "9fd64a35552bc7fc2ab53404a4fca373",
"assets/assets/icon/aywa@2x.png": "72d5cbe62ba881157d3aba5e14b85268",
"assets/assets/icon/arg@2x.png": "9384c5856e91036b20570a74032f3327",
"assets/assets/icon/pay@2x.png": "32d117d1e7a1b79696371b7dc46d28ff",
"assets/assets/icon/eon@2x.png": "2e7c32cb7dab252691a3d61184b5773a",
"assets/assets/icon/snm@2x.png": "6a892973a3ae462af40762ff6b9057ec",
"assets/assets/icon/xbp@2x.png": "2a71fa2423928b04c246485cbbf2720c",
"assets/assets/icon/ark@2x.png": "95c106bca67330ed60ab4ba7b947d131",
"assets/assets/icon/zest@2x.png": "fa5a7075d6797a9b71195125f873cc2b",
"assets/assets/icon/aave@2x.png": "a19d06ee9c73164a7cf383c5d066091b",
"assets/assets/icon/hsr@2x.png": "076029d36d7b847b6d23d2bf7e6f6cdc",
"assets/assets/icon/act@2x.png": "c10aa65464f389ebd4e39f54ae6d00ed",
"assets/assets/icon/lrc@2x.png": "a57d937862b55fbeb8b103f349b611ae",
"assets/assets/icon/gno@2x.png": "1bb22b6bb8825593d8dae3dd1f14d65a",
"assets/assets/icon/hodl@2x.png": "6336e419d688689242b253e57726e2e5",
"assets/assets/icon/nano@2x.png": "8f9edc7eabb280473c7bb5bc36f5bf4d",
"assets/assets/icon/plr@2x.png": "6cccf35e5ceb99c1d044e5285972703a",
"assets/assets/icon/lun@2x.png": "c0c2c0a933657f36eee64e6ed0a031d9",
"assets/assets/icon/tomo@2x.png": "174744df63b28d22b012d9eba77c8b55",
"assets/assets/icon/ont@2x.png": "f38a0cf5659973d60c9ad04daf3bb72a",
"assets/assets/icon/bpt@2x.png": "c4fe2dfd32ac07f1df11b357e82c5048",
"assets/assets/icon/btg@2x.png": "07f3c8c709a811baa6a93b04cd4c089f",
"assets/assets/icon/gin@2x.png": "8d1ffe526e098d6537cafdc92c8de07e",
"assets/assets/icon/tbx@2x.png": "196ac16065de6978c5f04c9af981c5bf",
"assets/assets/icon/fuel@2x.png": "6b3d434a664629957fe3b545bc4a7689",
"assets/assets/icon/brd@2x.png": "b4f649de80348fba1a6cef0a477fb10b",
"assets/assets/icon/mtl@2x.png": "07753b6c7fc6838ea0474c2ad81c656a",
"assets/assets/icon/sbd@2x.png": "291d7653b2638250b201b37ae212a04e",
"assets/assets/icon/xmg@2x.png": "e3a00ccab558aeae00a09c44ef057e09",
"assets/assets/icon/stak@2x.png": "915e3c77efe1f8a1d4ed0499a9d9a211",
"assets/assets/icon/bcc@2x.png": "6c27408202930098015999228a9348f2",
"assets/assets/icon/beam@2x.png": "30041cad3eb897d48bee53cc3ce93bd9",
"assets/assets/icon/nmr@2x.png": "d5b02f7e025b9be19813ddba29b4d67a",
"assets/assets/icon/mcap@2x.png": "3f6ba966756c4bbe135e762bdd5312e0",
"assets/assets/icon/cdn@2x.png": "94bb9a3b1490634691b903dacf7eda98",
"assets/assets/icon/max@2x.png": "f65444eda22b59260e7a28f475f1a878",
"assets/assets/icon/paxg@2x.png": "d8ac6384fdd7e5cea05778de8556f4ec",
"assets/assets/icon/etc@2x.png": "9f78740ca4625dff40e229f83bb836ea",
"assets/assets/icon/xzc@2x.png": "1161cf096578ddd7667539aa07f3b182",
"assets/assets/icon/auto@2x.png": "904cfa6f9bee7783092c13aae0a4a388",
"assets/assets/icon/chsb@2x.png": "3bd6b90094cb88f7876ee29dff851b6d",
"assets/assets/icon/req@2x.png": "6101f7165087c1fa96105a2bc75eb186",
"assets/assets/icon/dock@2x.png": "d143c7fdae5d4280197979b28c020889",
"assets/assets/icon/chain@2x.png": "2a2f308ca82558d3c091bf91a66e291c",
"assets/assets/icon/tdc@2x.png": "2131ec77aaaee854ba04c893c11ba91c",
"assets/assets/icon/ebst@2x.png": "8a6b951d00d143265624ec8b18c67cc7",
"assets/assets/icon/ae@2x.png": "11533b36ab3563091105e9998a3267b5",
"assets/assets/icon/audr@2x.png": "62b75b05608cdaa96632a66bed74ecdd",
"assets/assets/icon/edoge@2x.png": "b11a6ebf52cc6b0d14d8119d7d1454df",
"assets/assets/icon/san@2x.png": "d3cbc14120018c2af0a6c5041c88fd3d",
"assets/assets/icon/bcbc@2x.png": "30ee655b944b58aa7063e88f5787fa00",
"assets/assets/icon/entrp@2x.png": "ec7552a28a911176a60314fe85ba90e5",
"assets/assets/icon/cvc@2x.png": "fbb57d11d3dd339b0b372e4057bc0ab5",
"assets/assets/icon/dent@2x.png": "630f9a763448a3edeed4205466083a15",
"assets/assets/icon/bts@2x.png": "563632770fd3e30468fe363b3a2094a0",
"assets/assets/icon/bco@2x.png": "2144de35e838c205cd9a1a45127d656c",
"assets/assets/icon/actn@2x.png": "2dfda5010160ee8484a5f5ed7242c5ee",
"assets/assets/icon/vibe@2x.png": "59a517058bafb42608c4029fa0da06f0",
"assets/assets/icon/pot@2x.png": "717212b190e340fefca6d41aae0f8d73",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
