class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Check the front element
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check queue size
    size() {
        return this.items.length;
    }

    // Clear queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function() {

    function displayQueue() {
        $("#queue").empty();

        for (let i = 0; i < queue.items.length; i++) {

            let label = "";

            if (i === 0) {
                label = "FRONT";
            }

            if (i === queue.items.length - 1) {
                label = i === 0 ? "FRONT / REAR" : "REAR";
            }

            $("#queue").append(
                `<div class="row bg-primary queue-item">
                    <small>${label}</small>
                    ${queue.items[i]}
                </div>`
            );
        }
    }

    // Enqueue button
    $("button.btn-success").click(function() {
        let value = $("input").val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        queue.enqueue(value);
        $("input").val("");
        displayQueue();
    });

    // Dequeue button
    $("button.btn-danger").click(function() {
        let deleted = queue.dequeue();

        if (deleted === undefined) {
            alert("Queue is empty.");
            return;
        }

        $(".dequeued").append(
            `<div class="row pop text-bg-danger border border-light">
                ${deleted}
            </div>`
        );

        displayQueue();
    });

    // Peek button
    $("button.btn-warning").click(function() {
        if (queue.isEmpty()) {
            alert("Queue is empty.");
            return;
        }

        displayQueue();

        $("#queue .queue-item").first()
            .addClass("border border-warning border-4");
    });

    // Clear button
    $("button.btn-light").click(function() {
        queue.clear();
        $("#queue").empty();
        $(".dequeued").empty();
    });

});