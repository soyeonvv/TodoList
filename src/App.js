import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
// 상태 값은 todos, 상태 설정 함수는 setTodos
  const [todos, setTodos] = useState([
    {
      id:1, // 각 항목의 고유 id
      text: '리액트의 기초 알아보기', // 각 항목의 내용
      checked: true, // 완료 여부
    },
    {
      id:2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id:3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 넣기

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos}/>
  </TodoTemplate>
  )
};

export default App;
