import * as React from 'react';
import { create } from 'react-test-renderer';
import TaskList from '../TaskList';
import { withPinnedTasks } from '../PureTaskList/PureTaskList.stories';
import PureTaskList from "../PureTaskList";
import Task from "../Task";

describe('TaskList', () => {
    it('renders pinned tasks at the start of the list', () => {
        const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
        const tree = create(<PureTaskList tasks={withPinnedTasks} {...events} />);
        const rootElement = tree.root;
        const listOfTasks = rootElement.findAllByType(Task);
        expect(listOfTasks[0].props.task.title).toBe('Task 1');
    });
});
