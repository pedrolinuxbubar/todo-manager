package com.sogeti.todomanagerback;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo-manager")
public class TodoManagerController {
	private List<Todo> todoList = new ArrayList<Todo>();

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/list-todo")
	public List<Todo> listTodo() {
		return todoList;
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/create-todo")
	public void createTodo(@RequestParam(value = "title", defaultValue = "task") String title) {
		// A TODO is always initialized with false (not done) status
		todoList.add(new Todo(title, false));
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/todo-state-change")
	public void todoDone(@RequestParam(value = "title", defaultValue = "task") String title,
			@RequestParam(value = "state", defaultValue = "false") String state) {
		for (Todo todo : todoList) {
			if (todo.getTitle().equals(title)) {
				todo.setState(Boolean.valueOf(state));
			}
		}
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/delete-todo")
	public void deleteTodo(@RequestParam(value = "title", defaultValue = "task") String title) {
		for (Todo todo : todoList) {
			if (todo.getTitle().equals(title)) {
				todoList.remove(todo);
			}
		}
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/clear-todo-list")
	public void clearTodoList() {
		this.todoList.clear();
	}
}
