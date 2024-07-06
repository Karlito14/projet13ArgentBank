import chat from '../../assets/img/icon-chat.png';
import money from '../../assets/img/icon-money.png';
import security from '../../assets/img/icon-security.png';
import { Feature } from '../../assets/types/types';
import { FeatureItem } from '../Feature/FeatureItem';
import style from './featureListe.module.scss';

export const FeaturesList = () => {
  const features: Feature[] = [
    {
      image: chat,
      title: 'You are our #1 priority',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      image: money,
      title: 'More savings means higher rates',
      text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      image: security,
      title: 'Security you can trust',
      text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <section className={style.container}>
      {features.map((feature: Feature, index: number) => (
        <FeatureItem feature={feature} key={index} />
      ))}
    </section>
  );
};
