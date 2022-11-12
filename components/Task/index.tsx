import * as React from 'react';
import {TextInput, SafeAreaView, TouchableOpacity, View} from 'react-native';
import { styles } from '../../constants/globalStyles';
import {FontAwesome} from "@expo/vector-icons";
import {TaskProp} from "../../lib/redux";

export default function Task({ task: {title, state, id}, onArchiveTask, onPinTask }: TaskProp) {
    return (
        <SafeAreaView style={styles.ListItem}>
            <TouchableOpacity onPress={() => {
                if (onArchiveTask) {
                    onArchiveTask(id)
                }
            }}>
                {state !== 'TASK_ARCHIVED' ? (
                    <View style={styles.CheckBox} />
                ) : (
                    <FontAwesome name="check" size={20} color={'#2cc5d2'} />
                )}
            </TouchableOpacity>
            <TextInput
                placeholder="Input Title"
                style={
                    state === 'TASK_ARCHIVED' ? styles.ListItemInputTaskArchived : styles.ListItemInputTask
                }
                value={title}
                editable={false}
            />
            <TouchableOpacity onPress={() => {
                if (onPinTask) {
                    onPinTask(id)
                }
            }}>
                <FontAwesome
                    name="star"
                    size={20}
                    color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
