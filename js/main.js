var todoList = {
    todos: [],
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    },
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    },
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      
      // Get number of completed todos.
      // for (var i = 0; i < totalTodos; i++) {
       // if (this.todos[i].completed === true) {
         // completedTodos++;
       // }
     // }
      
      this.todos.forEach(function(todo){
    if(todo.completed === true){
      completedTodos++;
    }
  })
      
      
      
      // Case 1: If everything’s true, make everything false.
      if (completedTodos === totalTodos) {
        //for (var i = 0; i < totalTodos; i++) {
          //this.todos[i].completed = false;
        //}
        
        this.todos.forEach(function(todo){
        todo.completed = false;
  });
        
      // Case 2: Otherwise, make everything true.
      } else {
        //for (var i = 0; i < totalTodos; i++) {
          //this.todos[i].completed = true;
        //}  
        this.todos.forEach(function(todo){
          todo.completed = true;  
        })
      }
    }
  };
  
  var handlers = {
    addTodo: function() {
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      view.displayTodos();
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
      view.displayTodos();
    },
    deleteTodo: function(position){
     todoList.deleteTodo(position);
      view.displayTodos();
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = '';
      view.displayTodos();
    },
    toggleAll: function() {
      todoList.toggleAll();
      view.displayTodos();
    }  
  };
  
  var view = {
    displayTodos: function() {
      var todosUl = document.querySelector('ul');
      todosUl.innerHTML = '';
      for (var i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');
        var todo = todoList.todos[i];
        var todoTextWithCompletion = '';
  
        if (todo.completed === true) {
          todoTextWithCompletion = '(x) ' + todo.todoText;
        } else {
          todoTextWithCompletion = '( ) ' + todo.todoText;
        }
        
        todoLi.id = i;
        
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todoLi.appendChild(this.createCompleteButton());
        todosUl.appendChild(todoLi);
      }  
    },
    createDeleteButton: function(){
    var deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.className = 'deleteButton';
      var deleteButtonClass = document.getElementByClass = 'deleteButton';
      return deleteButton;
  },
    setUpEventsListeners: function(){
        var todosUl = document.querySelector('ul');
      todosUl.addEventListener('click', function(event){
        console.log(event.target.parentNode.id);
   
        // get the element that was clicked on
        var elementClicked = event.target;
  
        // check if elementClicked is a delete button 
  
        if(elementClicked.className === "deleteButton"){
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
      });
  },








  // JEBEM TI BOGA
    
    createCompleteButton: function(){
      var completeButton = document.createElement('button');
      completeButton.textContent = 'complete';
      completeButton.className = 'completeButton';
      var completeButtonClass = document.getElementByClass = 'completeButton';
      return completeButton;
    },
    setUpEventsListenersComplete: function(){
      var todoUl = document.querySelector('ul');
      todoUl.addEventListener('click', function(event){
        console.log(event.target.parentNode.id);

        var elementClickedComplete = event.target;

        if(elementClickedComplete.className === "completeButton"){
          todoList.toggleCompleted(parseInt(elementClickedComplete.parentNode.id));
          view.displayTodos();
        }
      });
    }
  };
  


  view.setUpEventsListeners();
  view.setUpEventsListenersComplete();

  
  
  
  
  
  
  
  