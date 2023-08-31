import './Header.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Services from './Services';
import Contactus from './Contactus';



export default function Header() {
    return (
        <div>
            <div className='header'>
                <h1>نبذه عن إنفيستك</h1>
                <p>
                    منصة الكترونية تتيح للطلاب عرض مشاريعهم الجامعية للشركات الراغبة في الاستفادة منها أو التعاون مع الطلاب في تطوير المشاريع
                </p>

                <button>عرض المشاريع<FontAwesomeIcon className="icon" icon={faChevronLeft}  />  </button>
                <Services/>
                <Contactus/>

            </div>
        </div>
    )
}