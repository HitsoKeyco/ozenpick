# @hitsokeyco/ozenpick

Una librería de componentes React moderna y personalizable, construida con TypeScript y CSS puro.

## 🚀 Instalación

```bash
npm install @hitsokeyco/ozenpick
```

## 📦 Uso

```tsx
import { Button } from '@hitsokeyco/ozenpick';

function App() {
  return (
    <Button 
      label="Click me" 
      variant="primary"
      onClick={() => console.log('clicked')}
    />
  );
}
```

## 🧱 Componentes

### Button

Un botón personalizable con variantes y estados.

#### Props

| Prop     | Tipo                    | Requerido | Por defecto | Descripción                |
|----------|-------------------------|-----------|-------------|----------------------------|
| label    | string                  | Sí        | -           | Texto del botón            |
| variant  | 'primary' \| 'secondary'| No        | 'primary'   | Estilo del botón           |
| onClick  | () => void              | No        | -           | Función al hacer click     |
| disabled | boolean                 | No        | false       | Deshabilita el botón       |
| type     | 'button' \| 'submit'    | No        | 'button'    | Tipo de botón HTML         |

## 🛠️ Tecnologías

- React 18
- TypeScript
- CSS puro
- Vite

## 📄 Licencia

MIT

