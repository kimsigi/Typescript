type Book = {
    title: string;
    author: string;
    pages: number;
  };
  
  let book1: Book = {
    title: 'TS 배우기',
    author: '홍길동',
    pages: 300
  };
  
  let coords: [number, number] = [37.5665, 126.9780];
  
  interface Developer {
    name: string;
    skills: string[];
  }
  
  const dev: Developer = {
    name: 'Jane',
    skills: ['TypeScript', 'Vue', 'React']
  };
  
  console.log(book1, coords, dev);
  