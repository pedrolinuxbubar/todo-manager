package com.sogeti.todomanagerback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.List;
import java.util.ArrayList;


@RestController
@RequestMapping("/todo-manager")
public class TodoManagerController {
  private List<Todo> todoList = new ArrayList<Todo>();

  @GetMapping("/list-todo")
  public List<Todo> listTodo() {
    return todoList;
  }
  
  @GetMapping("/create-todo")
  public void createTodo(@RequestParam(value="state", defaultValue="false")String state, @RequestParam(value="title", defaultValue="task")String title) {
    todoList.add(new Todo(Boolean.valueOf(state), title));
  }

  @GetMapping("/todo-done")
  public void todoDone(@RequestParam(value="title", defaultValue="task")String title)
  {
    for (Todo todo : todoList) {
      if (todo.getTitle().equals(title)) {
        todo.setState(true);
      }
    }
  }

  @GetMapping("/delete-todo")
  public void deleteTodo(@RequestParam(value="title", defaultValue="task")String title)
  {
    for (Todo todo : todoList) {
      if (todo.getTitle().equals(title)) {
        todoList.remove(todo);
      }
    }
  }
}
