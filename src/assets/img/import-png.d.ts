// Declaración de como se importan imagenes con TS
declare module '*.png' {
  const value: any;
  export default value;
}

// Agregar mas declaraciones segun la extención si son necesarias
declare module '*.svg' {
  const value: any;
  export default value;
}
