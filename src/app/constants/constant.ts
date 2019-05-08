
export class AppConstants {

  private _company : number;

  public static get baseURL(): string { return "http://localhost:8080/api"; }

    get company():number {
      return this._company;
    }

    set company(theCompany:number) {
      this._company = theCompany ;
    }

}


