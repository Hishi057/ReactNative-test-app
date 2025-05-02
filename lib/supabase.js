import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ynawtkjqikpnmfxonfyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYXd0a2pxaWtwbm1meG9uZnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjgzNDcsImV4cCI6MjA2MDgwNDM0N30.4ihR_yLxbdBqimdYsdiA84PYdTOhbzN7emVl36Y0dp0';
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

//events could not be found within the project or in these directories:
//node_modules/@supabase/realtime-js/n