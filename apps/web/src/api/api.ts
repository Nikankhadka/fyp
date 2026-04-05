import { localServer } from '@/configs/constant'

export const api = typeof window === 'undefined' ? localServer : '/backend'
