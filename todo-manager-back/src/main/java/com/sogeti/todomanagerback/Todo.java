package com.sogeti.todomanagerback;

public class Todo {
	private String title;
    private boolean state;

    public Todo(String title, boolean state) {
    	this.title = title;
        this.state = state;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    public boolean isState() {
        return this.state;
    }

    public void setState(boolean state) {
        this.state = state;
    }
}
