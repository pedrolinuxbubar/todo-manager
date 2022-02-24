package com.sogeti.todomanagerback;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TodoManagerBackApplicationTests {

	@Test
	void TodoManagerControllerTest() {
		TodoManagerController todoManagerController = new TodoManagerController();
		todoManagerController.createTodo("task 1", "task 1 description");
		todoManagerController.createTodo("task 2", "task 2 description");
		todoManagerController.createTodo("task 3", "task 3 description");
		
		// Change task 1 state to done (true)
		todoManagerController.todoStateChange("task 1", "true");
		
		// Check that task 1 is put at list bottom, with state to done (true)
		List<Todo> listTodo = todoManagerController.listTodo();
		assertEquals(listTodo.get(0).getTitle(), "task 3");
		assertEquals(listTodo.get(0).isState(), false);
		assertEquals(listTodo.get(1).getTitle(), "task 2");
		assertEquals(listTodo.get(1).isState(), false);
		assertEquals(listTodo.get(2).getTitle(), "task 1");
		assertEquals(listTodo.get(2).isState(), true);
		
		Todo todoTask1 = todoManagerController.getTodo("task 1");
		assertEquals(todoTask1.getTitle(), "task 1");
		assertEquals(todoTask1.isState(), true);
		
		todoManagerController.deleteTodo("task 1");
		List<Todo> listTodoAfterDelete = todoManagerController.listTodo();
		assertEquals(listTodoAfterDelete.get(0).getTitle(), "task 3");
		assertEquals(listTodoAfterDelete.get(0).isState(), false);
		assertEquals(listTodoAfterDelete.get(1).getTitle(), "task 2");
		assertEquals(listTodoAfterDelete.get(1).isState(), false);
		
		todoManagerController.clearTodoList();
		List<Todo> listTodoAfterClear = todoManagerController.listTodo();
		assertEquals(listTodoAfterClear.isEmpty(), true);
	}
}
