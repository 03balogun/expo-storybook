// components/LoadingRow.js
import React, {useState, useEffect} from 'react';
import {Animated, Text, View, Easing, SafeAreaView, ViewStyle} from 'react-native';
import {styles} from '../../constants/globalStyles';

interface GlowViewInterface extends React.ComponentProps<typeof View>{
    style?: ViewStyle
}
const GlowView = (props: GlowViewInterface) => {
    const [glowAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.timing(glowAnim, {
                useNativeDriver: false,
                toValue: 1,
                duration: 1800,
                easing: Easing.inOut(Easing.ease)
            })
        ).start();
    }, []);
    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: glowAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
};

const LoadingRow = () => (
    <View style={{padding: 0, marginBottom: 10 }}>
        <GlowView style={{ borderColor: 'red', minHeight: 24}}>
            <View style={styles.LoadingItem}>
                <View style={styles.GlowCheckbox}/>
                <Text style={styles.GlowText}>Loading</Text>
                <Text style={styles.GlowText}>cool</Text>
                <Text style={styles.GlowText}>state</Text>
            </View>
        </GlowView>
    </View>
);

export default LoadingRow;
