$(".food ").dblclick(function(){
    // $(this).removeClass("food")
    $(this).addClass("click_effect");
    var form = $("<form>").append(
        // Form fields go here
        $("<br>"),
        $("<label>").text("Fooditem:"),
        $("<input>").attr({ type: "text", id: "username", name: "username" }),
        $("<br>"),
        $("<label>").text("Quantity:"),
        $("<input>").attr({ type: "number", id: "quantity", name: "quantity" }),
        $("<br>"),
        $("<input>").attr({ type: "submit", value: "Submit" }),
        $("<input>").attr({ type: "button", value: "cancel", onclick:"submitForm()", id:"cancel"} ));

      // Append the form to the body
    $(form).attr({id:"myform"});
    form[0].username.value=$(this)[0].outerText;
    $(this).append(form);
    
});
function submitForm() {
    var form=($("#cancel"))[0].parentNode;
    var parent=(($("#cancel")[0].parentNode).parentNode);
    parent.removeChild(form);
    parent.classList.remove("click_effect");

    // ($("#cancel")[0].parentNode).hide();
  }