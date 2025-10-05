# @hitsokeyco/ozenpick

[![npm version](https://img.shields.io/npm/v/@hitsokeyco/ozenpick.svg)](https://www.npmjs.com/package/@hitsokeyco/ozenpick)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una librería de componentes React moderna y personalizable, construida con TypeScript y CSS puro. Diseñada para ser ligera, accesible y fácil de integrar en cualquier proyecto React.

## 🚀 Instalación

```bash
npm install @hitsokeyco/ozenpick
```

## 📦 Uso

### Importar estilos

Primero, importa los estilos CSS de la biblioteca:

```tsx
import '@hitsokeyco/ozenpick/dist/ozenpick.css';
```

### Usar componentes

```tsx
import { Button, Input } from '@hitsokeyco/ozenpick';

function App() {
  return (
    <>
      <Button 
        label="Click me" 
        variant="primary"
        onClick={() => console.log('clicked')}
      />
      
      <Input
        label="Nombre"
        placeholder="Ingresa tu nombre"
        helperText="Este campo es obligatorio"
      />
    </>
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

### Input

Un campo de entrada personalizable con diferentes variantes y estados.

#### Props

| Prop       | Tipo                   | Requerido | Por defecto | Descripción                      |
|------------|------------------------|-----------|-------------|----------------------------------|
| label      | string                 | Sí        | -           | Etiqueta del campo               |
| error      | string                 | No        | -           | Mensaje de error                 |
| helperText | string                 | No        | -           | Texto de ayuda                   |
| fullWidth  | boolean                | No        | false       | Ocupa todo el ancho disponible   |
| inputSize  | 'small' \| 'medium' \| 'large' | No | 'medium'   | Tamaño del campo                 |
| variant    | 'outlined' \| 'filled' | No        | 'outlined'  | Estilo del campo                 |

## 🛠️ Tecnologías

- React 18
- TypeScript
- CSS puro
- Vite

## 🔍 Demo (solo para desarrollo)

La carpeta `demo` contiene una página HTML para visualizar los componentes durante el desarrollo. Esta carpeta no se incluye en el paquete npm publicado.

Para ver la demostración en tu entorno de desarrollo local:

```bash
# Clonar el repositorio
git clone https://github.com/hitsokeyco/ozenpick.git
cd ozenpick

# Instalar dependencias
npm install

# Compilar la biblioteca
npm run build

# Servir la página de demostración
serve demo
```

La demo estará disponible en http://localhost:3000 (o el puerto que indique el servidor).

## 🧪 Desarrollo

Para desarrollar nuevos componentes o modificar los existentes:

```bash
# Instalar dependencias
npm install

# Iniciar entorno de desarrollo
npm run dev
```

## 📋 Compatibilidad

- React 18.x o superior
- Funciona con TypeScript y JavaScript
- Compatible con todos los navegadores modernos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

sape--

## 📄 Licencia

MIT

