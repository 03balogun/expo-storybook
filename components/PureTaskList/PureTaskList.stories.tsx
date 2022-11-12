import * as React from 'react';
import { View } from 'react-native';
import { styles } from '../../constants/globalStyles';
import { storiesOf } from '@storybook/react-native';
import { task, actions } from '../Task/Task.stories';
import PureTaskList from "./index";

export const defaultTasks = [
    { ...task, id: '1', title: 'Task 1' },
    { ...task, id: '2', title: 'Task 2' },
    { ...task, id: '3', title: 'Task 3' },
    { ...task, id: '4', title: 'Task 4' },
    { ...task, id: '5', title: 'Task 5' },
    { ...task, id: '6', title: 'Task 6' },
];
export const withPinnedTasks = [
    ...defaultTasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

storiesOf('TaskList', module)
    .addDecorator(story => <View style={[styles.TaskBox, { padding: 16 }]}>{story()}</View>)
    .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />)
    .add('withPinnedTasks', () => <PureTaskList tasks={withPinnedTasks} {...actions} />)
    .add('loading', () => <PureTaskList loading tasks={[]} {...actions} />)
    .add('empty', () => <PureTaskList tasks={[]} {...actions} />);
