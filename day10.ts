type Settings = {
    darkMode: boolean;
    language: string;
  };
  
  type UppercaseKeys<T> = {
    [P in keyof T as Uppercase<string & P>]: T[P];
  };
  
  // { DARKMODE: boolean; LANGUAGE: string }
  type NewSettings = UppercaseKeys<Settings>;
  
  let day10Vars: NewSettings = {
    DARKMODE: true, 
    LANGUAGE: "en"
  };

console.log(day10Vars);