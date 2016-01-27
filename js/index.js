jQuery(document).ready(function(){
	   
	   makeSignUpBox();
});


function makeSignUpBox(){
	/*var gamer_popup_signup_box = "<div class='popup_box_container' id='gamer_popup_box_container'><div class='popup_box' id='gamer_signup_popup_box'><form class='signup_form' id='gamer_signup_popup_form'action='/php/addgamer.php' method='post'><fieldset><legend>Sign Up</legend><label for='username'>Username</label><input class='popup_form_text_box' id='gamer_signup_popup_form_username_box' type='text' name='username'/> <label for='password'>Password</label<input class='popup_form_text_box' id='gamer_signup_popup_form_password_box' type='password' name='password'/> <label for='email'>Email</label><input class='popup_form_text_box' id='gamer_signup_popup_form_email_box' type='email' name='email'/> <label for='birthday'>Birthday</label><input class='popup_form_date_box' id='gamer_signup_popup_form_birthday_box' type='date' name='birthday'> <label for='xbox_tag'>Xbox Live Tag</label><input class='popup_form_text_box' id='gamer_signup_popup_form_xbox_tag_box' type='text' name='xbox_tag'/> <label for='psn_tag'>PSN Tag</label><input class='popup_form_text_box' id='gamer_signup_popup_form_psn_tag_box' type='text' name='psn_tag'/> <input class='popup_form_submit_button' id='gamer_signu_popup_form_submit_button' type='submit' value='Sign Up' name='signup_button'/></fieldset></form></div></div>"; */
	var gamer_popup_signup_box = "<div class='popup_box_container' id='gamer_popup_box_container'><div class='popup_box' id='gamer_signup_popup_box'><form class='signup_form' id='gamer_signup_popup_form'action='/php/addgamer.php' method='post'><fieldset><legend>Sign Up</legend><input class='popup_form_text_box' id='gamer_signup_popup_form_username_box' type='text' name='username' placeholder='Enter a Username.'  required/> <input class='popup_form_text_box' id='gamer_signup_popup_form_password_box' type='password' name='password' placeholder='Enter a Password with at least 8 characters'  required/><input class='popup_form_text_box' id='gamer_signup_popup_form_email_box' type='email' name='email' placeholder='Enter your Email Address.  required'/> <label for='birthday'>Birthday</label><input class='popup_form_date_box' id='gamer_signup_popup_form_birthday_box' type='date' name='birthday' placeholder='Enter your Date Of Birth.' required/> <input class='popup_form_text_box' id='gamer_signup_popup_form_xbox_tag_box' type='text' name='xbox_tag' placeholder='Enter your Xbox Live Tag Name.'/> <input class='popup_form_text_box' id='gamer_signup_popup_form_psn_tag_box' type='text' name='psn_tag' placeholder='Enter your Playstation Network Username.'/> <input class='popup_form_submit_button' id='gamer_signu_popup_form_submit_button' type='submit' value='Sign Up' name='signup_button'/></fieldset></form></div></div>"; 
    jQuery("#homepage_signup_module span a").on("click" , function(e){
        e.preventDefault();
        if(jQuery("#homepage_signup_module_body").children().last().is("#gamer_popup_box_container") == true)
	         return;
	     jQuery("#homepage_signup_module_button").remove();
        jQuery("#homepage_signup_module_body").append(gamer_popup_signup_box);
        jQuery("#gamer_popup_box_container input").trigger("focus");
    });
    
    jQuery("#gamer_popup_box_container input").on("focus", function(e){
    	jQuery(this).css("border:solid 10px black");
    });
    jQuery("#gamer_popup_box_container input").on("blur" , function(e){
	       
	       jQuery("#gamer_popup_box_container").remove();
	   });
};