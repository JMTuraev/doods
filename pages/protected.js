import React from 'react'
import {useSession} from 'next-auth/react'
export default function Admin() {
    const {status}=useSession({
        required:true,
        onUnauthenticated(){
            alert('go Back')
        }
    })
    if(status==='loading'){
        return 'loading or not authenticated...'
    }
  return (
    <div>
        user is logged in    
    </div>
  )
}

