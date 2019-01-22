$(document).ready(function () {

    //descriptionPara = $("<p></p>");

    class Shape {
        constructor() {
            this.div = $("<div></div>");
            $("#draw-box").append(this.div);

            $(this.div).click(this.describe.bind(this));

        }

        divPosition() {
            this.x = Math.floor(Math.random() * (601 - this.width));
            this.y = Math.floor(Math.random() * (601 - this.height));
        }

        describe() {
            let descriptionPara = $("<p></p>");
            $(descriptionPara).text(`${this.name}
            width: ${this.width}
            height: ${this.height}
            radius: ${this.radius}
            area: ${this.area}
            perimeter: ${this.perimeter}`);

            $("#side-panel").append(descriptionPara);
        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            $(this.div).addClass("rectangleDiv");

            //describing this.width and this.height is critical to calculating divPosition and populating describe().
            this.width = width;
            this.height = height;
            this.divPosition();

            //important for populating describe().
            this.name = "Rectangle";
            this.radius = "NA"
            this.area = width * height;
            this.perimeter = 2 * width + 2 * height;


            //set css properties for rectangle according to user input and divPosition random values
            $(this.div).css({
                "height": height,
                "width": width,
                "left": this.x,
                "top": this.y
            });
        }
    }

    class Square extends Shape {
        constructor(sideLength) {
            super();
            $(this.div).addClass("squareDiv");
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            $(this.div).addClass("circleDiv");
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super();
            $(this.div).addClass("triangleDiv");
        }
    }

    $("#rectangle-button").click(function () {
        rectHeight = $("#rectangle-height").val();
        rectWidth = $("#rectangle-width").val();

        if ((rectHeight < 600) && (rectWidth < 600)) {
            let rect = new Rectangle(rectHeight, rectWidth);
        } else {
            alert("Enter values less than 600");
        }
    })

});
