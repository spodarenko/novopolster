# Reference sites — NovoPolster landing

Джерело: узгоджено в чаті з клієнтом, порівняно проти `ia.md` (9 секцій) і DS (teal ramp, Inter/Sora, product photography).

## Пріоритет 1 — Sparkles
https://sparkles-template.webflow.io

Найкращий структурний метч, майже 1:1 з нашими 9 секціями:
Hero → Contact methods → Services → Differentiators (прозорі ціни) → Testimonials → Pricing table → How it works (4 steps) → Team → FAQ accordion → Final CTA.

Використати як базу для порядку секцій і ритму сторінки. Кольори (beige/cream + warm lifestyle photo) — сумісні з нашим DS, можна докласти teal-акцент з NovoPolster.

## Пріоритет 2 — Cleanora
https://cleanora.webflow.io/

Близький структурний метч + два прямих влучання:
- **Before/after imagery** — точний метч секції 5 (Довіра і докази), коли клієнт надасть фото робіт.
- **Tabbed pricing interface** — добре лягає на наші категорії (Sofa, Matratze, Stühle/Sessel, Teppiche, Auto) в секції 3.

Зелені акценти в логотипі — близько до teal-родини нашого DS.

**Не копіювати:** hero/about з конкретними цифрами досвіду ("20+ years", "98% satisfaction") — порушує правило design-brief.md: досвід TBD, неточні цифри не публікувати.

## Довідково — Kleno
https://kleno.webflow.io

Teal/turquoise іконки — точний колірний метч з DS. Але структурно слабкий: **нема pricing, нема FAQ** (обидва — must-have секції 3 і 6 в нас). Використати тільки як референс стилю іконок/CTA-кнопок, не структури.

## Уникати — Fomic
https://fomic.webflow.io

Navy+жовтий, не наш DS. Hero будує довіру через цифри ("10+ years experience", "2,400+ residences") — той самий anti-паттерн, що й у Cleanora, тут виражений сильніше. Не використовувати як структурний референс.

## Правило застосування

При генерації кожної секції в Claude Design — вказувати, з якого референсу береться патерн (напр. "pricing tabs як у Cleanora, але з нашими категоріями"), і явно виключати stats-hero паттерн (Fomic/Cleanora) через TBD-обмеження з design-brief.md.
