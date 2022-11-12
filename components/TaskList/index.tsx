import * as React from 'react';
import PureTaskList from "../PureTaskList";
import {archiveTask, pinTask, TaskInterface, TaskListInterface} from "../../lib/redux";
import {connect} from "react-redux";

type Tasks = TaskInterface[]

function TaskList({tasks, onPinTask, onArchiveTask }: TaskListInterface) {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    return <PureTaskList tasks={tasks} {...events} />
}

export default connect(
    ({ tasks }: { tasks: Tasks}) => ({
        tasks: tasks.filter((task) => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'),
    }),
    (dispatch) => ({
        onArchiveTask: (id: string) => dispatch(archiveTask(id)),
        onPinTask: (id: string) => dispatch(pinTask(id)),
    })
)(TaskList);
