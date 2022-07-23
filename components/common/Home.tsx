import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainText}>
        <h1>mibot </h1>
      </div>
      <div className={styles.subText}>
          <h3>심리 상담 음성 채팅봇 미봇입니다 </h3>
      </div>
      
  <section className='wrapper'>
      <article className='product1'>
      
        <h2>내 아바타 생성해보기</h2>
        <p><a className="btn btn-secondary" href="/pages/menu/services/gan">내 아바타 만들어보기 &raquo;</a></p>
        
      </article>
      <article className='product2'>
        <h2>나의 음성 입력해보기</h2>
        <p><a className="btn btn-secondary" href="/pages/menu/services/voice">음성인식 이용해보기 &raquo;</a></p>
       
        
      </article>
      <article className='product3'>
        <h2>미봇 채팅과 대화해보기</h2>
        <p><a className="btn btn-secondary" href="/pages/menu/services/chatbot">챗봇 이용해보기 &raquo;</a></p>
       
        
      </article>

      <article className='product4'>
        <h2>Mibot에 회원가입 하기</h2>
        <p><a className="btn btn-secondary" href="/pages/auth/join">mibot 회원가입</a></p>
        
      </article>

  </section>
  
</div>
    
    
  )
}
 