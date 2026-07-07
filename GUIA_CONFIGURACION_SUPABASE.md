# Guía: activar la base de datos de Pandora Boutique (Supabase)

Ahora tienes **2 páginas web** que trabajan juntas:

1. **Web principal** (`index.html`) — la tienda que ven tus clientes.
2. **Gestor de contenido / CMS** (`cms/index.html`) — donde tú vas a agregar, editar y eliminar productos y categorías, como un WordPress solo para tu catálogo.

Ambas páginas se conectan a una **base de datos real** (Supabase, gratis) para que todo lo que cambies en el CMS aparezca automáticamente en la web principal, sin tocar código nunca más.

Falta un solo paso antes de que todo funcione: **crear tu cuenta y proyecto de Supabase**. Esa parte tienes que hacerla tú mismo desde tu navegador — es donde ingresas tu correo y contraseña para crear la cuenta, y por seguridad esa parte no puedo hacerla yo por ti. Todo lo demás (el código, las tablas, las políticas de seguridad) ya está listo, solo tienes que seguir estos pasos y copiar 2 datos al final.

Toma unos 10-15 minutos y no necesitas saber programar.

---

## Paso 1 — Crear tu cuenta y proyecto en Supabase

1. Entra a **https://supabase.com** y haz clic en **"Start your project"**.
2. Regístrate (puedes usar tu cuenta de GitHub o Google, o correo + contraseña).
3. Una vez dentro, haz clic en **"New project"**.
4. Completa:
   - **Name**: `pandora-boutique` (o el nombre que prefieras)
   - **Database Password**: crea una contraseña segura y **guárdala** en un lugar seguro (no la vas a necesitar en el día a día, pero es la llave maestra de tu base de datos).
   - **Region**: elige la más cercana, por ejemplo `South America (São Paulo)`.
5. Haz clic en **"Create new project"** y espera 1-2 minutos mientras Supabase lo prepara.

---

## Paso 2 — Crear las tablas (categorías y productos)

1. En el menú izquierdo de tu proyecto, entra a **SQL Editor**.
2. Haz clic en **"New query"**.
3. Abre el archivo **`supabase_setup.sql`** (te lo entregué junto con esta guía), copia **todo** su contenido y pégalo en el editor.
4. Haz clic en **"Run"** (o Ctrl+Enter).
5. Debe aparecer "Success. No rows returned". Esto crea las tablas `categories` y `products`, y las reglas de seguridad (RLS) que permiten que cualquiera vea el catálogo, pero solo tú puedas modificarlo.

---

## Paso 3 — Crear el espacio para las fotos (Storage)

1. En el menú izquierdo, entra a **Storage**.
2. Haz clic en **"New bucket"**.
3. Nombre exacto: `product-photos`
4. Activa la opción **"Public bucket"** = **SI** (para que las fotos se vean en tu web sin restricciones).
5. Haz clic en **"Create bucket"**.
6. Vuelve a **SQL Editor > New query**, y esta vez pega y ejecuta **solo la segunda parte** de `supabase_setup.sql` (el bloque que empieza en el comentario "IMPORTANTE: después de correr este script..." con las 4 políticas `product photos`). Si ya ejecutaste el archivo completo en el Paso 2, este bloque ya quedó aplicado y puedes saltar este paso.

---

## Paso 4 — Crear tu usuario de acceso al CMS

Este es el correo/contraseña con el que vas a entrar al gestor de contenido (no es tu cuenta de Supabase, es un usuario aparte solo para el CMS).

1. En el menú izquierdo, entra a **Authentication > Users**.
2. Haz clic en **"Add user"** → **"Create new user"**.
3. Escribe el correo y la contraseña que tú quieras usar para entrar al CMS (por ejemplo, tu correo de Pandora Boutique).
4. Desactiva la opción de enviar email de confirmación si aparece, o marca **"Auto Confirm User"** para que quede activo de inmediato.
5. Haz clic en **"Create user"**.

Guarda ese correo y contraseña — son los que vas a usar cada vez que entres a `cms/index.html`.

---

## Paso 5 — Copiar tus llaves de conexión

1. En el menú izquierdo, entra a **Settings** (ícono de engranaje) **> API**.
2. Copia estos 2 valores:
   - **Project URL** (algo como `https://abcdefghijk.supabase.co`)
   - **Project API keys > anon / public** (una llave larga que empieza con `eyJ...`)

Estos 2 datos **no son secretos delicados**: están protegidos por las reglas de seguridad que ya configuraste en el Paso 2, así que es normal y seguro que vivan dentro del código de tu página web.

---

## Paso 6 — Pegar tus llaves en los 2 archivos

Tienes dos opciones:

**Opción A (más fácil): mándame los 2 valores del Paso 5 y yo los coloco por ti** en `index.html` y `cms/index.html`, listo para que subas los archivos.

**Opción B: hazlo tú mismo** — abre cada archivo con un editor de texto (Bloc de notas, VS Code, etc.) y busca estas 2 líneas cerca del final del código (con Ctrl+F busca `PASTE_YOUR_SUPABASE`):

```js
const SUPABASE_URL = "PASTE_YOUR_SUPABASE_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY_HERE";
```

Reemplázalas por tus valores reales, por ejemplo:

```js
const SUPABASE_URL = "https://abcdefghijk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
```

Debes hacer este cambio **en los 2 archivos**: `index.html` y `cms/index.html`.

---

## Paso 7 — Importar tu catálogo actual (una sola vez)

1. Abre `cms/index.html` en tu navegador (una vez ya tenga tus llaves pegadas).
2. Inicia sesión con el correo y contraseña que creaste en el Paso 4.
3. Como la base de datos está vacía, vas a ver un botón **"Importar catálogo actual"**. Haz clic en él.
4. Espera mientras se suben tus 46 productos con sus fotos (puede tardar 1-2 minutos). No cierres la pestaña durante el proceso.
5. Cuando termine, verás el mensaje de importación exitosa y tu catálogo completo en la tabla de productos.

Este botón solo aparece **una vez** (mientras la base de datos esté vacía), así que no hay riesgo de duplicar productos por accidente.

---

## Paso 8 — Subir los archivos a tu sitio web (GitHub Pages)

Una vez que todo funcione en tu computadora, sube los 2 archivos actualizados (`index.html` y `cms/index.html`) a tu repositorio de GitHub igual que hiciste antes, para que los cambios se publiquen en `https://proxycoke.github.io/pandoraWeb/`.

El CMS (`cms/index.html`) también puede vivir en el mismo repositorio, por ejemplo en la dirección `https://proxycoke.github.io/pandoraWeb/cms/` — así podrás entrar a administrar tu catálogo desde cualquier computador o celular con solo tu correo y contraseña.

---

## Uso diario, de ahora en adelante

- Para **agregar, editar o eliminar productos y categorías** (incluyendo la sección "Importaciones" que mencionaste): entra a `cms/index.html`, inicia sesión, y usa los botones de la interfaz. Los cambios se reflejan en la web principal apenas la recarguen tus clientes.
- Las fotos que subas se optimizan automáticamente para pesar poco y que tu web cargue rápido.
- La web principal (`index.html`) nunca necesita que la edites a mano de nuevo.

---

## ¿Qué pasa con `admin.html`?

Ese archivo fue una primera versión del gestor de contenido que funcionaba descargando y subiendo el archivo `index.html` manualmente. Ahora que tienes `cms/index.html` conectado a una base de datos real, **ya no lo necesitas** — puedes dejarlo de lado o eliminarlo cuando quieras. `cms/index.html` es tu herramienta oficial de aquí en adelante.

---

¿Dudas en cualquier paso? Mándame lo que veas en pantalla (o los 2 valores del Paso 5) y te ayudo a terminarlo.
