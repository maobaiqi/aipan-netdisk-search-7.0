import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 针对 Vercel 环境的优化配置
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,  // Vercel 无状态环境需关闭
    autoRefreshToken: false,
    detectSessionInUrl: false // 防止 Vercel 重定向问题
  }
})
