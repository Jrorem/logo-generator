class Shape {
    constructor(options) {
      this.color = options.color;
      this.text = options.text;
      this.textColor = options.textColor;
      this.shapeColor = options.shapeColor;
    }
    
    getLogoBackground() {
      return `<svg version="1.1" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${this.color}" />`;
    }
    getLogoText() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" style="z-index: 2;">${this.text}</text></svg>`;
  }
    render() {
      const logoBackground = this.getLogoBackground();
      const logoText = this.getLogoText();
      return logoBackground + logoText;
    }
}
  
  class Triangle extends Shape {
    constructor(options) {
      super(options);
    }
    render() {
      const parentContent = super.render();
      const triangleContent = `<polygon points="150,10 30,160 270,160" fill="${this.shapeColor}" />`;
      const logoBackground = this.getLogoBackground();
      const logoText = this.getLogoText();

      return logoBackground + triangleContent + logoText;
      
    }
  }
  
  class Square extends Shape {
    constructor(options) {
      super(options);
    }
    render() {
      const parentContent = super.render();
      const squareContent = `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
      const logoBackground = this.getLogoBackground();
      const logoText = this.getLogoText();

      return logoBackground + squareContent + logoText;
      
    }
  }
  
  class Circle extends Shape {
    constructor(options) {
      super(options);
    }
    render() {
      const parentContent = super.render();
      const circleContent = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
      const logoBackground = this.getLogoBackground();
      const logoText = this.getLogoText();

      return logoBackground + circleContent + logoText;
      
    }
  }
  
  
  module.exports = { Triangle, Square, Circle, Shape };

