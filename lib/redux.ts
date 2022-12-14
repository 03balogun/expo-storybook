
// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

export type TaskInterface = { id: string, title: string, state: string, updatedAt?: Date }

type Callbacks = {
    onArchiveTask?: (id: string) => void
    onPinTask?: (id: string) => void
}

export type TaskListInterface = {
    loading?: boolean;
    tasks: TaskInterface[];
} & Callbacks

export type TaskProp = {
    task: TaskInterface;
} & Callbacks

export type StateInterface = {
    tasks: TaskInterface[]
} | undefined


export type Action = {
    [key: string]: 'PIN_TASK' | 'ARCHIVE_TASK',
}

type ValueOf<T> = T[keyof T];

type ReduxAction = TaskInterface & { type: ValueOf<Action>}

// The actions are the "names" of the changes that can happen to the store
export const actions: Action = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: string) {
    return (state: StateInterface, action: TaskInterface) => {
        if (state) {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id ? {...task, state: taskState} : task
                ),
            };
        }
    };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state: StateInterface, action: ReduxAction) => {
    if (state) {
        switch (action.type) {
            case actions.ARCHIVE_TASK:
                return taskStateReducer('TASK_ARCHIVED')(state, action);
            case actions.PIN_TASK:
                return taskStateReducer('TASK_PINNED')(state, action);
            default:
                return state;
        }
    }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks: TaskInterface[] = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// We export the constructed redux store
export default createStore<StateInterface | undefined, ReduxAction, {}, {}>(reducer, { tasks: defaultTasks });
