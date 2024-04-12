import React from "react";
import Button from '../Button/Button'
import { useTelegram } from "../../hooks/useTelegram";
const Header = (props) =>{
    // const tg = window.Telegram.WebApp;
    // const onClose = () =>{
    //     tg.close();
    //  }
    const {user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}></Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
}

export default Header;