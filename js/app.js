(function (){

	app = angular.module("notes",[]);
  
	app.controller("NotesController", function(){
		
      this.editMode = false;
    
      //Create a note
      this.createNote = function(new_note){
			var i = 1;
         for (key in localStorage){            
             i = parseInt(key)+1;            
         } 
        store.set(i,new_note);
		}; 
    
    
      //Get all the notes
      this.allNotes = store.getAll();
    
    
      //Edit and Update a note
      this.editNote = function(key){
        document.getElementById("note_box").innerHTML = store.get(key)  
        this.editMode = true;        
        store.set("edit_key",key);
      };
    
      this.updateNote = function(edited_note){
        store.set(parseInt(store.get("edit_key")),edited_note);
        this.editMode = false;
        store.remove("edit_key");
      };
    
    
      //Delete a note
      this.deleteNote = function(key){
        store.remove(key)
      };    

	}); //End of NotesController

})();