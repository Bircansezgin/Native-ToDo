import * as React from 'react';
import { IconButton, Tooltip } from 'react-native-paper';

const TooltipS = () => (
  <Tooltip title="Selected Camera">
    <IconButton icon="camera" selected size={24} onPress={() => {}} />
  </Tooltip>
);

export default TooltipS;