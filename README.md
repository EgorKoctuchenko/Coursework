# Term paper on the topic of an online store / Курсова робота з темою Інтернет Магазину

[🇺🇸 English](#english-version) | [🇺🇦 Українська](#українська-версія)

---

## English Version

A course work in the form of an online furniture store in the discipline “Organization of databases and knowledge”. MySQL was used as the database. To connect the interface and the database, node.js and Express were used. For the client side, the krovato website layout was used, which was downloaded from a site where free layouts were provided (used for educational purposes only!)

### Main functions

- There are 2 interfaces: Client interface and Administrator interface. The administrator can add, delete, modify records, and the client can only view, add to cart/favorites and filter.
- The administrator also has a convenient option to filter products by category to make it easier to find a product and, for example, change it.
- The client side cannot interact directly with the admin side, which is an important aspect to ensure that the client does not do anything wrong.

### Known issues

- Not all elements of the layout were 100% repeated.
- Some features (for example, “add to cart” or “add to favorites”) are implemented directly in the database, in the table with the goods. Which is not correct).

---

## Українська версія

Курсова робота у вигляді інтернет-магазину меблів з дисципліни «Організація баз даних і знань». Як базу даних використовували MySQL. Для з'єднання інтерфейсу і бази даних використовувався node.js, а також Express. Для клієнтської сторони використовувався макет сайту krovato, що був викачаний з сайту де надавалися безкоштовні макети (використовувалося лише в освітніх цілях!)

### Основні функції

- Є 2 інтерфейси: Клієнтський інтерфейс та інтерфейс Адміністратора. Адміністратор може додавати, видаляти, змінювати записи, а клієнт - лише переглядати, додавати до себе в кошик/обране і фільтрувати.
- Для адміністратора також є зручна можливість фільтрувати товари за категоріями, щоб простіше знайти товар і, наприклад, змінити його.
- Клієнтська частина ніяк не може напряму взаємодіяти з частиною Адміністратора, що є важливим аспектом, щоб клієнт нічого поганого не зробив.

### Відомі проблеми

Через поспіх зі здачею курсової роботи, було зроблено кілька моментів, щоб банально «встигнути»:

- Не всі елементи макети були на 100% повторені.
- Деякі можливості (наприклад, «додати в кошик» або «додати до вибраного» - реалізовано безпосередньо в базі даних, у таблиці з товарами. Що є не вірним).
