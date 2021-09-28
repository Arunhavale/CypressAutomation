beforeEach(()=>{

// runs before all tests in the block
cy.fixture('example').then(function(data)
{
  this.data=data
})
});
 