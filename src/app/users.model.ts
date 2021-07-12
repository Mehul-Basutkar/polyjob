export class Employer {
  constructor(public email: string,
              public id: string,
              private token: string,
              private tokenExpirationDate: Date) {}

    get tokenval() {
      if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
        return null;
      }
      return this.token;
    }
}
