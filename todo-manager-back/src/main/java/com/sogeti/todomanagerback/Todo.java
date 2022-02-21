package com.sogeti.todomanagerback;

public class Todo {
    private boolean state;
    private String title;

    public Todo(boolean state, String title) {
        this.state = state;
        this.title = title;
    }

    public boolean isState() {
        return this.state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
