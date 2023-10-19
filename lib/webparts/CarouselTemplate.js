import styles from "./CarouselWebPart.module.scss";
var CarouselTemplate = /** @class */ (function () {
    function CarouselTemplate() {
    }
    CarouselTemplate.createDOM = function (prop) {
        var _propObject = [
            {
                Title: prop.slide1Title,
                subtitle: prop.slide1Desc,
                image: prop.slide1Link,
            },
            {
                Title: prop.slide2Title,
                subtitle: prop.slide2Desc,
                image: prop.slide2Link,
            },
            {
                Title: prop.slide3Title,
                subtitle: prop.slide3Desc,
                image: prop.slide3Link,
            },
            {
                Title: prop.slide4Title,
                subtitle: prop.slide4Desc,
                image: prop.slide4Link,
            },
            {
                Title: prop.slide5Title,
                subtitle: prop.slide5Desc,
                image: prop.slide5Link,
            },
        ];
        this.htmlTemplateTop = "\n            <div id=\"carouselExampleAutoplaying\" class=\"carousel slide carousel-fade\" data-bs-ride=\"carousel\">\n                <div class=\"carousel-indicators\">";
        for (var i = 0; i < prop.slideCount; i++) {
            if (i === 0) {
                this.htmlTemplateTop += "<button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"".concat(i, "\" class=\"active\" aria-current=\"true\" aria-label=\"Slide ").concat(i + 1, "\"></button>");
            }
            else {
                this.htmlTemplateTop += "<button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"".concat(i, "\" aria-label=\"Slide ").concat(i + 1, "\"></button>");
            }
        }
        this.htmlTemplateTop += "</div><div class=\"carousel-inner\">";
        for (var i = 0; i < prop.slideCount; i++) {
            if (i === 0) {
                console.log("i = " + i);
                this.htmlTemplateTop += "\n                <div class=\"carousel-item active\">\n                    <img src=\"".concat(_propObject[i].image, "\" class=\"d-block w-100 ").concat(styles.fixedHeight, "\" alt=\"...\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                        <h5>").concat(_propObject[i].Title, "</h5>\n                        <p>").concat(_propObject[i].subtitle, "</p>\n                    </div>\n                </div>");
            }
            else {
                this.htmlTemplateTop += "\n                <div class=\"carousel-item\">\n                    <img src=\"".concat(_propObject[i].image, "\" class=\"d-block w-100 ").concat(styles.fixedHeight, "\" alt=\"...\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                        <h5>").concat(_propObject[i].Title, "</h5>\n                        <p>").concat(_propObject[i].subtitle, "</p>\n                    </div>\n                </div>");
            }
        }
        return (this.htmlTemplateTop +
            "</div>\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleAutoplaying\" data-bs-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"visually-hidden\">Previous</span>\n                </button>\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleAutoplaying\" data-bs-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"visually-hidden\">Next</span>\n                </button>\n            </div>");
    };
    return CarouselTemplate;
}());
export default CarouselTemplate;
//# sourceMappingURL=CarouselTemplate.js.map