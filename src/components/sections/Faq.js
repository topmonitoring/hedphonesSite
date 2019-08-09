import React from 'react';

import { Section, Container } from '../../components/globalSectionContainer';

import FaqItem from '../FaqItem';
import ExternalLink from '../ExternalLink';

const FAQS = [
  {
    title: 'Работят ли с Android, IOS?',
    content: () => (
      <>
        Да, Слушалките са съвместими както с Android така и IOS операционни
        системи. А също така и с вички други blutooth предаващи устроиства.
      </>
    ),
  },
  {
    title: 'Какво е включено в конплекта?',
    content: () => (
      <>
        В конплекта са включени 2 безжични слушалки, зарядна станция (кутийка) и
        кабел за зареждане на кутийката от тип (micro usb).
      </>
    ),
  },
  {
    title: 'Как работят?',
    content: () => (
      <>
        За повече подробности може да гледате нашето Youtube видео тук, или да
        се свържите с нас на телефон 0888 888 888.
      </>
    ),
  },
  {
    title: 'Колко време трае доставката?',
    content: () => (
      <>
        Доставките се изпълняват от куриерска фирма Ekont/Speedy. След успешна
        поръчка ще получите продукта си от 2 до 3 работни дни.
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
      </>
    ),
  },
  {
    title: 'Как мога да поръчам?',
    content: () => (
      <>
        Можете да ги поръчате както от саита ни тук, така и на телефон 0888 888
        888.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent="secondary">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Често задавани въпроси</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
