document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");
    const subCategorySlider = document.getElementById("subCategorySlider");
    const menuContainer = document.getElementById("menuContainer");

    const subCategories = {
        yiyecekler: [
            { name: "Izgara", img: "https://api.whycoffee.com.tr/uploads/045_steak_8c3e2f3da5.svg", menu: "izgara" },
            { name: "Ana Yemek", img: "https://api.whycoffee.com.tr/uploads/016_curry_78820baecc.svg", menu: "anaYemek" },
            { name: "Makarna", img: "https://api.whycoffee.com.tr/uploads/Makarna_7fc332361d.svg", menu: "makarna" },
            { name: "Salata", img: "https://api.whycoffee.com.tr/uploads/Salata_922ba45cfa.svg", menu: "salata" },
            { name: "Pizza", img: "https://api.whycoffee.com.tr/uploads/Pizza_88214b5984.svg", menu: "pizza" },
            { name: "Wrap", img: "https://api.whycoffee.com.tr/uploads/047_taco_08c875ceab.svg", menu: "wrap" },
            { name: "Ekmek Arası", img: "https://api.whycoffee.com.tr/uploads/Ekmek_Arasi_dcb54d9d3f.svg", menu: "ekmekArası" },
            { name: "Tost", img: "https://api.whycoffee.com.tr/uploads/Kahvalti_e0ada8a4a9.svg", menu: "tost" },
            { name: "Burger", img: "https://api.whycoffee.com.tr/uploads/045_steak_8c3e2f3da5.svg", menu: "burger" },
            { name: "Bowl", img: "https://api.whycoffee.com.tr/uploads/Bowl_bacfc7b057.svg", menu: "bowl" },
            { name: "Atıştırmalık", img: "https://api.whycoffee.com.tr/uploads/Atistirmalik_f441954bf9.svg", menu: "atistirmalik" },
        ],
    };

    const menus = {
        izgara: [
            {
                name: "Izgara Kasap Köfte",
                description: "200 gram ızgara köfte, akdeniz yeşilliği, patates kızartması...",
                price: "390₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F1_dcfd0c545e.jpg&w=828&q=75"
            },
            {
                name: "Kaşarlı Mantarlı Izgara Tavuk",
                description: "200 gram tavuk göğüs, mantarlı ve kaşarlı özel sosu...",
                price: "385₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=%2Fdefault_image.png&w=828&q=75"
            }
        ],
        anaYemek: [
            {
                name: "Köri Soslu Tavuk",
                description: "Özel olarak hazırlanmış Sotelenmiş Kremalı Köri Soslu Tavuk, taze mantar, yeşil biber ve kırmızı biber ile zenginleştirilmiş bir lezzet şöleni sunuyor. Yanında hafif ve lezzetli patates kızartması ile birlikte servis edilen bu öğün, yoğun iş günlerinizde veya özel anlarınızda tercih edebileceğiniz mükemmel bir seçenek. Akdeniz yeşillikleriyle renklendirilmiş tabağıyla, sağlıklı ve doyurucu bir yemeğin tadını çıkarabilirsiniz.",
                price: "325₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F4_364346805c.jpg&w=828&q=75"
            },
            {
                name: "Tavuk Şinitzel",
                description: "Şık bir seçenek sunuyoruz: 200 gram özel panelenmiş tavuk göğsü, yanında hardallı patates salatası ile servis edilir ve üzerine limon dilimleri ile tereyağı gezdirilmiştir. Bu lezzetli tabak, sağlıklı ve doyurucu bir öğle yemeği veya akşam yemeği seçeneği sunar. Tavuğun kıtır dışı ve yumuşak içi, patates salatasının lezzetli hardal sosuyla mükemmel bir uyum içindedir.",
                price: "335₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F3_fb31d7581e.jpg&w=3840&q=75"
            },
            {
                name: "Tavuklu Fajita",
                description: "Baharatların ve taze sebzelerin mükemmel uyumuyla hazırlanan Tavuklu Fajita, her lokmada damağınızda unutulmaz bir lezzet bırakacak. Az acılı sosuyla dengeli bir ısısı var, bu da hem hafif hem de tatmin edici bir deneyim sunuyor. Sıcak servis edilen bu nefis tabak, keyifli bir akşam yemeği için ideal seçim!",
                price: "329₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F4_443c916f03.jpg&w=828&q=75"
            },
            {
                name: "Etli Fajita",
                description: "Yumuşacık Bonfile etin ve taze sebzelerin mükemmel birleşimiyle hazırlanan Etli Fajita, her lokmada zengin bir tat deneyimi sunuyor. Az acılı sosuyla damakta hoş bir kıvılcım bırakırken, doyurucu lezzetiyle akşam yemeğinize lezzet katıyor. Sıcak servis edilen bu nefis tabak, et severler için vazgeçilmez!",
                price: "539₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=%2Fdefault_image.png&w=828&q=75"
            },
            {
                name: "Barbekü Soslu Tavuk",
                description: "Özel barbekü sosuyla marine edilmiş tavuk göğsü, sotelenmiş mantar, yeşil biber ve kırmızı biber ile zenginleştirilmiş bu lezzetli seçenek, yanında nefis patates kızartması ve taze Akdeniz yeşillikleri ile sunuluyor. Barbekü severler için ideal bir seçim olan bu yemek, doyurucu ve keyifli bir öğün vaat ediyor.",
                price: "325₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FBarbekue_Soslu_Tavuk_2fd2ee1ca7.png&w=828&q=75"
            },
            {
                name: "Kremalı Kekikli Tavuk",
                description: "Özel olarak hazırlanmış Kremalı Kekikli Tavuk, sotelenmiş tavuk göğsü ile kremsi kekik sosunda marine edilmiş, yanında taze mantar, yeşil biber ve kırmızı biber ile sunuluyor. Bu lezzetli seçenek, yanında nefis patates kızartması ve çeşitli Akdeniz yeşillikleri ile tamamlanıyor. Hem doyurucu hem de sağlıklı bir tercih olan bu yemeği denemek için mükemmel bir seçenek!",
                price: "325₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FKremali_Kekikli_Tavuk_8e50a98c1b.png&w=828&q=75"
            }
        ],
        
        makarna: [
            {
                name: "El Yapımı Mantı",
                description: "El yapımı Kayseri mantımız, özenle hazırlanmış incecik hamuru ve lezzetli kıymasıyla dikkat çekiyor. Üzerine eklenen yoğurt ve WHY salçalı sosun zengin aromalarıyla birleşerek mükemmel bir tat deneyimi sunuyor. Geleneksel tariflerin modern dokunuşla buluştuğu bu tabak, her lokmada samimi ve doyurucu bir lezzet vaat ediyor.",
                price: "295₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F1_174a518707.jpg&w=828&q=75"
            },
            {
                name: "Spaghetti Bolonez",
                description: "Spaghetti Makarna, zengin ve lezzetli WHY Bolonez sosuyla buluşuyor. Bolonez sosunun yoğun et tadı, makarnanın üzerine kusursuz bir şekilde yayılırken, parmesan peyniri de yemeğinize kremamsı ve tuzlu bir zenginlik katıyor. Bu klasik İtalyan yemeği, her lokmada sizlere mükemmel bir tat deneyimi sunacak.",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FSpaghetti_Bolonez_6f445f981b.png&w=828&q=75"
            },
            {
                name: "Spagetti Napolitana",
                description: "Spaghetti Makarna, WHY domates sosu ve parmesan peyniri ile basit ama lezzetli bir klasik sunuyor. Domates sosunun taptaze ve doğal aroması, makarnanın üzerine eşsiz bir tat bırakırken, parmesan peyniri de yemeğinize zengin bir dokunuş katıyor. Hem doyurucu hem de pratik bu nefis tabağı denemek için bir adım atın!",
                price: "265₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FSpagetti_Napolitana_d8d9552ce4.png&w=3840&q=75"
            },
            {
                name: "Tavuklu Fettucini Alfredo",
                description: "Fettuccine Alfredo’muz, WHY kreması ve parmesan peyniri ile zengin bir kremalı sosla hazırlanıyor. Tavuk dilimleri ve mantarlarla zenginleştirilmiş bu lezzetli tabak, WHY pesto sosu ile taçlanıyor. Her lokmada kremamsı, lezzetli ve doyurucu bir deneyim sunar. İtalyan mutfağının vazgeçilmezlerinden bu tabağı mutlaka denemelisiniz!",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTavuklu_Fettucini_Alfredo_9069ba9791.png&w=3840&q=75"
            },
            {
                name: "Ton Balıklı Kremalı Penne",
                description: "Penne makarnamız, ton balığı ve mısırın birleşimiyle mükemmel bir uyum yakalıyor. Kapya biberinin tatlılığı ve WHY kremasının zenginliği, bu lezzetli karışıma derinlik katıyor. Üzerine serpiştirilen parmesan peyniri ile her lokmada kremsi ve doyurucu bir tat deneyimi sunuyor. Bu tabak, hem hafif hem de lezzetli bir yemek arayanlar için ideal bir seçenek.",
                price: "295₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTon_Balikli_Kremali_Penne_6a882c1260.png&w=828&q=75"
            },
            {
                name: "Çıtır Mantı",
                description: "Dana kıymalı kızarmış taze mantımız, çıtır çıtır dışı ve yumuşacık içi ile lezzet patırtısına davet ediyor. Üzerine eklenen yoğurt ve domates sosu, bu nefis mantıya kremalı ve hafif asidik bir dokunuş katıyor. Geleneksel tatların modern bir yorumu olan bu tabak, her lokmada damaklarda unutulmaz bir iz bırakacak.",
                price: "295₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FWHY_Citir_Manti_893c076b56.png&w=828&q=75"
            },
            {
                name: "Penne Arrabbiata",
                description: "Penne makarnamız, acılı domates sosunun baharatlı ve canlı tadıyla buluşuyor. Siyah dilim zeytinlerin katkısıyla zenginleşen bu lezzet, parmesan peynirinin tuzlu ve kremalı dokunuşuyla tamamlanıyor. Her lokmada sıcak ve baharatlı bir tat deneyimi sunan bu tabak, makarna severler için mükemmel bir seçim.",
                price: "255₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FPenne_Arrabbiata_e8224f3053.png&w=3840&q=75"
            },
            {
                name: "Pesto Soslu Penne",
                description: "Penne makarnamız, zengin kremalı sosuyla birleşen mantarların taptaze lezzetini sunar. Pesto sosunun aromatik dokunuşu ve parmesan peynirinin tuzlu zenginliği ile tamamlanan bu tabak, her lokmada mükemmel bir tat deneyimi yaşatır. Kremalı, lezzet dolu bir makarna yemeği arıyorsanız, bu seçenek ideal tercihiniz olacak.",
                price: "265₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F2_25b043d355.jpg&w=828&q=75"
            }
        ],
        
        salata: [
            {
                name: "Tavuklu Sezar Salata",
                description: "Göbek salata, julyen tavuk göğsü, kuruton, parmesan peyniri, cherry domates ve Sezar sos ile hazırlanan bu salata, hem lezzet hem de doyuruculuk açısından mükemmel bir seçenek sunuyor. Taptaze sebzeler ve çıtır kuruton, tavuk göğsünün yumuşaklığıyla birleşirken, parmesan peyniri ve Sezar sos, salataya zengin bir tat katıyor. Hem besleyici hem de lezzetli bu salatayı mutlaka deneyin!",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTavuklu_Sezar_Salata_9b3e0f1e1d.png&w=3840&q=75"
            },
            {
                name: "Izgara Hellim Salata",
                description: "Mevsim yeşillikleri, hellim peyniri, kapari çiçeği ve kapya biber ile hazırlanan bu salata, taze ve lezzet dolu bir seçenek sunuyor. Hellim peynirinin zengin dokusu ve kapari çiçeğinin benzersiz aroması, kapya biberle birleşerek damaklarda unutulmaz bir tat bırakıyor. Yağ-limon sosun ferahlatıcı dokunuşu ise bu özel salatayı mükemmel bir tamamlayıcı yapıyor. Taze ve lezzetli bir deneyim için bu salatayı mutlaka deneyin!",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FIzgara_Hellim_Salata_64a9eefc21.png&w=828&q=75"
            },
            {
                name: "Tahıllı Salata",
                description: "Göbek salata, domates, salatalık, karabuğday, ceviz ve yağ-limon sos ile hazırlanan bu salata, hem lezzetli hem de besleyici bir seçenek sunuyor. Taze sebzeler ve cevizlerin çıtır dokusu, karabuğdayın doyuruculuğu ile birleşerek sağlıklı bir öğün yaratıyor. Yağ-limon sosun ferahlatıcı dokunuşu ise bu salatayı ideal bir seçenek haline getiriyor. Bu lezzetli ve besleyici salatayı mutlaka deneyin!",
                price: "235₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTahilli_Salata_0d83afff5a.png&w=3840&q=75"
            },
            {
                name: "Peynirli Roka Salatası",
                description: "Roka yaprakları, Ezine peyniri, cherry domates, yağ-limon sos ve balzamik sos ile hazırlanan bu salata, taze ve zengin aromalarıyla dikkat çekiyor. Ezine peynirinin kremsi dokusu, roka yapraklarının ferahlığı ve cherry domateslerin tatlılığıyla birleşerek damaklarda unutulmaz bir tat bırakıyor. Sağlıklı ve lezzetli bir seçenek arayanlar için bu salatayı mutlaka deneyin!",
                price: "235₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FPeynirli_Roka_Salatasi_7137cf3810.png&w=3840&q=75"
            },
            {
                name: "Ton Balıklı Salata",
                description: "Mevsim yeşillikleri, ton balığı, cherry domates, kapari, mısır ve yağ-limon sos ile hazırlanan bu hafif ve lezzetli salata, sağlıklı bir öğün arayanlar için mükemmel bir tercihtir. Taptaze malzemelerin uyumu ve ton balığının zengin tadı, yağ-limon sos ile mükemmel bir şekilde dengelenir. Bu ferahlatıcı ve besleyici salatayı mutlaka deneyin!",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTon_Balikli_Salata_3c81d22347.png&w=828&q=75"
            }
        ] ,


        pizza: [
            {
                name: "Sucuklu Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, zengin domates sosu, mozzarella peyniri, dana kasap sucuk, mısır, çeri domates ve zeytinyağı ile hazırlanan bu pizza, mükemmel bir lezzet deneyimi sunuyor. Hamurun ince ve çıtır dokusu, eriyen mozzarella peyniri ve sucuk parçalarının zengin tadı, mısır ve çeri domateslerin tazeliğiyle birleşerek damaklarda unutulmaz bir tat bırakıyor.",
                price: "355₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FSucuklu_Pizza_4785cd72d4.png&w=828&q=75"
            },
            {
                name: "Margherita Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, cherry domatesin taptaze lezzeti ve pesto sosunun aromatik zenginliği ile tatlandırılmış. Zeytinyağının hafif dokunuşu, tüm malzemeleri mükemmel bir şekilde bir araya getirerek her lokmada eşsiz bir tat deneyimi sunuyor.",
                price: "275₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FMargherita_Pizza_fdebfa4405.png&w=3840&q=75"
            },
            {
                name: "WHY Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, sosis, mantar, mısır, sucuk ve dana jambon ile bol malzemeli bir lezzet şöleni sunuyor. Zeytinyağının hafif dokunuşu, pizzanın tüm malzemelerinin tatlarını mükemmel bir şekilde harmanlayarak her lokmada zengin ve doyurucu bir deneyim yaşatıyor.",
                price: "385₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FWHY_Pizza_e47cb6a0ce.png&w=828&q=75"
            },
            {
                name: "Akdeniz Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, jalapeno biberinin baharatlı dokunuşu, cherry domatesin taze lezzeti ve pesto sosunun aromatik zenginliği ile bezenmiş. Mantarın doğal tatları ve zeytinyağının hafif dokunuşu, pizzanın tüm malzemelerini mükemmel bir uyum içinde bir araya getiriyor.",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FAkdeniz_Pizza_22d89e765f.png&w=828&q=75"
            },
            {
                name: "Tuna Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, jalapeno'nun baharatlı dokunuşu, mısırın tatlılığı ve ton balığının deniz kokusuyla zenginleştirilmiş. Jalapeno'nun keskin acılığı, mısırın tatlılığıyla dengelenirken, ton balığı pizzaya denizden gelen taze bir lezzet katıyor.",
                price: "385₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTuna_Pizza_a71a494d46.png&w=828&q=75"
            },
            {
                name: "Barbekü Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, barbekü soslu tavuk dilimleri, köy biberi ve cherry domates ile lezzet dolu bir deneyim sunuyor. Barbekü sosunun dumanlı ve tatlı lezzeti, tavuk dilimleriyle mükemmel bir uyum sağlarken, köy biberi ve cherry domatesin taptaze dokusu pizzayı canlandırıyor.",
                price: "305₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FBarbekue_Pizza_ebef2f53f8.png&w=828&q=75"
            },
            {
                name: "Mantarlı Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, mantar, karamelize soğan ve taze roka ile zenginleştirilmiş. İnce çıtır hamurun üzerinde eriyen mozzarella ve tatlı karamelize soğan, mantarın doğal aromasıyla mükemmel bir uyum yakalıyor.",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FMantarli_Pizza_e8e1332771.png&w=828&q=75"
            },
            {
                name: "Mexican Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, sucuk, jalapeno biberi ve sriracha sosu ile yoğun bir lezzet patlaması sunuyor. Siyah dilim zeytin, küp domates ve zeytinyağının zengin dokunuşları, her lokmada mükemmel bir tat dengesi sağlıyor.",
                price: "335₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FMexican_Pizza_26159045cf.png&w=828&q=75"
            },
            {
                name: "Sebzeli Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniriyle hazırlanan bu pizza, brokoli, kabak, mantar, mısır ve ıspanak gibi taze sebzelerle dolu. Sebzelerin canlı renkleri ve lezzetleri, eriyen mozzarella peyniriyle mükemmel bir uyum sağlıyor.",
                price: "285₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FSebzeli_Pizza_2eed1b3092.png&w=828&q=75"
            },
            {
                name: "Dört Peynirli Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu ve mozzarella peyniri ile hazırlanan bu pizza, Ezine peyniri, parmesan ve cheddar peynirlerinin zengin karışımıyla zenginleştirilmiş. Peynir severler için ideal bu pizza, tatlı bir şekilde eriyen peynirlerin birleşimiyle damaklarda unutulmaz bir iz bırakıyor.",
                price: "345₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FDoert_Peynirli_Pizza_9720052409.png&w=3840&q=75"
            },
            {
                name: "Dip Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu, mozzarella peyniri, sucuk, jalapeno biberi, siyah zeytin dilimleri, cips ve zeytinyağı ile hazırlanan bu pizza, lezzet patlaması yaşamanızı sağlıyor. Çıtır hamurun üzerinde eriyen mozzarella ve baharatlı sucuk, jalapeno biberinin acılığı ve siyah zeytinin zengin tadıyla mükemmel bir uyum yakalıyor.",
                price: "305₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FDip_Pizza_71d6b90e3d.png&w=3840&q=75"
            },
            {
                name: "Jambon Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu, mozzarella peyniri, dana jambon, sosis, mantar, mısır, cheddar peyniri ve zeytinyağı ile hazırlanan bu pizza, zengin ve doyurucu bir lezzet sunuyor. Çıtır hamurun üzerine serilen eriyen mozzarella ve cheddar peyniri, dana jambon ve sosisin zengin tadını mükemmel şekilde tamamlıyor.",
                price: "345₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FJambon_Pizza_1e6990c68d.png&w=3840&q=75"
            },
            {
                name: "Kavurmalı Pizza",
                description: "Ekşi mayalı İtalyan pizza hamuru, domates sosu, mozzarella peyniri, kavurma, köy biberi, kapya biberi, dağ kekiği ve zeytinyağı ile hazırlanan bu pizza, zengin ve aromatik bir lezzet sunuyor. Kavurmanın zengin tadı ve taze biberlerin gevrek dokusu, dağ kekiğinin harika aromasıyla birleşiyor.",
                price: "435₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FKavurmali_Pizza_be97ee6ab9.png&w=3840&q=75"
            }
        ] ,


        wrap: [
            {
                name: "Acılı Tavuk Wrap",
                description: "Tortilla ekmeği içinde sotelenmiş acılı tavuk, mantar, yeşil biber, kapya ve jalapeno biber ile zenginleştirilmiş, mayonezli göbek atom soslu özel sandviç. Yanında çıtır patates kızartması ve taptaze Akdeniz yeşillikleri ile servis edilir. Bu lezzetli kombinasyon, hem doyurucu hem de keyifli bir öğle yemeği veya hafif bir atıştırmalık için ideal bir seçenek.",
                price: "325₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FAcili_Tavuk_Wrap_8d94a42a5b.png&w=3840&q=75"
            },
            {
                name: "Köfteli Wrap",
                description: "Tortilla ekmeği içinde köz biberli naneli kuru cacık, taze roka yaprakları ve ızgara köfte ile zenginleştirilmiş özel sandviç. Yanında çıtır patates kızartması ve taptaze Akdeniz yeşillikleri ile servis edilir. Bu özel kombinasyon, hem doyurucu hem de lezzetli bir yemek veya hafif bir atıştırmalık için ideal bir seçenek.",
                price: "375₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FKoefteli_Wrap_580191b766.png&w=828&q=75"
            },
            {
                name: "Çıtır Tavuk Wrap",
                description: "Tortilla ekmeği içinde panelenmiş tavuk dilimleri, tatlı chili sos ve WHY özel coleslaw salata ile zenginleştirilmiş özel sandviç. Yanında çıtır patates kızartması ve taptaze Akdeniz yeşillikleri ile servis edilir. Bu lezzetli kombinasyon, hem doyurucu hem de lezzetli bir öğle yemeği veya hafif bir atıştırmalık için ideal bir seçenek.",
                price: "325₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FCitir_Tavuk_Wrap_8338c4a119.png&w=828&q=75"
            }
        ], 


        ekmekArası: [
            {
                name: "Günün Sandviçi + Filtre Kahve",
                description: "Günün sandviçi ve yanında bir fincan aromatik filtre kahve ile gününüze enerjik bir başlangıç yapın! Taptaze ekşi mayalı Ayvalık tost ekmeği üzerine özenle hazırlanan sandviçimiz, içeriğine göre çeşitlilik gösterebilir ve günün öne çıkan lezzetlerini sunar. Kahvenizle birlikte, hem doyurucu hem de keyifli bir mola için ideal bir kombinasyon.",
                price: "245₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FGuenuen_Sandvici_Filtre_Kahve_ba4e774682.png&w=828&q=75"
            },
            {
                name: "Ton Balıklı Sandviç",
                description: "Zeytinyağlı ton balığı, mayonezli göbek salata, mısır, kornişon turşu ve kapya biber ile zenginleştirilmiş özel sandviçimiz. Tazecik sandviç ekmeği ile sunulan bu lezzetli tabak, sağlıklı ve doyurucu bir seçenek arayanlar için ideal. Her ısırıkta farklı tatlarla buluşacağınız bu sandviç, öğle yemeği veya hafif bir atıştırmalık için mükemmel bir tercih.",
                price: "235₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FTon_Balikli_Sandvic_dc69689ee3.png&w=3840&q=75"
            },
            {
                name: "WHY Sosisli Sandviç",
                description: "Özel WHY sosu, sosis dilimleri, kızarmış patates, turşu ve lezzetli mayonez ile zenginleştirilmiş bu özel sosisli sandviç, iştahınızı kabartacak bir lezzet şöleni sunuyor. Her ısırıkta farklı tatlarla buluşacak, doyurucu ve keyifli bir atıştırmalık veya hızlı bir öğle yemeği için mükemmel bir seçenek.",
                price: "205₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FWHY_Sosisli_Sandvic_c23772bd21.png&w=3840&q=75"
            }
        ] ,


        tost: [
            {
                name: "Beyaz Peynirli Tost",
                description: "Ekşi mayalı Ayvalık tost ekmeği üzerine bol beyaz peynir dilimleriyle hazırlanan özel sandviç. Yanında taptaze Akdeniz yeşilliği, cherry domates ve salatalık ile servis edilir. Bu özel tabak, sağlıklı ve hafif bir seçenek arayanlar için ideal bir tercih sunuyor.",
                price: "195₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FBeyaz_Peynirli_Tost_de66d41362.png&w=828&q=75"
            },
            {
                name: "Karışık Tost",
                description: "Ekşi mayalı Ayvalık tost ekmeği üzerine bol kaşar peyniri ve sucuk dilimleriyle hazırlanan özel sandviç. Yanında taptaze Akdeniz yeşilliği, cherry domates ve salatalık ile servis edilir. Kahvaltı veya hafif bir öğle yemeği için mükemmel bir tercih sunuyor.",
                price: "215₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FKarisik_Tost_90611731ce.png&w=3840&q=75"
            },
            {
                name: "Çift Kaşarlı Tost",
                description: "Ekşi mayalı Ayvalık tost ekmeği üzerine bolca kaşar peyniri ile hazırlanan bu özel tabak, kahvaltınıza veya hafif bir atıştırmalık için mükemmel bir seçenek sunuyor.",
                price: "200₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FCift_Kasarli_Tost_bbcab0d150.png&w=828&q=75"
            },
            {
                name: "WHY Special Tost",
                description: "Ekşi mayalı Ayvalık tost ekmeği üzerine bol kaşar peyniri, cheddar peyniri, cherry domates ve pesto sos ile hazırlanan özel tost. Yanında taptaze Akdeniz yeşilliği ve salatalık ile servis edilir.",
                price: "205₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FWHY_Special_Tost_b6bebea03d.png&w=828&q=75"
            },
            {
                name: "WHY Dana Jambon Special Tost",
                description: "Ekşi mayalı Ayvalık tost ekmeği üzerine bol kaşar peyniri, cheddar peyniri ve dana jambonla hazırlanan özel tost. Yanında taptaze Akdeniz yeşilliği, cherry domates ve salatalık ile servis edilir.",
                price: "225₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FWHY_Dana_Jambon_Special_Tost_aba7c6367c.png&w=3840&q=75"
            }
        ] ,

        burger: [
            {
                name: "Hot Chicken Burger",
                description: "170 gr paneli tavuk göğsü, acılı mayonez, taze salatalık turşusu ve coslow salatası ile el yapımı hamburger ekmeği arasında sunuluyor. Yanında çıtır patates kızartması, ballı hardal ve ranch sos ile servis edilir.",
                price: "289₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F3_38fa53766c.jpg&w=828&q=75"
            },
            {
                name: "Why Mini Mix Burger",
                description: "..",
                price: "349₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FAdsiz_Tasarim_Kopyasi_ada7901bee.jpg&w=3840&q=75"
            },
            {
                name: "Basic Chicken Burger",
                description: "170 gr paneli tavuk göğsü, taze salatalık turşusu ve lezzetli göbek atomuyla el yapımı hamburger ekmeği arasında sunuluyor. Yanında çıtır patates kızartması ve ballı hardal ile servis edilir.",
                price: "269₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F2_966ea778bb.jpg&w=3840&q=75"
            },
            {
                name: "Honey Chicken Burger",
                description: "Ballı 170 gr paneli tavuk göğsü, salatalık turşusu ve taze coslow salatasıyla el yapımı hamburger ekmeği arasında sunuluyor. Yanında çıtır patates kızartması ve ballı hardal ile servis edilir.",
                price: "269₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2F1_da55926cf0.jpg&w=3840&q=75"
            }
        ] ,

        bowl: [
            {
                name: "Klasik Bowl",
                description: "Yulaf ezmesi, taze dilimlenmiş muz, çıtır file badem ve eriyen sütlü çikolata ile hazırlanmıştır. Güne enerjik başlamak için ideal bir kahvaltı seçeneği.",
                price: "269₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FKlasik_Bowl_08e508266d.png&w=828&q=75"
            },
            {
                name: "Bitter Bowl",
                description: "Yulaf ezmesi ve sütle hazırlanmış, üzerine portakal dilimleri ve bitter çikolata parçaları serpiştirilmiş bir kase. Sağlıklı ve doyurucu bir kahvaltı.",
                price: "259₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FBitter_Bowl_167fc52a2f.png&w=828&q=75"
            },
            {
                name: "Granola Bowl",
                description: "Kremsi süzme yoğurt üzerine dilimlenmiş kırmızı orman meyveleri ve çıtır granola ile tatlandırılmıştır. Doğal bal ile mükemmel bir tat.",
                price: "269₺",
                img: "https://qr.whycoffee.com.tr/_next/image?url=https%3A%2F%2Fapi.whycoffee.com.tr%2Fuploads%2FGranola_Bowl_11b30bf16a.png&w=3840&q=75"
            }
        ] ,

        atıştırmalık: [
            {
                name: "Çıtır Tavuk Parçaları",
                description: "210 - 240gr panelenmiş çıtır tavuk parçaları, yanında orta boy patates kızartması ve el yapımı ballı hardal sos ile servis edilir.",
                price: "289₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Tenders Tavuk Parçaları",
                description: "6 adet chicken tenders, yanında orta boy patates kızartması, el yapımı ballı hardal ve acılı mayonez sosu ile servis edilir.",
                price: "249₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Acılı Tavuk Parçaları",
                description: "8 adet panelenmiş acılı tavuk parçaları, çıtır çıtır dokusuyla yanındaki orta boy patates kızartmasıyla mükemmel uyum sağlıyor.",
                price: "269₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Cheddar Peynirli Dilim Patates",
                description: "Özel peynir sosu ve taze patates kızartmasıyla servis edilen lezzetli bir tabak.",
                price: "219₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Mac'n Cheese Topları",
                description: "8 adet çıtır mac'n cheese topları, yanında orta boy patates kızartması ve el yapımı ballı hardal sos ile servis edilir.",
                price: "249₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Patates Tava",
                description: "Altın sarısı, çıtır çıtır patates kızartması, el yapımı ballı hardal sosuyla servis edilir.",
                price: "169₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Soğan Halkası",
                description: "6 adet kızarmış soğan halkası, yanında orta boy patates kızartması ve el yapımı ballı hardal sosu ile servis edilir.",
                price: "229₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Sosis Tabağı",
                description: "6 adet kızarmış çiçek sosis, orta boy patates kızartması ve el yapımı ballı hardal sosu ile servis edilir.",
                price: "249₺",
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Peynir Çubukları",
                description: "Çıtır çıtır kızarmış peynir çubukları, yanında orta boy patates kızartması ve el yapımı ballı hardal sosu ile servis edilir.",
                price: "249₺",
                img: "https://via.placeholder.com/200"
            }
        ] ,

        
        

        
        

        
        
        



        
    };

    categories.forEach(category => {
        category.addEventListener("click", () => {
            categories.forEach(c => c.classList.remove("active"));
            category.classList.add("active");

            const selectedCategory = category.dataset.category;
            const items = subCategories[selectedCategory] || [];

            subCategorySlider.innerHTML = "";
            items.forEach(item => {
                const button = document.createElement("div");
                button.classList.add("sub-category");
                button.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <p>${item.name}</p>
                `;
                button.addEventListener("click", () => {
                    // Tüm alt kategorilerden active sınıfını kaldır
                    document.querySelectorAll(".sub-category").forEach(el => el.classList.remove("active"));
                    // Tıklanan alt kategoriye active sınıfını ekle
                    button.classList.add("active");
                    loadMenu(item.menu);
                });
                subCategorySlider.appendChild(button);
            });
        });
    });

    function loadMenu(menuKey) {
        const items = menus[menuKey] || [];
        menuContainer.innerHTML = "";
        items.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price">${item.price}</div>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }
});