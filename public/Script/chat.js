document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);


getPosts();

function login() {

    // https://firebase.google.com/docs/auth/web/google-signin
    
    // Provider
	var provider = new firebase.auth.GoogleAuthProvider();
    // How to Log In
    firebase.auth().signInWithPopup(provider).then(function(){
        rApp.takeValue("chat");
    })
    
	
   

}


function writeNewPost() {

    // https://firebase.google.com/docs/database/web/read-and-write
	
	var textToSend = document.getElementById("textInput").value;
    // Values
	var message = {
		message: textToSend,
		name: firebase.auth().currentUser.displayName
	}
	
	
	firebase.database().ref('RuckerPark').push(message)
	console.log(message);
    // A post entry.

    // Get a key for a new Post.

    //Write data

    console.log("write");
    
}


function getPosts() {

     firebase.database().ref('RuckerPark').on('value', function (data) {
		 
         var posts = document.getElementById("posts");
         posts.innerHTML = "";
		 console.log(data);
         var messages = data.val();

         for (var key in messages) {
             var text = document.createElement("div");
             var element = messages[key];
            text.append(element.name + ':'+' ');
            text.append(element.message);
            posts.append(text);
         }

     })

    console.log("getting posts");

}