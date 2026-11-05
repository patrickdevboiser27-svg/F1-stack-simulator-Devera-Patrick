class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let deleteItem = this.items[this.count];
        this.items.pop();

        return deleteItem;
    }

    peek() {
        if (this.count === 0) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }
}

const stack = new Stack();

$(document).ready(function() {

    function displayStack() {
        $("#stack").empty();

        for (let i = 0; i < stack.count; i++) {
            $("#stack").prepend(
                `<div class="row bg-primary push">${stack.items[i]}</div>`
            );
        }
    }

    $("button.btn-success").click(function() {
        let value = $("input").val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        stack.push(value);
        $("input").val("");
        displayStack();
    });

    $("button.btn-danger").click(function() {
        let deleted = stack.pop();

        if (deleted === undefined) {
            alert("Stack is empty.");
            return;
        }

        $(".popped").append(
            `<div class="row pop text-bg-danger border border-light">${deleted}</div>`
        );

        displayStack();
    });

    $("button.btn-warning").click(function() {
    if (stack.isEmpty()) {
        alert("Stack is empty.");
        return;
    }

    displayStack();

    $("#stack .push").removeClass("border border-warning border-4");

    $("#stack .push").each(function() {
        if ($(this).text() == stack.peek()) {
            $(this).addClass("border border-warning border-4");
        }
    });
});

    $("button.btn-light").click(function() {
        stack.clear();
        $("#stack").empty();
        $(".popped").empty();
    });

});