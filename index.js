// Write your code here!

  
  
 
  // index.js
  let newHeader = document.createElement('h1');
  newHeader.id = 'victory';
  newHeader.innerHTML = 'YOUR-NAME is the champion';
  document.body.replaceChild(newHeader, document.querySelector('main#main'));
  
  // helpers.js (no changes needed)
  
  // test.js
  require('./helpers.js');
  
  describe("index.html", () => {
    describe("after index.js is processed", () => {
      it("no longer has DOM node 'ain#main'", () => {
        expect(document.querySelector('main#main'), "Make sure you remove the <main> with id 'ain'").to.not.exist
      });
  
      it("has a 'newHeader' variable that points to an <h1> node", () => {
        expect(
          newHeader.nodeName,
          "Make sure you create an <h1> and assign it to the 'newHeader' variable"
        ).eql("H1");
      });
  
      it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
        expect(
          newHeader.id,
          "Make sure the id of your <h1> is set to 'victory'"
        ).eql("victory");
      });
  
      it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"YOUR-NAME is the champion\" (with your name in place of YOUR-NAME) inside it", () => {
        expect(newHeader.innerHTML, "Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it").to.include("is the champion");
      });
  
    });
  });