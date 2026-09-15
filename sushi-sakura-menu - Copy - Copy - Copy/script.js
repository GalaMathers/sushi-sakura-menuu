const menu = {
  rolls: [
    ["Sakura Crunch Roll", "Mango, avocado, shrimp, spicy crab cover, and tobiko.", "IQD 12,500 · 4 pcs | IQD 17,000 · 6 pcs", "NEW" , "assets/sakura-crunch-roll.jpg"],
    ["Royal Salmon Roll", "Salmon, avocado, spring onion, salmon cover, mayo, and red caviar.", "IQD 13,000 · 4 pcs | IQD 18,000 · 6 pcs", "NEW" , "assets/royal-salmon-roll.png"],
    ["Deep-Fried Salmon Roll", "Salmon, cream cheese, and avocado.", "IQD 12,000 · 6 pcs", "", "assets/deep-fried-salmon-roll.jpg"],
    ["Deep-Fried Kani Roll", "Crab, cucumber, and avocado.", "IQD 12,000 · 6 pcs", "", "assets/deep-fried-kani-roll.jpg"],
    ["Deep-Fried Shrimp Roll", "Shrimp tempura, spicy carrot, and cream cheese.", "IQD 11,000 · 6 pcs", "", "assets/deep-fried-shrimp-roll.jpg"],
    ["Flame Salmon Roll", "Mango, cream cheese, spicy carrot, torched salmon mix, teriyaki sauce.", "IQD 13,000 · 4 pcs | IQD 18,000 · 6 pcs", "POPULAR" , "assets/flame-salmon-roll.jpg"],
    ["Sakura Blossom", "Cucumber, cream cheese, shrimp mix, and sriracha mayo.", "IQD 13,000 · 4 pcs | IQD 16,500 · 6 pcs", "" , "assets/sakura-blossom.jpg"],
    ["California Roll", "Shrimp tempura, avocado, and masago.", "IQD 12,000 · 4 pcs | IQD 15,500 · 6 pcs", "" , "assets/california-roll.jpg"],
    ["Tuna Futamaki", "Tuna, spicy carrot, and cream cheese.", "IQD 10,000 · 4 pcs | IQD 14,000 · 6 pcs", "" , "assets/tuna-futamaki.jpg"],
    ["Salmon Futamaki", "Salmon, cucumber, and cream cheese.", "IQD 10,000 · 4 pcs | IQD 14,000 · 6 pcs", "" , "assets/salmon-futamaki.jpg"],
    ["Sakura Crown Roll", "Shrimp tempura, spicy carrot, cucumber, and cheddar cheese on top.", "IQD 14,000 · 4 pcs | IQD 18,000 · 6 pcs", "" , "assets/sakura-crown-roll.jpg"],
    ["Veggie Futamaki", "Cucumber, avocado, spicy carrot, and cream cheese.", "IQD 9,000 · 4 pcs | IQD 12,000 · 6 pcs", "VEGETARIAN" , "assets/veggie-futamaki.jpg"],
    ["Rainbow Roll", "Crab, cucumber, cream cheese, salmon, tuna, mango, shrimp, and avocado on top.", "IQD 15,000 · 4 pcs | IQD 18,000 · 6 pcs", "" , "assets/rainbow-roll.jpg"],
    ["Sakura Crown Roll II", "Salmon, crab, and cream cheese.", "IQD 14,000 · 4 pcs | IQD 18,000 · 6 pcs", "" , "assets/sakura-crown-roll-ii.jpg"],
    ["Refresh Roll", "Shrimp tempura, cream cheese, mango, and caviar on top.", "IQD 13,000 · 4 pcs | IQD 16,500 · 6 pcs", "" , "assets/refresh-roll.jpg"],
    ["Cherry Blossom Roll", "Avocado, crab, cream cheese, salmon cover, and spicy mayo.", "IQD 12,000 · 4 pcs | IQD 14,500 · 6 pcs", "" , "assets/cherry-blossom-roll.jpg"],
    ["Tokyo Roll", "Salmon, shrimp tempura, crab, avocado cover, and red caviar.", "IQD 14,000 · 4 pcs | IQD 17,000 · 6 pcs", "" , "assets/tokyo-roll.jpg"],
    ["Sakura Bliss", "Mango, cream cheese, shrimp, masago, and unagi sauce.", "IQD 13,000 · 4 pcs | IQD 16,500 · 6 pcs", "" , "assets/sakura-bliss.jpg"],
    ["Salmon Philadelphia", "Cucumber, cream cheese, and salmon on top.", "IQD 10,000 · 4 pcs | IQD 14,000 · 6 pcs", "" , "assets/salmon-philadelphia.jpg"],
    ["Philadelphia Shrimp Roll", "Cucumber, cream cheese, and shrimp cover.", "IQD 10,000 · 4 pcs | IQD 14,000 · 6 pcs", "" , "assets/philadelphia-shrimp-roll.jpg"],
    ["Crazy Dragon Roll", "Crab, avocado, shrimp tempura, masago, and sliced avocado on top.", "IQD 14,000 · 4 pcs | IQD 16,500 · 6 pcs", "" , "assets/crazy-dragon-roll.jpg"]
  ],
  specials: [
    ["Sushi Burger", "Cream cheese, mango, avocado, and masago. Choose salmon, crab, or shrimp.", "IQD 15,000 · Salmon | IQD 15,000 · Crab | IQD 15,000 · Shrimp", "" , "assets/sushi-burger.jpg"],
    ["Dumplings", "Choose chicken or beef dumplings.", "IQD 10,000 · Chicken | IQD 11,000 · Beef", "" , "assets/chicken-dumplings.jpg"],
    ["Fajita Wrap", "Chicken, bell pepper, onion, mushroom, sweet corn, and mozzarella cheese.", "IQD 6,000", "", "assets/fajita-wrap-cropped.jpg"],
    ["Gunkan", "Rice, cream cheese, red caviar, and nori.", "IQD 7,000", "" , "assets/gunkan.jpg"],
    ["Temaki", "Choose salmon, shrimp, crab, or veggies with cream cheese.", "IQD 10,000 · Veggies | IQD 12,000 · Salmon | IQD 12,000 · Shrimp | IQD 12,000 · Crab", "" , "assets/temaki.jpg"],
    ["Onigiri", "Choose crab or crazy shrimp.", "IQD 8,000 · 2 pcs", "" , "assets/onigiri.jpg"],
    ["Sakura Salmon Dog", "Philadelphia cheese, shrimp, cucumber, crispy carrots, and sakura sauce.", "IQD 13,000", "" , "assets/sakura-salmon-dog.jpg"],
    ["Sakura Shrimp Dog", "Philadelphia cheese, shrimp, spicy carrot, crispy potatoes, and sakura sauce.", "IQD 12,000", "" , "assets/sakura-shrimp-dog.jpg"],
    ["Gyoza", "Ground beef dumplings.", "IQD 12,000", "" , "assets/gyoza.jpg"]
  ],
  bowls: [
    ["Osaka Poke Bowl · Shrimp", "Sushi rice, tempura shrimp, marinated cucumber, cream cheese, sweet corn, spring onions, crispy potatoes, edamame, sesame, and nori.", "IQD 15,000", "" , "assets/osaka-poke-bowl-shrimp.jpg"],
    ["Osaka Poke Bowl · Salmon", "Sushi rice, salmon, marinated cucumber, cream cheese, sweet corn, spring onions, crispy potatoes, edamame, sesame, and nori.", "IQD 13,500", "" , "assets/osaka-poke-bowl-salmon.jpg"],
    ["Rizzo", "Crispy chicken, sakura sauce, crispy potato, and rice.", "IQD 6,500", "" , "assets/rizzo.jpg"],
    ["Fried Rice", "Zucchini, carrot, bell pepper, onion, sweet corn, and mushroom. Choose your protein.", "IQD 11,000 · Veggies | IQD 12,000 · Chicken | IQD 13,000 · Beef | IQD 14,000 · Seafood", "" , "assets/fried-rice.jpg"],
    ["Noodles", "Zucchini, carrot, bell pepper, onion, and mushroom. Choose your protein.", "IQD 11,500 · Veggies | IQD 12,500 · Chicken | IQD 13,500 · Beef | IQD 14,000 · Seafood", "" , "assets/noodles.jpg"]
  ],
  nigiri: [
    ["Salmon & Avocado Nigiri", "Rice, salmon, avocado, nori, mayo, and black caviar.", "IQD 12,000 · 3 pcs", "" , "assets/salmon-avocado-nigiri.jpg"],
    ["Avocado Nigiri", "Sliced avocado and rice.", "IQD 9,000", "VEGETARIAN" , "assets/avocado-nigiri.jpg"],
    ["Kani Nigiri", "Crab and seasoned sushi rice.", "IQD 10,000", "" , "assets/kani-nigiri.jpg"],
    ["Shrimp Nigiri", "Shrimp and seasoned sushi rice.", "IQD 11,000", "" , "assets/shrimp-nigiri.png"],
    ["Tuna Nigiri", "Tuna and seasoned sushi rice.", "IQD 12,000", "" , "assets/tuna-nigiri.jpg"],
    ["Salmon Nigiri", "Salmon and seasoned sushi rice.", "IQD 10,000", "" , "assets/salmon-nigiri.jpg"],
    ["Nikit", "Choose shrimp mix or crab filling.", "IQD 8,000 · Shrimp · 4 pcs | IQD 8,000 · Crab", "" , "assets/nikit-shrimp.jpg"]
  ],
  maki: [
    ["Salmon Maki", "Raw salmon, rice, and nori.", "IQD 13,000", "" , "assets/salmon-maki.jpg"],
    ["Rainbow Maki", "Avocado, salmon, tuna, rice, and nori.", "IQD 15,000", "" , "assets/rainbow-maki.png"],
    ["Kani Maki", "Kani mix, rice, and nori.", "IQD 11,500", "" , "assets/kani-maki.jpg"],
    ["Tuna Maki", "Raw tuna, rice, and nori.", "IQD 12,000", "" , "assets/tuna-maki.jpg"],
    ["Cucumber Maki", "Cucumber, rice, and nori.", "IQD 7,000", "VEGETARIAN" , "assets/cucumber-maki.jpg"]
  ],
  sauces: [
    ["Salted Edamame", "Edamame with sea salt.", "IQD 7,000", "", "assets/salted-edamame.png"],
    ["Spicy Mayo", "Creamy spicy mayo.", "IQD 1,000", "", "assets/spicy-mayo.png"],
    ["Sakura Dynamite Sauce", "Sakura's signature dynamite sauce.", "IQD 1,000", "", "assets/sakura-dynamite-sauce.png"],
    ["Wasabi", "Traditional wasabi.", "IQD 1,000", "", "assets/wasabi.png"],
    ["Ginger", "Pickled ginger.", "IQD 1,000", "", "assets/ginger.png"],
    ["Soy Sauce", "Classic soy sauce.", "IQD 1,000", "", "assets/soy-sauce.png"]
  ],
  drinks: [
    ["Coca-Cola", "Chilled soft drink.", "IQD 1,000", "" , "assets/coca-cola.png"],
    ["Coca-Cola Zero", "Chilled zero-sugar soft drink.", "IQD 1,000", "" , "assets/coca-cola-zero.png"],
    ["Sprite", "Chilled lemon-lime soft drink.", "IQD 1,000", "" , "assets/sprite.png"],
    ["Fanta", "Chilled fruit-flavored soft drink.", "IQD 1,000", "" , "assets/fanta.png"],
    ["Water", "Still bottled water.", "IQD 500", "" , "assets/water.png"]
  ]
};

const grid = document.querySelector('#menu-grid');
let currentLanguage = 'en';
const translations = {
  en: {
    orderNow: 'Order now', heroEyebrow: 'Delivery only · made with care', heroTitle: 'A little Tokyo,<br /><em>delivered to you.</em>', heroDescription: 'Fresh sushi, warm bowls, and beautiful bites for your table.', exploreMenu: 'Explore the menu', pressMe: 'Press me',
    introEyebrow: 'Welcome to Sushi Sakura', introTitle: 'Simple ingredients.<br /><em>Extraordinary flavor.</em>', introDescription: 'Every order is prepared fresh for delivery. This is a sample menu—update the dishes, prices, and ordering link with your own details.', storiesEyebrow: 'A taste in motion', storiesTitle: 'Made fresh.<br /><em>Made for you.</em>', storiesDescription: 'A closer look at the color, texture, and care in every Sushi Sakura order.', storyOne: 'Freshly prepared', storyTwo: 'Beautiful details', storyThree: 'Ready to enjoy', storyFour: 'Delivered with care',
    menuEyebrow: 'Our menu', menuTitle: 'Find your <em>favorite.</em>', searchLabel: 'Search the menu', searchPlaceholder: 'Search dishes, ingredients, or categories', clearSearch: 'Clear search', searchResults: '{count} dishes found for “{query}”', searchEmpty: 'No dishes found for “{query}”. Try another name or ingredient.', tabRolls: 'Signature Rolls', tabSpecials: 'Specials & Hot', tabBowls: 'Bowls & Rice', tabNigiri: 'Nigiri', tabMaki: 'Maki Rolls', tabSauces: 'Sauces', tabDrinks: 'Drinks',
    deliveryEyebrow: 'Sushi at your door', deliveryTitle: 'Ready when<br /><em>you are.</em>', deliveryDescription: 'Delivery only. Place your order through your preferred delivery app or contact us directly.', customerSupport: 'Customer support', supportDescription: "Contact the owner directly and we'll be happy to help.", supportNumber: '0750 911 3224', whatsapp: 'WhatsApp', orderOn: 'Order on', feedbackEyebrow: 'Your experience', feedbackTitle: 'How was your<br /><em>Sushi Sakura?</em>', feedbackDescription: 'Tap a star to send your rating directly to us on WhatsApp.', feedbackNote: 'Your WhatsApp chat will open with your feedback ready to send.', feedbackRatingLabel: 'Choose a rating', feedbackCommentLabel: 'Tell us more', feedbackCommentPlaceholder: 'Write your feedback here…', feedbackSend: 'Send feedback on WhatsApp', feedbackMessage: 'Hi Sushi Sakura! I would like to rate my experience: {rating} out of 5 stars.', feedbackCommentMessage: 'Hi Sushi Sakura! My feedback: {comment}', footerDelivery: '© 2026 · Delivery only', designer: 'Designed by (G-Designers)'
  },
  ku: {
    orderNow: 'داواکردن', heroEyebrow: 'تەنها گەیاندن · بە خۆشەویستی ئامادەکراوە', heroTitle: 'کەمێک تۆکیۆ،<br /><em>بۆت دەگەیەنرێت.</em>', heroDescription: 'سوشیی تازە، خواردنی گەرم و چێژی جوان بۆ مێزەکەت.', exploreMenu: 'بینینی مێنیو', pressMe: 'پەیوەندیمان پێوە بکە',
    introEyebrow: 'بەخێربێیت بۆ سوشی ساکورا', introTitle: 'پێکهاتەی سادە.<br /><em>تامێکی نایاب.</em>', introDescription: 'هەموو داواکارییەک بە تازەیی بۆ گەیاندن ئامادە دەکرێت. زانیارییەکانی مێنیو و بەستەری داواکردن بە پێویستی خۆت بگۆڕە.', storiesEyebrow: 'تامێک لە جوڵەدا', storiesTitle: 'بە تازەیی ئامادەکراوە.<br /><em>بۆ تۆ دروستکراوە.</em>', storiesDescription: 'نزیکتر لە ڕەنگ، ڕووکار و گرنگیدانەوە لە هەر داواکارییەکی سوشی ساکورا.', storyOne: 'بە تازەیی ئامادەکراوە', storyTwo: 'وردەکارییە جوانەکان', storyThree: 'ئامادەی چێژ وەرگرتن', storyFour: 'بە گرنگیدانەوە دەگەیەنرێت',
    menuEyebrow: 'مێنیوەکەمان', menuTitle: '<em>دڵخوازەکەت</em> بدۆزەوە.', searchLabel: 'گەڕان لە مێنیو', searchPlaceholder: 'گەڕان بۆ خواردن، پێکهاتە یان بەشەکان', clearSearch: 'سڕینەوەی گەڕان', searchResults: '{count} خواردن بۆ “{query}” دۆزرایەوە', searchEmpty: 'هیچ خواردنێک بۆ “{query}” نەدۆزرایەوە. ناو یان پێکهاتەیەکی تر تاقی بکەوە.', tabRolls: 'ڕۆڵە تایبەتەکان', tabSpecials: 'تایبەت و گەرم', tabBowls: 'کاسە و برنج', tabNigiri: 'نیگیری', tabMaki: 'ماکی', tabSauces: 'سۆسەکان', tabDrinks: 'خواردنەوەکان',
    deliveryEyebrow: 'سوشی تا دەرگای ماڵت', deliveryTitle: 'کاتێک تۆ<br /><em>ئامادەیت.</em>', deliveryDescription: 'تەنها گەیاندن. لە ڕێگەی ئەپی دڵخوازت یان پەیوەندی ڕاستەوخۆ داوا بکە.', customerSupport: 'پشتگیری کڕیار', supportDescription: 'ڕاستەوخۆ پەیوەندی بە خاوەنەکەوە بکە؛ بە خۆشحاڵی یارمەتیت دەدەین.', supportNumber: '0750 911 3224', whatsapp: 'واتساپ', orderOn: 'داواکردن لە', feedbackEyebrow: 'ئەزموونی تۆ', feedbackTitle: 'سوشی ساکورا<br /><em>چۆن بوو؟</em>', feedbackDescription: 'ئەستێرەیەک هەڵبژێرە بۆ ناردنی هەڵسەنگاندنەکەت ڕاستەوخۆ لە واتساپ.', feedbackNote: 'چاتی واتساپت بە فیدباکەکەتەوە ئامادە دەکرێت.', feedbackRatingLabel: 'هەڵسەنگاندن هەڵبژێرە', feedbackCommentLabel: 'زیاتر پێمان بڵێ', feedbackCommentPlaceholder: 'فیدباکەکەت لێرە بنووسە…', feedbackSend: 'فیدباک لە واتساپ بنێرە', feedbackMessage: 'سڵاو سوشی ساکورا! دەمەوێت ئەزموونەکەم هەڵسەنگێنم: {rating} لە ٥ ئەستێرە.', feedbackCommentMessage: 'سڵاو سوشی ساکورا! فیدباکەکەم: {comment}', footerDelivery: '© ٢٠٢٦ · تەنها گەیاندن', designer: 'دیزاین لەلایەن (G-Designers)'
  },
  ar: {
    orderNow: 'اطلب الآن', heroEyebrow: 'توصيل فقط · محضّر بعناية', heroTitle: 'قليل من طوكيو،<br /><em>يوصَل إليك.</em>', heroDescription: 'سوشي طازج وأطباق دافئة ولقيمات جميلة لمائدتك.', exploreMenu: 'استكشف القائمة', pressMe: 'تابعنا',
    introEyebrow: 'أهلاً بك في سوشي ساكورا', introTitle: 'مكوّنات بسيطة.<br /><em>نكهة استثنائية.</em>', introDescription: 'يُحضَّر كل طلب طازجاً للتوصيل. يمكنك تحديث الأطباق والأسعار ورابط الطلب وفقاً لاحتياجاتك.', storiesEyebrow: 'مذاق في حركة', storiesTitle: 'يُحضّر طازجاً.<br /><em>صُنع لأجلك.</em>', storiesDescription: 'نظرة أقرب إلى اللون والقوام والعناية في كل طلب من سوشي ساكورا.', storyOne: 'محضّر طازجاً', storyTwo: 'تفاصيل جميلة', storyThree: 'جاهز للاستمتاع', storyFour: 'يصل بعناية',
    menuEyebrow: 'قائمتنا', menuTitle: 'اعثر على <em>المفضّل لديك.</em>', searchLabel: 'ابحث في القائمة', searchPlaceholder: 'ابحث عن أطباق أو مكوّنات أو أقسام', clearSearch: 'مسح البحث', searchResults: 'تم العثور على {count} طبق لـ “{query}”', searchEmpty: 'لم يتم العثور على أطباق لـ “{query}”. جرّب اسماً أو مكوّناً آخر.', tabRolls: 'لفائف مميزة', tabSpecials: 'مميّزات وساخن', tabBowls: 'أطباق وأرز', tabNigiri: 'نيغيري', tabMaki: 'ماكي', tabSauces: 'الصلصات', tabDrinks: 'المشروبات',
    deliveryEyebrow: 'سوشي إلى بابك', deliveryTitle: 'جاهز عندما<br /><em>تكون جاهزاً.</em>', deliveryDescription: 'توصيل فقط. اطلب عبر تطبيق التوصيل المفضل لديك أو تواصل معنا مباشرةً.', customerSupport: 'خدمة العملاء', supportDescription: 'تواصل مباشرةً مع المالك وسنسعد بمساعدتك.', supportNumber: '0750 911 3224', whatsapp: 'واتساب', orderOn: 'اطلب عبر', feedbackEyebrow: 'تجربتك', feedbackTitle: 'كيف كانت تجربة<br /><em>سوشي ساكورا؟</em>', feedbackDescription: 'اضغط على نجمة لإرسال تقييمك مباشرةً إلينا عبر واتساب.', feedbackNote: 'ستُفتح محادثة واتساب وبها ملاحظاتك جاهزة للإرسال.', feedbackRatingLabel: 'اختر تقييماً', feedbackCommentLabel: 'أخبرنا المزيد', feedbackCommentPlaceholder: 'اكتب ملاحظاتك هنا…', feedbackSend: 'أرسل الملاحظات عبر واتساب', feedbackMessage: 'مرحباً سوشي ساكورا! أود تقييم تجربتي: {rating} من 5 نجوم.', feedbackCommentMessage: 'مرحباً سوشي ساكورا! ملاحظاتي: {comment}', footerDelivery: '© ٢٠٢٦ · توصيل فقط', designer: 'تصميم (G-Designers)'
  }
};

const foodTerms = {
  ku: {
    'Chilled zero-sugar soft drink': 'خواردنەوەی ساردی بێ شەکر', 'Chilled lemon-lime soft drink': 'خواردنەوەی ساردی لیمۆیی', 'Chilled fruit-flavored soft drink': 'خواردنەوەی ساردی بە تامی میوە', 'Still bottled water': 'ئاوی بۆتڵکراوی بێ گاز',
    'Choose your protein': 'جۆری پڕۆتینەکەت هەڵبژێرە', 'Choose chicken or beef dumplings': 'دۆمپلینگی مریشک یان گۆشتی مانگا هەڵبژێرە', 'Choose salmon, shrimp, crab, or veggies with cream cheese': 'سالمۆن، میگو، کراو یان ڕووەک لەگەڵ پەنیری کریم هەڵبژێرە', 'Choose crab or crazy shrimp': 'کراو یان میگۆی توند هەڵبژێرە', 'Choose shrimp mix or crab filling': 'تێکەڵەی میگو یان ناوەکی کراو هەڵبژێرە',
    'Shrimp tempura': 'تێمپۆرای میگو', 'cream cheese': 'پەنیری کریم', 'spicy carrot': 'گەزەری توند', 'torched salmon mix': 'تێکەڵەی سالمۆنی برژاو', 'teriyaki sauce': 'سۆسی تیریاکی', 'sriracha mayo': 'مایۆی سريراچا', 'shrimp mix': 'تێکەڵەی میگو', 'red caviar': 'کاڤیاری سور', 'black caviar': 'کاڤیاری ڕەش', 'sweet corn': 'گەنمی شیرین', 'spring onions': 'پیازی سەوز', 'crispy potatoes': 'پەتاتەی بریژاو', 'bell pepper': 'فلفلی شیرین', 'ground beef': 'گۆشتی مانگای وردکراو', 'fried rice': 'برنجی بریژاو', 'raw salmon': 'سالمۆنی خام', 'raw tuna': 'تۆنی خام', 'zero-sugar': 'بێ شەکر',
    'avocado': 'ئەڤۆکادۆ', 'salmon': 'سالمۆن', 'shrimp': 'میگو', 'crab': 'کراو', 'tuna': 'تۆن', 'cucumber': 'خیار', 'mango': 'مانگۆ', 'chicken': 'مریشک', 'beef': 'گۆشتی مانگا', 'veggies': 'ڕووەک', 'vegetables': 'ڕووەک', 'mushroom': 'قارچ', 'onion': 'پیاز', 'zucchini': 'کەدوو', 'carrot': 'گەزەر', 'cheddar cheese': 'پەنیری چێدەر', 'mozzarella cheese': 'پەنیری مۆتزاریلا', 'Philadelphia cheese': 'پەنیری فیلادێلفیا', 'coconut': 'ناریل', 'caviar': 'کاڤیار', 'masago': 'ماسەگۆ', 'tobiko': 'تۆبیکۆ', 'sesame': 'کونجد', 'nori': 'نۆری', 'rice': 'برنج', 'noodles': 'نودڵز', 'filling': 'ناوەکی', 'dumplings': 'دۆمپلینگ', 'soft drink': 'خواردنەوەی گازی', 'water': 'ئاو', 'sauce': 'سۆس', 'mayo': 'مایۆ', 'mix': 'تێکەڵە', 'sliced': 'بڕدراو', 'cover': 'ڕووپۆش', 'on top': 'لەسەرەوە', 'Choose': 'هەڵبژێرە', 'Chilled': 'سارد', 'Still': 'بێ گاز', 'and': 'و', 'or': 'یان', 'with': 'لەگەڵ', 'your': 'خۆت', 'protein': 'پڕۆتین', 'pcs': 'پارچە'
  },
  ar: {
    'Chilled zero-sugar soft drink': 'مشروب غازي بارد خالٍ من السكر', 'Chilled lemon-lime soft drink': 'مشروب غازي بارد بالليمون', 'Chilled fruit-flavored soft drink': 'مشروب غازي بارد بنكهة الفاكهة', 'Still bottled water': 'مياه معبأة غير غازية',
    'Choose your protein': 'اختر البروتين', 'Choose chicken or beef dumplings': 'اختر دمبلنغ الدجاج أو اللحم البقري', 'Choose salmon, shrimp, crab, or veggies with cream cheese': 'اختر السلمون أو الروبيان أو الكابوريا أو الخضار مع جبن كريمي', 'Choose crab or crazy shrimp': 'اختر الكابوريا أو الروبيان الحار', 'Choose shrimp mix or crab filling': 'اختر خليط الروبيان أو حشوة الكابوريا',
    'Shrimp tempura': 'تمبورا الروبيان', 'cream cheese': 'جبن كريمي', 'spicy carrot': 'جزر حار', 'torched salmon mix': 'خليط سلمون مشوي', 'teriyaki sauce': 'صلصة ترياكي', 'sriracha mayo': 'مايونيز سريراتشا', 'shrimp mix': 'خليط الروبيان', 'red caviar': 'كافيار أحمر', 'black caviar': 'كافيار أسود', 'sweet corn': 'ذرة حلوة', 'spring onions': 'بصل أخضر', 'crispy potatoes': 'بطاطا مقرمشة', 'bell pepper': 'فلفل حلو', 'ground beef': 'لحم بقري مفروم', 'fried rice': 'أرز مقلي', 'raw salmon': 'سلمون نيء', 'raw tuna': 'تونة نيئة', 'zero-sugar': 'خالٍ من السكر',
    'avocado': 'أفوكادو', 'salmon': 'سلمون', 'shrimp': 'روبيان', 'crab': 'كابوريا', 'tuna': 'تونة', 'cucumber': 'خيار', 'mango': 'مانجو', 'chicken': 'دجاج', 'beef': 'لحم بقري', 'veggies': 'خضار', 'vegetables': 'خضار', 'mushroom': 'فطر', 'onion': 'بصل', 'zucchini': 'كوسا', 'carrot': 'جزر', 'cheddar cheese': 'جبن شيدر', 'mozzarella cheese': 'جبن موزاريلا', 'Philadelphia cheese': 'جبن فيلادلفيا', 'coconut': 'جوز الهند', 'caviar': 'كافيار', 'masago': 'ماساغو', 'tobiko': 'توبيكو', 'sesame': 'سمسم', 'nori': 'نوري', 'rice': 'أرز', 'noodles': 'نودلز', 'filling': 'حشوة', 'dumplings': 'دمبلنغ', 'soft drink': 'مشروب غازي', 'water': 'ماء', 'sauce': 'صلصة', 'mayo': 'مايونيز', 'mix': 'خليط', 'sliced': 'شرائح', 'cover': 'تغطية', 'on top': 'في الأعلى', 'Choose': 'اختر', 'Chilled': 'بارد', 'Still': 'غير غازي', 'and': 'و', 'or': 'أو', 'with': 'مع', 'your': 'الخاصة بك', 'protein': 'بروتين', 'pcs': 'قطع'
  }
};

function localizeDescription(description) {
  if (currentLanguage === 'en') return description;
  return Object.entries(foodTerms[currentLanguage])
    .sort(([a], [b]) => b.length - a.length)
    .reduce((text, [source, translation]) => text.replace(new RegExp(source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), translation), description);
}

function setLanguage(language) {
  const copy = translations[language];
  currentLanguage = language;
  document.documentElement.lang = language === 'ku' ? 'ckb' : language;
  document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = copy[element.dataset.i18n];
    element.innerHTML = element.dataset.i18n === 'supportNumber' ? `<bdi dir="ltr">\u200E${value}</bdi>` : value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => { element.innerHTML = copy[element.dataset.i18nHtml]; });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => { element.setAttribute('aria-label', copy[element.dataset.i18nAriaLabel]); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { element.placeholder = copy[element.dataset.i18nPlaceholder]; });
  document.querySelectorAll('.language-button').forEach(button => button.classList.toggle('active', button.dataset.language === language));
  localStorage.setItem('sushi-sakura-language', language);
  if (document.querySelector('#menu-search-input')) updateMenu();
}
const formatPrice = price => price.split(' | ').join('<br>');

function addDish3DInteractions() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  grid.querySelectorAll('.dish').forEach(dish => {
    const reset = () => {
      dish.classList.remove('is-tilting');
      dish.style.removeProperty('--tilt-x');
      dish.style.removeProperty('--tilt-y');
      dish.style.removeProperty('--tilt-scale');
      dish.style.removeProperty('--tilt-lift');
    };

    dish.addEventListener('pointermove', event => {
      const bounds = dish.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      dish.classList.add('is-tilting');
      dish.style.setProperty('--tilt-x', `${-y * 8}deg`);
      dish.style.setProperty('--tilt-y', `${x * 8}deg`);
      dish.style.setProperty('--tilt-scale', '1.025');
    });

    dish.addEventListener('pointerleave', reset);
    dish.addEventListener('pointercancel', reset);
    dish.addEventListener('wheel', () => {
      dish.classList.add('is-tilting');
      dish.style.setProperty('--tilt-scale', '1.025');
      dish.style.setProperty('--tilt-lift', '-8px');
      window.setTimeout(reset, 160);
    }, { passive: true });
  });
}

function addHero3DInteraction() {
  const hero = document.querySelector('.hero');
  if (!hero || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let wheelTimer;
  const reset = () => {
    hero.classList.remove('is-tilting');
    ['--hero-nav-x', '--hero-nav-y', '--hero-logo-x', '--hero-logo-y', '--hero-logo-rotate-x', '--hero-logo-rotate-y', '--hero-copy-x', '--hero-copy-y', '--hero-social-x', '--hero-social-y', '--hero-feedback-x', '--hero-feedback-y', '--glow-x', '--glow-y'].forEach(property => hero.style.removeProperty(property));
  };

  hero.addEventListener('pointermove', event => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    hero.classList.add('is-tilting');
    const set = (property, value, unit = 'px') => hero.style.setProperty(property, `${value.toFixed(2)}${unit}`);
    hero.style.setProperty('--glow-x', `${((event.clientX - bounds.left) / bounds.width * 100).toFixed(2)}%`);
    hero.style.setProperty('--glow-y', `${((event.clientY - bounds.top) / bounds.height * 100).toFixed(2)}%`);
    set('--hero-nav-x', x * -3.5); set('--hero-nav-y', y * -2);
    set('--hero-logo-x', x * -5.5); set('--hero-logo-y', y * -4.5);
    set('--hero-logo-rotate-x', y * -1.6, 'deg'); set('--hero-logo-rotate-y', x * 1.6, 'deg');
    set('--hero-copy-x', x * 4.5); set('--hero-copy-y', y * 3);
    set('--hero-social-x', x * -7.5); set('--hero-social-y', y * -6);
    set('--hero-feedback-x', x * 2); set('--hero-feedback-y', y * 1.8);
  });

  hero.addEventListener('pointerleave', reset);
  hero.addEventListener('wheel', () => {
    hero.classList.add('is-tilting');
    window.clearTimeout(wheelTimer);
    wheelTimer = window.setTimeout(reset, 180);
  }, { passive: true });
}

function render(dishes) {
  grid.innerHTML = dishes.map(([name, description, price, tag, image]) => `<article class="dish dish-with-image"${image ? ` style="background-image: url('${image}')"` : ''}><div class="dish-content"><div class="dish-top"><h3>${name}</h3></div><p>${description}</p>${tag ? `<span class="tag">${tag}</span>` : ''}<span class="price">${formatPrice(price)}</span></div></article>`).join('');
  addDish3DInteractions();
}
let activeCategory = 'rolls';
const searchInput = document.querySelector('#menu-search-input');
const searchClear = document.querySelector('.search-clear');
const searchStatus = document.querySelector('#search-status');
const allDishes = Object.values(menu).flat();

function updateMenu() {
  const query = searchInput.value.trim();
  const normalizedQuery = query.toLocaleLowerCase();
  const dishes = query ? allDishes.filter(dish => dish.slice(0, 4).join(' ').toLocaleLowerCase().includes(normalizedQuery)) : menu[activeCategory];
  render(dishes);
  searchClear.hidden = !query;
  document.querySelector('.tabs').classList.toggle('is-searching', Boolean(query));
  searchStatus.textContent = query
    ? translations[currentLanguage][dishes.length ? 'searchResults' : 'searchEmpty'].replace('{count}', dishes.length).replace('{query}', query)
    : '';
}
document.querySelectorAll('.tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.tabs .active').classList.remove('active');
  button.classList.add('active');
  activeCategory = button.dataset.category;
  searchInput.value = '';
  updateMenu();
}));
searchInput.addEventListener('input', updateMenu);
searchClear.addEventListener('click', () => { searchInput.value = ''; updateMenu(); searchInput.focus(); });
document.querySelectorAll('.language-button').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
const whatsappNumber = '9647509113224';
const feedbackMessage = document.querySelector('#feedback-message');
const feedbackForm = document.querySelector('#feedback-form');
const openWhatsApp = message => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
const ratingStars = document.querySelectorAll('.rating-star');
const highlightRating = (rating, className) => ratingStars.forEach(star => star.classList.toggle(className, Number(star.dataset.rating) <= Number(rating)));
ratingStars.forEach(button => {
  button.addEventListener('mouseenter', () => highlightRating(button.dataset.rating, 'preview'));
  button.addEventListener('focus', () => highlightRating(button.dataset.rating, 'preview'));
  button.addEventListener('click', () => {
    const rating = button.dataset.rating;
    highlightRating(rating, 'selected');
    const comment = feedbackMessage.value.trim();
    const ratingMessage = translations[currentLanguage].feedbackMessage.replace('{rating}', rating);
    const message = comment ? `${ratingMessage}\n\n${translations[currentLanguage].feedbackCommentMessage.replace('{comment}', comment)}` : ratingMessage;
    openWhatsApp(message);
  });
});
document.querySelector('.rating-stars').addEventListener('mouseleave', () => ratingStars.forEach(star => star.classList.remove('preview')));
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const comment = feedbackMessage.value.trim();
  if (!comment) return;
  openWhatsApp(translations[currentLanguage].feedbackCommentMessage.replace('{comment}', comment));
});
setLanguage(localStorage.getItem('sushi-sakura-language') || 'en');
updateMenu();
addHero3DInteraction();
