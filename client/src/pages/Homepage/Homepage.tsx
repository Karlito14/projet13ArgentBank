import { Banner } from '../../components/Banner/Banner';
import background from '../../assets/img/bank-tree.jpeg';
import { FeaturesList } from '../../components/FeatureList/FeatureList';

export const Homepage = () => {
  return (
    <>
      <Banner image={background} />
      <FeaturesList />
    </>
  );
};
