-- ============================================================
-- Pandora Boutique — MIGRACIÓN: agregar el carrusel editable
-- Copia TODO este archivo y pégalo en: Supabase > SQL Editor > New query
-- Luego presiona "Run". Es seguro de ejecutar una sola vez sobre
-- tu base de datos ya existente (no borra ni modifica categorías
-- ni productos).
-- ============================================================

create table if not exists hero_slides (
  id bigint generated always as identity primary key,
  title text not null,
  subtitle text default '',
  image_url text,
  bg_color text not null default '#5b1049',
  show_button boolean not null default true,
  button_text text default 'Ver catálogo',
  button_url text default 'categorias/',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table hero_slides enable row level security;

create policy "public read hero_slides" on hero_slides for select using (true);
create policy "auth insert hero_slides" on hero_slides for insert with check (auth.role() = 'authenticated');
create policy "auth update hero_slides" on hero_slides for update using (auth.role() = 'authenticated');
create policy "auth delete hero_slides" on hero_slides for delete using (auth.role() = 'authenticated');

-- No hace falta crear un bucket de fotos nuevo: las fotos del
-- carrusel se guardan en el mismo bucket "product-photos" que ya
-- creaste, solo que en una subcarpeta distinta (hero/).
