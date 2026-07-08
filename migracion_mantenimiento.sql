-- ============================================================
-- Pandora Boutique — Modo mantenimiento
-- Copia TODO este archivo y pégalo en: Supabase > SQL Editor > New query
-- Luego presiona "Run".
-- ============================================================

-- Tabla de un solo renglón (id = 1 siempre) que guarda si la web
-- está en mantenimiento y el mensaje que se muestra a los clientes.
create table if not exists site_settings (
  id int primary key default 1,
  maintenance_enabled boolean not null default false,
  maintenance_message text not null default 'Nos encontramos en mantenimiento. ¡Estamos volviendo a la brevedad!',
  updated_at timestamptz not null default now(),
  constraint site_settings_single_row check (id = 1)
);

-- Crea el único renglón si todavía no existe (no duplica si ya corriste esto antes)
insert into site_settings (id) values (1) on conflict (id) do nothing;

-- Seguridad a nivel de fila (RLS)
alter table site_settings enable row level security;

-- Lectura pública (para que la web principal sepa si debe mostrar la pantalla de mantenimiento)
create policy "public read site_settings" on site_settings for select using (true);

-- Escritura solo para usuarios autenticados (el panel de administración / CMS)
create policy "auth update site_settings" on site_settings for update using (auth.role() = 'authenticated');
