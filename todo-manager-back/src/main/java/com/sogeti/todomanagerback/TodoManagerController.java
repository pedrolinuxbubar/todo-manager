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

	private List<Todo> sortTodoList() {
		List<Todo> sortedTodoList = new ArrayList<Todo>();
		for (Todo todo : todoList) {
			if (todo.isState()) {
				sortedTodoList.add(todo);
			} else {
				sortedTodoList.add(0, todo);
			}
		}
		return sortedTodoList;
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/list-todo")
	public List<Todo> listTodo() {
		return sortTodoList();
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/clear-todo-list")
	public void clearTodoList() {
		this.todoList.clear();
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/create-todo")
	public void createTodo(@RequestParam(value = "title", defaultValue = "My Task") String title,
			@RequestParam(value = "description", defaultValue = "A super task") String description) {
		// A TODO is always initialized with false (not done) status
		todoList.add(new Todo(title, false, description));
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/get-todo")
	public Todo getTodo(@RequestParam(value = "title", defaultValue = "My Task") String title) {
		for (Todo todo : todoList) {
			if (todo.getTitle().equals(title)) {
				return todo;
			}
		}
		return null;
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
	@GetMapping("/todo-state-change")
	public void todoDone(@RequestParam(value = "title", defaultValue = "task") String title,
			@RequestParam(value = "state", defaultValue = "false") String state) {
		for (Todo todo : todoList) {
			if (todo.getTitle().equals(title)) {
				todo.setState(Boolean.valueOf(state));
				break;
			}
		}
	}
}
