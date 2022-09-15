export interface Member {
    name: string;
    surname: string;
  }
  

export interface Family {
    familyId: String;
    members: Member[];
    familyFunds: number;
    familyCode: string;
    password: string;
  }