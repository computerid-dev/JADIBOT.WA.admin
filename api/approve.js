const { supabaseAdmin } = require('../lib/supabase');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const key = req.headers['x-admin-key'];
  if (key !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Password admin salah' });
  }

  const { user_id, action } = req.body || {};
  if (!user_id || !['approved', 'rejected'].includes(action)) {
    return res.status(400).json({ error: 'Data tidak valid' });
  }

  await supabaseAdmin.from('users').update({ status: action }).eq('id', user_id);

  return res.status(200).json({ ok: true });
};
