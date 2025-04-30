type Role = 'admin' | 'user' | 'guest';

type RoleMap = { admin: string } & Partial<Record<'user' | 'guest', string>>;

const tvalc1: RoleMap = {
  admin: 'A', // ✅ 필수
};

const tvalc2: RoleMap = {
  admin: 'B',
  user: 'U'
};

const tvalc3: RoleMap = {
  admin: 'C',
  guest: 'G'
};


console.log(tvalc1, tvalc2, tvalc3);