describe("Search the fruits by fruit name", function() {
  
    it("returns the fruit suggestions if it matches the string passed", () => {
      expect(search('Banana')).toEqual(['Banana']);
    });
    it("return empty array [] if you pass number", function(){
        expect(search("123")).toEqual([])
    })
  
  });
  