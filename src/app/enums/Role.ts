export enum Role {
  SuperAdmin = 'SuperAdmin',
  Admin = 'Admin',
  Subscriber = 'Subscriber'
}

export const RoleEnumMapping: Record<Role, string> = {
  [Role.SuperAdmin]: `SuperAdmin`,
  [Role.Admin]: `Admin`,
  [Role.Subscriber]: `Subscriber`,
};