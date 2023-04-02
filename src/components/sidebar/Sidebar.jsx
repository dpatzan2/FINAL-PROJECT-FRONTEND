import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const SidebarMenu = () => {

    const [expanded, setExpanded] = useState(false); 

    function toggleExpanded() {
        setExpanded(!expanded); 
    }

    function logout() {
        // Lógica para el logout
    }
    return (
        <nav className={`${styles.sidebar} ${expanded ? styles.expanded : ''}`} onClick={toggleExpanded}>
      <ul>
        <li><a href="/" className={styles['initial-state']}><i className="fa-light fa-right-from-bracket" width={"260px"}></i><span>Inicio</span></a></li>
        <li><a href="/acerca-de" className={styles['initial-state']}><i className="fas fa-info-circle"></i><span>Acerca de</span></a></li>
        <li><a href="/contacto" className={styles['initial-state']}><i className="fas fa-envelope"></i><span>Contacto</span></a></li>
      </ul>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles['button-logout']}`} onClick={logout}><i className="fas fa-sign-out-alt"></i><span>Logout</span></button>
        <button className={`${styles.button} ${styles['button-expand']}`} onClick={toggleExpanded}><i className={`fas ${expanded ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>{expanded ? 'Cerrar' : 'Expandir'}</button>
      </div>
    </nav>
    )
}
