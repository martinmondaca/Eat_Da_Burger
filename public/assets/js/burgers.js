
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("button clicked")

    var newBurger = {
        name: $("#ca").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var nowDevoured = {
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