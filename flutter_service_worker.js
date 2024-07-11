'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7eeba7171339e1c1b45f7b319fb928b",
".git/config": "d9bb24f0f6be374f52f2448826fafd3b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a73d5ef34e0ac90ca2ce4caeb4c008b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "57073687b0d43c006b51fba7d925d2af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "428e73a5e72b7e196459efbb0028f84d",
".git/logs/refs/heads/main": "c02aa9c3e200c56b34342cad7ec26767",
".git/logs/refs/remotes/origin/main": "5d0bd680a19e74143b45d89f240cb808",
".git/objects/03/5b7231808dd95bd4497fb553616d743191fa89": "26d41e054659ffc2206ec5b8e3bcf2cb",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/0c/f8d045d9399db8f85504bf123e86b0d965cb99": "b97e16d6ced75572142641f92baf90c8",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/f71bcfc8e6f81526b4fb00fa2f438bd1e57e66": "6320f3df325bc0ff5aff4793d49b081a",
".git/objects/13/6b7c16771f1df0c68d660642640c01d689cdf5": "b4a7c69419e2580b3c41e083c886d313",
".git/objects/14/d167d5197e5fb77a416eabd7060f6aab695f6d": "c12b2d7f95cd62706e18aa77464325c3",
".git/objects/18/03a0c0ade752c6d41bbd0a8cd5d35dfc769f9c": "b401f090d2606934fcd589f329374dcf",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/a30e36555475b69250fc101e243f3447afe127": "dbbfe29206aecb67577b62c56b2fed19",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/34/7b84a8f4b6b1c0d8522a06175be499255e3a69": "7591e05ed63b7d5c8def0dc65535b3c0",
".git/objects/36/43704d596ed290e8a7979e1b3228e88e2fa351": "5da106855ddcbd63b640bb7cfaec7233",
".git/objects/37/ad3e71a27aab0c1e397c50e48849268bcc08a7": "a98cf8826570456fd702b82812584059",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/46040a6479f8708068668a2dfc8ff938af5916": "18d2aeb8f72463cf6bc93fcffea637ac",
".git/objects/3e/4bdbd82a50e129db40bd3868563ef18ae113b4": "26b97820fbb474891ada4d7aea6fae07",
".git/objects/3e/84903b647058c3abbae3c0a7b4667c3e4488cf": "f546543ad514b91f4b18e854760a4d4b",
".git/objects/43/3f99e741c3f6e91ed8cf3656b6ae93416dca63": "9e1b0a9b65d2a844820331f7f81811d7",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/47/e694eae6d7943dcba775546d24c78a6a6dca23": "d961c30cb1197861744d7b516b9a4c4c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4f/3e5b8097037d87f045e3b5f512295f6e7b9d17": "b2a3b8116c3745e500f9adce74cc5186",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/54/c7a93d95697c7ee134c644306a87e3c6b6c2a6": "816263099f688f3f5a048743c0203f54",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/9f8415194356638f8f843b3038029ca8ec276d": "1e6b74eec270fb1414abfd59202fa44a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/7f72f6ffca1ee4c12093143a6aa1cddbf7e5f0": "49d69b6d077b1e71bb492b5e75ac114b",
".git/objects/61/edffce7e9c083acdcdac5a58a00cf8919350fe": "7b0f79d477199f97a364f8f093ff50ad",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/4f91763cf4ff722a812804bf262a9e82b447f8": "4e7bf8fbeeeb2bb1e0133098ed42305e",
".git/objects/65/390ee7e29194eb41670715a8942284b7c47123": "f791a5592dfd38e21bd445a51d72ca4a",
".git/objects/68/2feb793a00de26062ed559315eb13d2575b388": "bdb654f58d02c4c30ce6ae0cb9d95d1d",
".git/objects/69/f5681dd41dd4fa8714a865ce1ada611ae123da": "bb87afe9885625807ab784e7311aa3d5",
".git/objects/6b/153689eba3be17f168042348f20ec4a8415462": "7d1770d7304856e2144932a165203108",
".git/objects/70/a54cebf454813c9cb2fd473c34a573281cd22c": "46459abfdb56d902b21576cdf51d1a5e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/b6370fac49692cca44dd8ebf6cf406030b82b3": "769b94b2a640abaa29b5f013eefa70ac",
".git/objects/73/2aaddee4994b4b3a6c6d251ae966ecc361f4c5": "ed833253284cfbde8050e8dadbdfedc7",
".git/objects/74/e5a9f0d4834e31ddb8c5bf54f0e5f343d27a96": "14bbc173062efc348761357405a8e0da",
".git/objects/7a/abb0e22dba41df378e96ac86aed3ca2d76a601": "9b0ccc7f657140a55ecd73bfcc50ab16",
".git/objects/7d/ff4e0becdecf212abf2d0be13fd9a90cbc173c": "2e5d1e2cfa14947bfc7ea65ef3400ef5",
".git/objects/83/3ad583d4a815c9a948d06f0c7b15b023eb0614": "e9362d633f86ef3c1da2319628124418",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0bc1e6c88b502b7e481e499dc8d39dcd4475d9": "7a77a4e9df9f54e12e39a6c7b4962860",
".git/objects/8c/4cd71f564a665af2d5a941e29cb90eaba1d1ea": "9ce78735c320e59319da334dee01264b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/45ce1dd1021e24d40ce2f0c227d5c4805f623b": "0d614b139ea1a6dd489572d00be3b1a1",
".git/objects/95/5df69e6ca7ef6f02abc571ffd36768a8b0f4d8": "48f6e90b8aea5d9c711691b37e470ced",
".git/objects/95/a1d588eca803b3d0bb02a348f4785c0bc66963": "6a476c0f1b1165d72cca5023aaeff457",
".git/objects/98/192941e551740f240c540f5c7003987f4c543a": "48c14adaf7c26f3087e9198f9626f79b",
".git/objects/a1/8312b75c5d74ea26fdfd31b94132d1d811cb39": "f67966da918359412a3b3ac08f081be8",
".git/objects/a3/54ad1841b9f5d81e8988eef5dd02465b096bc7": "3e2d642dbce7fdc1efca7d799d3685d5",
".git/objects/a4/745440544d01a2ace481e9e2c076445b4cf2d0": "0daabf8a757ef379087d18c0a7e0dbe3",
".git/objects/a7/1dfaaff0605127b27283b065169dbd8efbba27": "501b70b66d6b1a5a217bf2b3e1e1b78c",
".git/objects/a8/2275043814e6ae4980ce02502a0f08ad3b6b8f": "ca5c59e7cabbd5f90e52c7902f025b3d",
".git/objects/ad/33919071b651ede6ce6939c8516db9272ac480": "e8b0d846dfbe54fdbe0e8453232fe3ca",
".git/objects/b0/1486f1b3606757158e77821e1315037b2297e8": "c416ee1e497f4e181c692be37e483ac9",
".git/objects/b0/f6c3fecfa98fa15b02bd6146d8589f2a0abb11": "c49c6bb46757367ad79a800d748625a1",
".git/objects/b1/7eb7fee85bf79f437e57a36a2615217fbaef38": "0369e16efe261f812495f23b626b19a1",
".git/objects/b2/8f666283b6b3a03d56fcf487fbc09ea6294c0c": "6efb604fe1576c5a1c46f0b18d1d31cf",
".git/objects/b3/bfe6a8ad2a6bf2179dbee691850ea9efd50500": "f941652fd6e5966349f2710beb66fc62",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/417b72bac708f76643ca667522968b51cc1819": "5f8f4d3040a47837786e444abfca6ad6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fd84997671f1b5cc1bdf8bfaf55cdcf64eb28a": "ab01987a10a041d58b1ba9b553a18c5b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/7df8d924907fb42a2cad1e9bca4879e5d19d42": "137688d7c4507dc358d8800f697b80eb",
".git/objects/be/52066402c50bbbfbc7821a4c94041dfe1b3cfc": "db66ce4a276b4668c5240c7131802219",
".git/objects/c5/929b68ba87f556a90d040ef3c3034251878240": "8cf2df5d29bad8e29631cf35e2562283",
".git/objects/c6/0fe4959a48ade032cd7204e8b49263017a4411": "5323b6546b75c6c294638ca2f720181a",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/eb676ffb28af466bbc7f04ba07edddf4e91010": "1c1f02683157a7fc3ddeba05071644bf",
".git/objects/cc/dcf06126f0be0a8ee47bed096e94554b615d12": "50543ce0df1bceca577cfa23582db07f",
".git/objects/cd/69e162f80610aa0937b7a437310d8f4294b69e": "692e38a286a66a5c9a2bae38586f2330",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/9406ce74ad6bfef4ffcf4366dc358280b75bf7": "4e073395608d07a78a705a071d3e46f2",
".git/objects/e0/197cb3272c6620f492182ed96345d6ec6af7f9": "59cbd8e472c1ccd3498676f200782313",
".git/objects/e8/a210dec82559302ed546ad9b75a242fd2950dd": "855523dc8570ecb3adaba609ad355ba6",
".git/objects/eb/77a0d4916c7903e2c17fdaab27a721b8467bf5": "777feaa4990c27d8a84542c55ba6dc4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/b5898a9b4644fc88ac039afb4849f5300584bb": "6858cfc71464944063813e5dee50ade6",
".git/objects/f0/db64d26f07fa37035a54e5091fb6b1efb4faa2": "bd1b75b2aefecdc7f72e64e45ee7b61b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/865b694dc0a26e90e9a2a46b986c62074ef126": "b432a99fcbeed5bcaf1b8fe68816b44e",
".git/objects/f4/ba1b8ca213b1d6a4f45c08534b901f1b6cd263": "3f74b82ec4691bbfb636be4b44e8aa3c",
".git/objects/f6/2e8017aa0bf8c0fbc1c7d189f622fa504d820e": "57db30aebb30efc7b6347aeacbfb5107",
".git/objects/fb/64f8d9be80182c45de060963197b1300a30ac1": "5cbbae822518ee950231609b62b5b380",
".git/objects/fd/74edc7dff46f034dfc7594605ac81c33748c1d": "d6d9f1011bc1a315d18109d39bb554d4",
".git/refs/heads/main": "4670a85845cbbc9f377e02c62cf03dc6",
".git/refs/remotes/origin/main": "4670a85845cbbc9f377e02c62cf03dc6",
"assets/AssetManifest.bin": "9ca01606ae809c7af68981390a5cefb9",
"assets/AssetManifest.bin.json": "a4053301fa8108dfb6be9818d8f403b4",
"assets/AssetManifest.json": "d55cc5c3492a1971a9531c4fe0b631ea",
"assets/assets/animations/laptop.json": "cfec1d194c440fd5e91f5ef82c581973",
"assets/assets/animations/userlaptop.json": "8bd6062afe3d9726ae29f116d3faddf8",
"assets/assets/animations/Userwithlaptop1.json": "c596673621c1405d3791fe20400845e9",
"assets/assets/animations/userwithlaptop2.json": "50495da977f6dd48375917a69d810be1",
"assets/assets/laptop.jpg": "c466e09539990b1eead44aef7a6bbbb2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e77eeb8aae6f465118d6cd8b5a826317",
"assets/NOTICES": "c17393ae181c1faeb6f785879994b12b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5def4a2da2592ea64b00cb779d54bbca",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6787090e8a425e6d8bd97471e7900eab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "79f78c6660d370c39c4808ef61236180",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88a945226d40333afbd312a84d71e763",
"/": "88a945226d40333afbd312a84d71e763",
"main.dart.js": "36b02ae4155ffa3454e61feb5d58510a",
"manifest.json": "577921d44fc4807c3f7ec5586a750c32",
"version.json": "15b54a19b13935b8136dde77ccccae02"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
