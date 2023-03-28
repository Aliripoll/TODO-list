import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import { TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';

function AppUI() {
    return (
        <React.Fragment>
                <TodoCounter />
                <TodoSearch/>

                <TodoContext.Consumer>
                    {({ error,
                        loading, 
                        searchedTodos, 
                        completeTodo, 
                        deleteTodo,
                    }) => (
                        <TodoList>
                            {error && <p>Se ha producido un error</p>}
                            {loading && <p>Cargando...</p>}
                            {(!loading && !searchedTodos.length) && <p>¡Crea tu primera tarea!</p>}
        
                        {searchedTodos.map(todo => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text} 
                            completed={todo.completed} 
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                    )}
                </TodoContext.Consumer>



                <CreateTodoBtn />        
        </React.Fragment>
    );
}

export { AppUI };