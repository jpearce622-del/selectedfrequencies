-- Show notes tool submissions
-- Run this in your Supabase SQL editor to set up rate-limiting + result storage.

create table if not exists show_notes_submissions (
  id              uuid primary key default gen_random_uuid(),
  email_hash      text not null,            -- sha256(lower(trim(email))) — never store raw email
  ip_address      text not null default '',
  status          text not null default 'processing'
                    check (status in ('processing', 'complete', 'failed')),
  transcript      text,
  show_notes      text,
  error_message   text,
  created_at      timestamptz not null default now(),
  completed_at    timestamptz
);

-- One free generation per email (only enforced on completed rows)
create unique index if not exists idx_show_notes_email_complete
  on show_notes_submissions (email_hash)
  where status = 'complete';

-- IP rate-limiting lookup (3 attempts per IP per 24h)
create index if not exists idx_show_notes_ip_created
  on show_notes_submissions (ip_address, created_at);

-- RLS: only the service role (server-side) can read/write
alter table show_notes_submissions enable row level security;

-- No public access — all reads/writes go through the service role key
create policy "service_role_only" on show_notes_submissions
  using (false)
  with check (false);
