/**
 * Spread utility transform the union from:
 *
 * type UnifiedUser = User & GithubUser
 *
 * to:
 *
 * type UnifiedUser = {
    name: string;
    age: number;
    id: string;
  }
 */
type User = {
  name: string;
  age: number;
};

type GithubUser = {
  id: string;
};

type Spread<Type> = { [Key in keyof Type]: Type[Key] };

type UnifiedUser = User & GithubUser;
type UnifiedUserV2 = Spread<User & GithubUser>;

export {};
