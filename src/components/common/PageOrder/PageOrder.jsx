import React from 'react';

import Header from '../../Header/Header';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import Footer from '../../Footer/Footer';


class PageOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

    }




    render(){


        return(
            <div>
                <Header background = {('gori.jpg')} miniTitle='Оплата' title='Сведение о заказе' text='Мой Казахстан – это самая дорогая, важная, драгоценная, горячо любимая страна. Это Родина моя…' />
                <OrderConfirmation orderNumber='5' email='muxa_1995.95@inbox.ru' name='Рахим Набиев' roomHotel='Aray Travel Agency' data='03.09.2018' roomLux='Premium Luxe' people='2 взрослых' mobile='+7 775 991 91 00' paid='42000' />
                <Footer />
            </div>


        );
    }

}

export default PageOrder;

