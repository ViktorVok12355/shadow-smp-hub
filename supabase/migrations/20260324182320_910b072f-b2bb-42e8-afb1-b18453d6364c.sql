ALTER TABLE public.profiles ADD COLUMN name text;

INSERT INTO storage.buckets (id, name, public)
VALUES ('logs', 'logs', false);

CREATE POLICY "Authenticated users can upload logs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'logs');

CREATE POLICY "Authenticated users can read logs"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'logs');