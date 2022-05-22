import { useState,useEffect } from 'react';

const InfoBlock = (result) => {
    const [logo,setLogo] = useState("/img/man.webp");
    const [ready,setReady] = useState(false);
    const [name,setName] = useState('Введите имя');
    const [surname,setSurname] = useState('Введите фамилию');
    const [status,setStatus] = useState('Необзязательное поле');
    const [info,setInfo] = useState('');
    const CheckAvatar = (event) => {
        let reader = new FileReader();
        reader.onloadend = function () {
            let i = new Image;
            i.src = reader.result;
            i.onload = () => {
                const canvas = document.createElement('canvas');
                const maxWidth = 300;
                const scaleSize = maxWidth / i.width;
                canvas.width = maxWidth;
                canvas.height = i.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(i,0,0,canvas.width,canvas.height)
                const srcEnc = ctx.canvas.toDataURL("image/webp");
                setInfo({...info,id:result.item.id,avatar:srcEnc})
            }
        };
        reader.readAsDataURL(event);
    }
    useEffect(()=>{
        if(localStorage.getItem('check_massive')) {
            let s = JSON.parse(localStorage.getItem('check_massive'))[result.item.id];
            if(s) {
                if(s.avatar) setLogo(s.avatar);
                if(s.name) setName(s.name);
                if(s.surname) setSurname(s.surname);
                if(s.status) setStatus(s.status);
                setReady(true);
            }
            console.log("Result is",result.item.id)
        }
    },[]);
    useEffect(()=>{
        if(localStorage.getItem('check_massive')&&JSON.parse(localStorage.getItem('check_massive'))[result.item.id]) {
            setInfo(JSON.parse(localStorage.getItem('check_massive'))[result.item.id]);
            console.log(info);
        }
        else {
            setInfo('');
        }
    },[]);
    useEffect(()=>{
        if(info==='') return;
        else {
            // console.log('check_massive - ',JSON.stringify(info));
            result.change({info})
        };
    },[info]);
    return(
        <div className="main__block_interface_menu c-m">
                    <div className="main__block_menu_close">
                        <svg onClick={()=>{result.remove(result.item)}} id="close" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26">
                            <path id="Контур_24" data-name="Контур 24" d="M0,0H26V26H0Z" fill="none" />
                            <path id="Контур_25" data-name="Контур 25" d="M20.256,5.756a1.147,1.147,0,0,0-1.624,0L13,11.376,7.368,5.744A1.148,1.148,0,0,0,5.744,7.368L11.376,13,5.744,18.632a1.148,1.148,0,0,0,1.624,1.624L13,14.624l5.632,5.632a1.148,1.148,0,0,0,1.624-1.624L14.624,13l5.632-5.632A1.154,1.154,0,0,0,20.256,5.756Z" transform="translate(0 0)" fill="#aaa" />
                        </svg>
                    </div>
                    <div className="main__block_interface_menu_c">
                        <h1>Заполнение информации {result.item.name}</h1>
                    </div>
                    <div className="main__block_interface_menu_c_info_block">
                        <div className="main__block_interface_menu_c_info_block_avatar">
                            <label className="main__block_interface_menu_logo_icon">
                                <img width={46} height={46} loading="lazy" className="main__block_interface_menu_logo_icon_img" src={"/img/add_a_photo.svg" } alt="icon" />
                            </label>
                            <input className='main__block_interface_menu_logo_icon_img_hide' name="logoPreview" accept="image/*" type='file' onClick={()=>{console.log(result.item.id)}} onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));setReady(true);CheckAvatar(event.target.files[0]);}} />
                            <img width={135} height={135} loading="lazy" className="main__block_interface_menu_logo_img" src={logo} alt="logo" />
                            <p className="sub_content">Выберите фото</p>
                        </div>
                        <div className="main__block_interface_menu_c_info_block_text">
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={name} onChange={(e)=>{setInfo({...info,name:e.target.value})}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Имя</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={surname} onChange={(e)=>{setInfo({...info,surname:e.target.value})}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Фамилия</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={status} onChange={(e)=>{setInfo({...info,status:e.target.value})}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Должность</span>
                            </div>
                        </div>
                    </div>
                    <div className="main__block_interface_menu_c_end">
                        <div className=''>
                            <span className='logo'>* Выберите фото и заполните все необходимые информации пожалуйста</span>
                        </div>
                    </div>
                </div>
    )
}

export default InfoBlock;