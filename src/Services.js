import React from 'react';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase ,faCoins ,faMessage } from '@fortawesome/free-solid-svg-icons';




export default function Services() {

    return (
        <div>
            <div className='title'>
                <h2>خدماتنا</h2>
            </div>
            <div className='cards'>


                <div className='card'>
                    <div className='box1'>
                        <FontAwesomeIcon className='icon1' icon={faBriefcase} />
                    </div>
                    <h5>توفير فرص العمل</h5>
                    <p className='describe'>تساعد المنصه أصحاب المشاريع على إيجاد فرص عمل لتطوير مشاريعهم ودعم نموها</p>
                </div>
                <div className='card'>
                    <div className='box1'>
                    <FontAwesomeIcon className='icon1' icon={faCoins} />                    </div>
                    <h5>تحقيق الربح المالي</h5>
                    <p className='describe'>يمكن لأصحاب المشاريع تحقيق عوائد ماليه من خلال عرض مشاريعهم</p>
                </div>
                <div className='card'>
                    <div className='box1'>
                    <FontAwesomeIcon className='icon1' icon={faMessage} />                                       </div>
                    <h5>تسهيل التواصل</h5>
                    <p className='describe'>تتيح المنصة التواصل بين أصحاب المشاريع و المستثمرين مما يسهل عملية الاستثمار في المشاريع</p>
                </div>

            </div>
        </div>
    );
}