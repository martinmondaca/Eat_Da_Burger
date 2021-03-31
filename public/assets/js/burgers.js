$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#ca").val().trim(),
        //set devoured to false for new burgers
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var nowDevoured = {
        //set devoured to true
        devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: nowDevoured
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
        }
    );
});