import type { Session, SupabaseClient, User } from '@supabase/supabase-js'
import type { Database } from './database.types.ts' // import generated types

declare global {
	namespace App {
	}
}

declare module '@fortawesome/free-solid-svg-icons/index.es' {
	export * from '@fortawesome/free-solid-svg-icons';
}

export { }
