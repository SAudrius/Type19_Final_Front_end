interface UserId {
  user_id: number;
}

enum Type {
  sell,
  buy,
  rent,
}

interface ClassifiedAd {
  id: number;
  title: string;
  description: string;
  price: number;
  phone: string;
  type: Type;
  town_id: number;
  user_id: number;
  category_id: number;
  created_at: string;
  is_published: boolean;
  is_deleted: 0 | 1;
  image_main: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
}

interface Town {
  id: number;
  name: string;
  population: number;
  area: number;
  is_deleted: 0 | 1;
}
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: number;
  avatar_url: string;
  is_deleted: 0 | 1;
}

interface Category {
  id: number;
  name: string;
}

interface JwtDecodedToken {
  exp: number;
  user_id: number;
  iat: number;
}

interface CountResult {
  count: number;
}
