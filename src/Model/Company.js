class Company{
    constructor(CompanyID,CompanyName,PhoneNumber,CompanyEmail,Description,AccountID,Status){
        this.CompanyID = CompanyID;
        this.CompanyName = CompanyName;
        this.PhoneNumber = PhoneNumber;
        this.CompanyEmail = CompanyEmail;
        this.Description = Description;
        this.AccountID = AccountID;
        this.Status = Status;
    }
}
module.exports = Company;