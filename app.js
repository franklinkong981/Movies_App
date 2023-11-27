$("#movie-rating-form").on("submit", function(e) {
    e.preventDefault();
    let movieTitle = $("#movie-title-field").val();
    let movieRating = $("#movie-rating-field").val();
    if (movieTitle.length < 2) {
        return alert("The movie title MUST be more than 2 characters in length!");
    }
    if (Number(movieRating) < 0 || Number(movieRating) > 10) {
        return alert("The movie rating MUST be a value from 0-10!");
    }
    $("ul").append(`<li>${movieTitle}: ${movieRating}/10 <button class="remove-button">Remove from List</button></li>`);
    $("#movie-title-field").val("");
    $("#movie-rating-field").val("0");
});

$("ul").on("click", ".remove-button", function() {
    $(this).parent().remove();
});

