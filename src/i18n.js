// Локализация: русский и английский.
// Согласно ТЗ пользователь должен иметь возможность переключать язык сайта.

export const translations = {
  ru: {
    siteTitle: 'Букет настроения',
    siteTagline: 'Магазин цветов и букетов',
    nav: {
      news: 'Новости',
      about: 'Об авторе',
      contact: 'Обратная связь',
      products: 'Продукты и услуги'
    },
    aside: {
      tagsTitle: 'Облако тегов',
      tags: ['розы', 'тюльпаны', 'пионы', 'свадьба', 'доставка', 'букеты', 'композиции', '8 марта', 'день рождения', 'подарок'],
      bannerTitle: 'Реклама',
      bannerText: 'Бесплатная доставка по городу при заказе от 3 000 ₽'
    },
    section: {
      bannerTitle: 'Акция',
      bannerText: 'Скидка 15% на свадебные букеты до конца месяца'
    },
    footer: {
      company: 'ИП Корякина А.С. · «Букет настроения»',
      address: 'г. Ростов-на-Дону, ул. Большая Садовая, 105',
      phone: 'Тел.: +7 908 517 50 43',
      author: 'Разработка сайта: Корякина Анна · 2026'
    },
    pages: {
      news: {
        h1: 'Отличная новость.',
        p: 'Уже тепло!',
        intro: 'Свежие букеты к весеннему сезону уже в продаже. Заходите в магазин или оформляйте доставку онлайн.',
        items: [
          { title: 'Майская коллекция', text: 'Новая весенняя линейка букетов с пионами и тюльпанами уже в продаже.', date: '12 мая 2026' },
          { title: 'Бесплатная доставка', text: 'Дарим бесплатную доставку по городу при заказе от 3 000 ₽.', date: '5 мая 2026' },
          { title: 'Свадебный сезон', text: 'Принимаем заявки на оформление свадебных букетов и арок.', date: '1 мая 2026' }
        ],
        downloadLabel: 'Скачать прайс-лист (PDF)',
        downloadFile: 'Прайс-лист_Букет_настроения.txt'
      },
      about: {
        h1: 'Южный федеральный университет',
        subtitle: 'О нашем магазине',
        text: 'Магазин «Букет настроения» работает в Ростове-на-Дону с 2019 года. Мы собираем авторские букеты, выполняем оформление свадеб и доставку цветов по городу. Студенческий проект студентки ЮФУ Корякиной Анны.',
        achievementsTitle: 'Достижения',
        achievements: [
          'Более 5 000 счастливых клиентов',
          'Дипломы городских и областных выставок флористики',
          'Партнёр свадебных площадок Ростова-на-Дону',
          'Доставка по городу 365 дней в году'
        ]
      },
      contact: {
        h1: 'Обратная связь',
        phoneLabel: 'Телефон',
        phone: '+7 908 517 50 43',
        whatsapp: 'WhatsApp: +7 908 517 50 43',
        telegram: 'Telegram: @buket_nastroeniya',
        formTitle: 'Форма для отправки вопроса',
        nameLabel: 'Имя',
        emailLabel: 'E-mail',
        messageLabel: 'Ваш вопрос',
        submitLabel: 'Отправить',
        thanks: 'Спасибо! Ваш вопрос отправлен.'
      },
      products: {
        h1: 'Продукты и услуги',
        intro: 'Авторские букеты, готовые композиции и услуги флористов.',
        table: {
          name: 'Наименование',
          desc: 'Описание',
          price: 'Цена, ₽'
        },
        rows: [
          { name: 'Букет «Весеннее настроение»', desc: 'Тюльпаны, фрезии, эвкалипт', price: 2500 },
          { name: 'Букет невесты «Облако»', desc: 'Пионы, розы кустовые, гипсофила', price: 6500 },
          { name: 'Композиция в шляпной коробке', desc: 'Розы, гортензия, зелень', price: 4200 },
          { name: 'Моно-букет из 25 роз', desc: 'Голландские розы, 60 см', price: 3500 },
          { name: 'Свадебная арка', desc: 'Оформление под ключ', price: 18000 },
          { name: 'Услуга доставки по городу', desc: 'В течение 2 часов', price: 300 }
        ]
      }
    },
    langSwitchLabel: 'EN',
    langSwitchTitle: 'Переключить на английский'
  },
  en: {
    siteTitle: 'Mood Bouquet',
    siteTagline: 'Flower and bouquet shop',
    nav: {
      news: 'News',
      about: 'About the author',
      contact: 'Contact',
      products: 'Products and services'
    },
    aside: {
      tagsTitle: 'Tag cloud',
      tags: ['roses', 'tulips', 'peonies', 'wedding', 'delivery', 'bouquets', 'arrangements', 'March 8', 'birthday', 'gift'],
      bannerTitle: 'Promo',
      bannerText: 'Free delivery in the city for orders over 3 000 ₽'
    },
    section: {
      bannerTitle: 'Sale',
      bannerText: '15% off all wedding bouquets through the end of the month'
    },
    footer: {
      company: 'IP Koriakina A.S. · Mood Bouquet',
      address: '105 Bolshaya Sadovaya St., Rostov-on-Don',
      phone: 'Phone: +7 908 517 50 43',
      author: 'Website built by Anna Koriakina · 2026'
    },
    pages: {
      news: {
        h1: 'Great news.',
        p: 'It is finally warm!',
        intro: 'Spring bouquets are now in store. Visit us or order online for delivery.',
        items: [
          { title: 'May collection', text: 'New spring lineup of peony and tulip bouquets is on sale.', date: 'May 12, 2026' },
          { title: 'Free delivery', text: 'Free city delivery on orders over 3 000 ₽.', date: 'May 5, 2026' },
          { title: 'Wedding season', text: 'Now accepting orders for wedding bouquets and floral arches.', date: 'May 1, 2026' }
        ],
        downloadLabel: 'Download price list (PDF)',
        downloadFile: 'Mood_Bouquet_price_list.txt'
      },
      about: {
        h1: 'Southern Federal University',
        subtitle: 'About our shop',
        text: 'Mood Bouquet has been operating in Rostov-on-Don since 2019. We craft signature bouquets, decorate weddings and deliver flowers across the city. Student project by Anna Koriakina (SFU).',
        achievementsTitle: 'Achievements',
        achievements: [
          'More than 5,000 happy clients',
          'Awards from city and regional floristry exhibitions',
          'Partner of Rostov-on-Don wedding venues',
          'City-wide delivery 365 days a year'
        ]
      },
      contact: {
        h1: 'Contact',
        phoneLabel: 'Phone',
        phone: '+7 908 517 50 43',
        whatsapp: 'WhatsApp: +7 908 517 50 43',
        telegram: 'Telegram: @buket_nastroeniya',
        formTitle: 'Send us a question',
        nameLabel: 'Name',
        emailLabel: 'E-mail',
        messageLabel: 'Your question',
        submitLabel: 'Send',
        thanks: 'Thank you! Your question has been sent.'
      },
      products: {
        h1: 'Products and services',
        intro: 'Signature bouquets, ready-made arrangements and florist services.',
        table: {
          name: 'Name',
          desc: 'Description',
          price: 'Price, ₽'
        },
        rows: [
          { name: 'Bouquet "Spring Mood"', desc: 'Tulips, freesias, eucalyptus', price: 2500 },
          { name: 'Bridal bouquet "Cloud"', desc: 'Peonies, spray roses, gypsophila', price: 6500 },
          { name: 'Hat-box arrangement', desc: 'Roses, hydrangea, greenery', price: 4200 },
          { name: 'Mono-bouquet of 25 roses', desc: 'Dutch roses, 60 cm', price: 3500 },
          { name: 'Wedding arch', desc: 'Turn-key floral arch', price: 18000 },
          { name: 'City delivery service', desc: 'Delivered within 2 hours', price: 300 }
        ]
      }
    },
    langSwitchLabel: 'RU',
    langSwitchTitle: 'Switch to Russian'
  }
};
