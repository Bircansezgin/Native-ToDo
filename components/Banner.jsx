import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const BannerHeader = ({onVisible}) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      onShowAnimationFinished={onVisible}
      theme={{colors: {primary: 'black'}}}
      visible={visible}
      actions={[
        {
          label: 'OK',
          onPress: () => setVisible(false),
        }
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://banner2.cleanpng.com/20180518/uth/kisspng-computer-icons-information-clip-art-5aff14d8c73108.4737218615266664568159.jpg',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      Merhaba, bu bir bilgilendirici bannerıdır. Lütfen To-Do eklemek istediğiniz başlığı ve açıklamasını giriniz giriniz.
    </Banner>
  );
};

export default BannerHeader;