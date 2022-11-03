import Image from 'next/image';
import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default function Test() {
  return (
<>
<div>asdsa</div>
    <CircularProgressbarWithChildren value={66}>
      <Image width={40} height={40}   style={{marginTop: -5 }} src="/user1.jpg" alt="doge" />
      <div style={{ fontSize: 12, marginTop: -5 }}>
        <strong>66%</strong> mate
      </div>
    </CircularProgressbarWithChildren>
</>
  )
}
