import * as React from 'react';
import Task from '../Task';
import {FlatList, Text, SafeAreaView, View} from 'react-native';
import { styles } from '../../constants/globalStyles';
import LoadingRow from "../LoadingRow";
import {TaskListInterface} from "../../lib/redux";
import {FontAwesome} from "@expo/vector-icons";


function PureTaskList({ loading = false, tasks, onPinTask, onArchiveTask }: TaskListInterface) {
    const events = {
        onPinTask,
        onArchiveTask,
    };
    if (loading) {
        return (
            <SafeAreaView style={styles.ListItems}>
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
            </SafeAreaView>
        );
    }

    if (tasks.length === 0) {
        return (
            <SafeAreaView style={styles.ListItems}>
                <View style={styles.WrapperMessage}>
                    <FontAwesome name="fa" size={64} color={'#2cc5d2'} />
                    <Text style={styles.TitleMessage}>Oh no!</Text>
                    <Text style={styles.SubtitleMessage}>Something went wrong</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.ListItems}>
            <FlatList
                data={tasks}
                keyExtractor={task => task.id}
                renderItem={({ item }) => <Task key={item.id} task={item} {...events} />}
            />
        </SafeAreaView>
    );
}

export default PureTaskList;
