import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const SegmentButton = () => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons

        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'Açık',
            label: 'Açık',
          },
          {
            value: 'Yapılanlar',
            label: 'Yapılanlar',
          },
          {
            value: 'İptal',
            label: 'İptal',
          },
        ]}
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
});

export default SegmentButton;