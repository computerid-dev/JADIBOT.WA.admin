const { supabaseAdmin } = require('../lib/supabase');

module.exports = async (req, res) => {
  const key = req.headers['x-admin-key'];
  if (key !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Password admin salah' });
  }

  const { data: users } = await supabaseAdmin
    .from('users')
    .select('id, nama, email, status, created_at')
    .order('created_at', { ascending: false });

  return res.status(200).json({ users: users || [] });
};
