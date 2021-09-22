import React, { useState} from 'react';
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
  ]); // useState의 기본값 설정
  return (
  <TodoTemplate>
    <TodoInsert/>
    <TodoList todos={todos}/>
  </TodoTemplate>
  )
};

export default App;
