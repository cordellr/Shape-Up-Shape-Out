$(document).ready(function () {

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
            $(descriptionPara).html(`<b>${this.name}</b>
            <br><b>width</b>: ${this.width}
            <br><b>height</b>: ${this.height}
            <br><b>radius</b>: ${this.radius}
            <br><b>area</b>: ${this.area}
            <br><b>perimeter</b>: ${this.perimeter}`);

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
            this.radius = "--"
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

            //describing this.width and this.height is critical to calculating divPosition and populating describe().
            this.width = sideLength;
            this.height = sideLength;
            this.divPosition();

            //important for populating describe().
            this.name = "Square";
            this.radius = "--"
            this.area = sideLength * sideLength;
            this.perimeter = sideLength * 4;


            //set css properties for rectangle according to user input and divPosition random values
            $(this.div).css({
                "height": sideLength,
                "width": sideLength,
                "left": this.x,
                "top": this.y
            });
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            $(this.div).addClass("circleDiv");

            //describing this.width and this.height is critical to calculating divPosition and populating describe().
            this.width = radius * 2;
            this.height = radius * 2;
            this.divPosition();

            //important for populating describe().
            this.name = "Circle";
            this.radius = radius;
            this.area = Math.PI * Math.pow(radius, 2);
            this.perimeter = 2 * Math.PI * radius;


            //set css properties for rectangle according to user input and divPosition random values
            $(this.div).css({
                "height": radius * 2,
                "width": radius * 2,
                "left": this.x,
                "top": this.y
            });
        }
    }

    class Triangle extends Shape {
        constructor(triangleLength) {
            super();
            $(this.div).addClass("triangleDiv");

            //describing this.width and this.height is critical to calculating divPosition and populating describe().
            this.width = triangleLength;
            this.height = triangleLength;
            this.divPosition();

            //important for populating describe().
            this.name = "Triangle";
            this.radius = "--"
            this.area = 0.5 * triangleLength * triangleLength;
            this.perimeter = 2 * triangleLength + Math.sqrt(2) * triangleLength;


            //set css properties for rectangle according to user input and divPosition random values
            $(this.div).css({
                "border-bottom": triangleLength + "px solid yellow",
                "border-right": triangleLength + "px solid transparent",
                "left": this.x,
                "top": this.y
            });
        }
    }


    //BUTTONS
    $("#rectangle-button").click(function () {
        rectHeight = $("#rectangle-height").val();
        rectWidth = $("#rectangle-width").val();

        if ((rectHeight < 600) && (rectWidth < 600)) {
            let rect = new Rectangle(rectHeight, rectWidth);
        } else {
            alert("Enter values less than 600");
        }
    })

    $("#square-button").click(function () {
        sideLength = $("#side-length").val();

        if (sideLength < 600) {
            let squa = new Square(sideLength);
        } else {
            alert("Enter value less than 600");
        }
    })

    $("#circle-button").click(function () {
        radius = $("#circle-radius").val();

        if (radius * 2 < 600) {
            let circ = new Circle(radius);
        } else {
            alert("Enter value less than 300");
        }
    })

    $("#triangle-button").click(function () {
        triangleLength = $("#triangle-height").val();

        if (triangleLength < 600) {
            let tria = new Triangle(triangleLength);
        } else {
            alert("Enter value less than 600");
        }
    })


});
