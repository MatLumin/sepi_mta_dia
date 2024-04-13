
const id_of_dialog = "miko";
const id_of_dialog_overlay = "miko2";


function gimme_the_login_dialog()
	{
	return document.getElementById(id_of_dialog)
	}

function gimme_dialog_overlay()
	{
	return document.getElementById(id_of_dialog_overlay);
	}

function show_login()
	{
	gimme_dialog_overlay().style.visibility = "visible";
	gimme_the_login_dialog().classList.add("login_animation_class");
	setTimeout
		(
		function() 
			{
			gimme_the_login_dialog().classList.add("moving_background_class");
			}
			,1000
		);

	}

function hide_login()
	{
	gimme_dialog_overlay().style.visibility = "hidden";
	gimme_the_login_dialog().classList.remove("login_animation_class");
	gimme_the_login_dialog().classList.remove("moving_background_class");
	}


