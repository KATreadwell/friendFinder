

$("#submit").on("click", function (event) {
  event.preventDefault();
  
  // if (validateForm()) {
  var newCharacter = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };
  $.post("/api/friends", newCharacter)
  .then(function(data) {
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);
    $("#results-modal").modal("toggle");
    let modal = $(".modal")
      $(".modal").modal("show"); 
      })

    // } else {
    //       alert("Please fill out all fields before submitting!");
    //     }
});

    // function validateForm() {
    //   var isValid = true;
    //   $(".form-control").each(function() {
    //     if ($(this).val() === "") {
    //       isValid = false;
    //     }
    //   });

    //   $(".chosen-select").each(function() {
    //     if ($(this).val() === "") {
    //       isValid = false;
    //     }
    //   });
    //   return isValid;
    // }

  

  


 
