
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';

const LandingNavbar = () => {
    return (
        <nav className="lp-navbar">
            <div className="container">
                <Link href="/" className="logo">
                    <Image
                        src="/logo.svg"
                        alt={`${company.name} Logo`}
                        width={140}
                        height={45}
                        style={{ height: 'auto', width: 'auto', maxHeight: '45px' }}
                    />
                </Link>

                <div className="d-flex align-items-center gap-3">
                    <a href={company.contact.whatsapp.link} target="_blank" rel="noopener noreferrer" className="lp-btn-whatsapp d-none d-md-inline-flex">
                        <i className="fab fa-whatsapp" style={{ fontSize: '1.2em' }}></i>
                        Falar no WhatsApp
                    </a>
                    <Link href="/contato" className="lp-btn-cta">
                        Solicitar Orçamento
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default LandingNavbar;
