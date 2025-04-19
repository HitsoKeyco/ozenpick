declare module '*.css' {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '@hitsokeyco/ozenpick/dist/ozenpick.css' {
  const styles: string;
  export default styles;
} 