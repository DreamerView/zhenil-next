import Link from "next/link";
import Image from "next/image";
import ux from "/translate/ux/action";
import useTranslateText from "/start/translate";

const UserIndex = (result) => {
    const lang = useTranslateText();
    const {login} = result.item;
    return(<>
    {login===true?
    <Link href="/" prefetch={false}>
              <a>
                <div className="header__action_image anim_hover">
                  <Image title={`Avatar`} layout='fill' className="header__action_avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp" alt="avatar" />
                </div>
              </a>
            </Link>:<Link href="/signin" prefetch={false}><div className="header__action_login_button anim_hover">{ux['login'][lang]}</div></Link>
    }
    </>)
};

export default UserIndex;