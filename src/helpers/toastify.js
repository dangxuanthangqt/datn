import { toast } from 'react-toastify'

export const toastDefault = ( msg ) => toast( msg )

export const toastWarning = ( msg ) => toast.warn( msg )

export const toastSuccess = ( msg ) => toast.success( msg )
