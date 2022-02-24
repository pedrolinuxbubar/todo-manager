package com.sogeti.todomanagerback;

public class Todo {
	private String title;
    private boolean state;
    private String description;

    public Todo(String title, boolean state, String description) {
    	this.title = title;
        this.state = state;
        this.description = description;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
