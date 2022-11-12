import * as React from 'react';
import PropTypes from 'prop-types';
import TaskList from '../TaskList';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from '../../constants/globalStyles';
import {FontAwesome} from "@expo/vector-icons";

export type PureInboxScreenProp = {error: string}

const PureInboxScreen = ({ error }: PureInboxScreenProp) => {
    if (error) {
        return (
            <SafeAreaView style={styles.PageListsShow}>
                <View style={styles.WrapperMessage}>
                    <FontAwesome name="fa" size={64} color={'#2cc5d2'} />
                    <Text style={styles.TitleMessage}>Oh no!</Text>
                    <Text style={styles.SubtitleMessage}>Something went wrong</Text>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.PageListsShow}>
            <View style={[styles.PageListsShowhead]}>
                <Text numberOfLines={1} style={styles.TitleWrapper}>
                    Taskbox
                </Text>
            </View>
            <TaskList />
        </SafeAreaView>
    );
};
PureInboxScreen.propTypes = {
    error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
    error: null,
};

export default PureInboxScreen;
