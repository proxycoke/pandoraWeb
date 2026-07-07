-- ============================================================
-- Pandora Boutique — configuración de base de datos (Supabase)
-- Copia TODO este archivo y pégalo en: Supabase > SQL Editor > New query
-- Luego presiona "Run".
-- ============================================================

-- Tabla de categorías
create table if not exists categories (
  id text primary key,
  name text not null,
  icon text not null default '🛍️',
  color text not null default '#ec1e79',
  sort_order int not null default 0
);

-- Tabla de productos
create table if not exists products (
  id bigint generated always as identity primary key,
  name text not null,
  category_id text references categories(id) on delete restrict,
  price numeric(10,2) not null default 0,
  wholesale text default '',
  sold boolean not null default false,
  photo_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Activar seguridad a nivel de fila (RLS)
alter table categories enable row level security;
alter table products enable row level security;

-- Lectura pública (para que la web principal muestre el catálogo sin login)
create policy "public read categories" on categories for select using (true);
create policy "public read products" on products for select using (true);

-- Escritura solo para usuarios autenticados (el panel de administración)
create policy "auth insert categories" on categories for insert with check (auth.role() = 'authenticated');
create policy "auth update categories" on categories for update using (auth.role() = 'authenticated');
create policy "auth delete categories" on categories for delete using (auth.role() = 'authenticated');

create policy "auth insert products" on products for insert with check (auth.role() = 'authenticated');
create policy "auth update products" on products for update using (auth.role() = 'authenticated');
create policy "auth delete products" on products for delete using (auth.role() = 'authenticated');

-- ============================================================
-- IMPORTANTE: después de correr este script, crea el bucket de
-- fotos manualmente en Supabase:
--   Storage -> New bucket -> nombre: product-photos -> Public bucket: SI
-- Luego vuelve al SQL Editor y corre el bloque de abajo para dar
-- permisos de lectura pública y escritura solo a usuarios logueados.
-- ============================================================

create policy "public read product photos"
  on storage.objects for select
  using (bucket_id = 'product-photos');

create policy "auth upload product photos"
  on storage.objects for insert
  with check (bucket_id = 'product-photos' and auth.role() = 'authenticated');

create policy "auth update product photos"
  on storage.objects for update
  using (bucket_id = 'product-photos' and auth.role() = 'authenticated');

create policy "auth delete product photos"
  on storage.objects for delete
  using (bucket_id = 'product-photos' and auth.role() = 'authenticated');
