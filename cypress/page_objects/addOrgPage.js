class AddOrgPage{
    get addOrgLink(){
       return cy.get("/my-organizations");
    }
    get addOrgPageHeading(){
        return cy.get("h2").eq(2);
    }
    get organizationInput(){
        return cy.get("input");
    }
    get cancelBtn(){
        return cy.get("button").first();
    }
    get nextBtn(){
        return cy.get("button").last();
    }
    get createOrgModal() {
        return cy.get(".vs-c-modal");
    }
    
    createOrganization(title)  {
        this.organizationInput.type(title)
        this.nextBtn.click()
        this.next.Btn.click()
    }
    

}
export const addOrgPage= new AddOrgPage();