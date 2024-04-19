import * as React from 'react';
import { Avatar, Card, IconButton, Menu } from 'react-native-paper';

const ToDoList = ({title, description, id, deleteReturn}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Card.Title
      title={title}
      subtitle={description}
      left={(props) => <Avatar.Icon {...props} icon="av-timer" color='white' backgroundColor="black"/>}
      right={(props) => (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton {...props} icon="dots-vertical" onPress={openMenu} />}
        >

          <Menu.Item leadingIcon="delete"
          onPress={() => 
            {deleteReturn(id);}
          } title="Delete" />
          
        </Menu>
      )}
      style={{
        backgroundColor: "#EAEAEA",
        margin: 10,
        borderRadius: 10,
      }}
    />
  );
};

export default ToDoList;