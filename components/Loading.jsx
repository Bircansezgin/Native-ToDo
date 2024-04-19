import * as React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {View} from "react-native";

const Loading = () => (
    <View style={{
        flex: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }}>
        <ActivityIndicator animating={true} color={MD2Colors.red800}
                           size="large"/>
    </View>
);

export default Loading;
