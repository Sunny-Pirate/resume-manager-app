import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faPhone} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

type ContactItem = {
    key: IconDefinition
    label: string
    value: string
}
const Contacts = () => {

    const items: ContactItem[] = [
        {key: faPhone, label: "Phone", value: ""},
        {key: faWhatsapp, label: "Whatsapp", value: ""},
        {key: faEnvelopeSquare, label: "Email", value: ""},
        {key: faGithub, label: "Github", value: ""},
        {key: faLinkedin, label: "Linkedin", value: ""},
    ]

    return <address className='container'>
        <ul className='list'>
            {items.map((value, index) => {
                return <li className='item' key={index}>
                    <div className='tooltip'>
                        {value.label}
                    </div>
                    <FontAwesomeIcon icon={value.key} size={"1x"} width={24}/>
                    {value.value}
                </li>
            })}
        </ul>
    </address>
};

export default Contacts;
