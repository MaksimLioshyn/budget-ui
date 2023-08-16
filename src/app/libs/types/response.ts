export type TTurnoverBalances = {
  id: number;
  debit: number;
  credit: number;
  date: string;
  code: {
    id: number;
    name: string;
    description: string;
    rules: [
      {
        id: number;
        name: string;
        description: string;
        ruleType: TRuleType;
        codes: [string];
      },
    ];
  };
};

export type TTurnoverBalancesSheet = {
  name: string;
  ruleType: TRuleType;
  value: number;
};

export type TRuleType = {
  id: number;
  name: string;
  description: string;
};

export type TCodeType = {
  id: number;
  name: string;
  description: string;
};
