export interface Country {
  languages: Record<string, string>;
  name: {
    common: string;
    nativeName: Record<string, string>;
    official: string;
  };
  population: number;
  region: string;
  flag: string;
}
