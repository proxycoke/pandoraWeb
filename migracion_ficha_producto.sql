-- ============================================================
-- Pandora Boutique — MIGRACIÓN: campos para la ficha/página
-- individual de cada producto (descripción, especificaciones,
-- precio por mayor en tabla y fotos adicionales de la galería).
-- Copia TODO este archivo y pégalo en: Supabase > SQL Editor > New query
-- Luego presiona "Run". Es seguro de ejecutar una sola vez sobre
-- tu base de datos ya existente (no borra ni modifica productos,
-- categorías ni el carrusel; solo agrega columnas nuevas con
-- valores por defecto vacíos).
-- ============================================================

alter table products add column if not exists description text not null default '';
alter table products add column if not exists specifications jsonb not null default '[]'::jsonb;
alter table products add column if not exists wholesale_tiers jsonb not null default '[]'::jsonb;
alter table products add column if not exists gallery_photos jsonb not null default '[]'::jsonb;

-- No hace falta crear un bucket de fotos nuevo: las fotos adicionales
-- de la galería se guardan en el mismo bucket "product-photos" que ya
-- tienes, en la misma carpeta "products/" que las fotos principales.
