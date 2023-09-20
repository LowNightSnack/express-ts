export {};

declare global {
  namespace Express {
    interface Request {
      user: { name: string; id: number };
    }
  }
}
