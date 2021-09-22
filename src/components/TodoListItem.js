import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; // classnames 사용 명시
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <MdCheckBoxOutlineBlank/>
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;