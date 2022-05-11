import React, {useContext} from 'react';
import cls from './CatalogPage.module.scss'
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import {FooterPanel} from "../../Components/FooterPanel";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {CatalogList} from "./Components/CatalogList/CatalogList";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {Navigate} from "react-router-dom";

const CatalogPage = () => {
    const {auth} = useContext(AuthContext)

    if (!auth) {
        return <Navigate to="/auth" replace />
    }

    return (
        <div className={cls.catalogPage}>
            <HeaderProfilePage avatar={false} />
            <LayoutContent>
                <h2>Торговые центры</h2>
                <CatalogList />
            </LayoutContent>
            <FooterPanel active={'catalog'} />
        </div>
    );
};

export {CatalogPage};
