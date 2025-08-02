// This file helps TypeScript understand the @ path alias
// used in your Next.js project

declare module '@/app/*' {
    const value: any;
    export default value;
}
