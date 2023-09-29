$(document).ready(function() {
    // Initial state: hide all sections except the Books section.
    $("section:not(#books)").hide();

    // Handle navigation clicks.
    $("nav a").click(function() {
        var targetSection = $(this).attr("href");
        $("section").hide();
        $(targetSection).show();
    });
    var borrowedBooks = [
        { title: "Book 1", dueDate: "2023-10-15" },
        { title: "Book 2", dueDate: "2023-10-20" },
    ];

    // Function to display borrowed books
    function displayBorrowedBooks() {
        var borrowedList = $("#borrowed-list");
        borrowedList.empty();

        borrowedBooks.forEach(function(book) {
            var listItem = $("<li>").text(book.title + " (Due: " + book.dueDate + ")");
            borrowedList.append(listItem);
        });
    }

    // Initial state: hide all sections except the Books section.
    $("section:not(#books)").hide();

    // Handle navigation clicks.
    $("nav a").click(function() {
        var targetSection = $(this).attr("href");
        $("section").hide();

        if (targetSection === "#borrowed") {
            // Display borrowed books when the Borrowed section is selected.
            displayBorrowedBooks();
        }

        $(targetSection).show();
    });
});
