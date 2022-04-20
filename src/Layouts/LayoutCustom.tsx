import { Layout, Breadcrumb } from 'antd';
import './LayoutC.css';
import { Forms } from '../Form/Forms';
import {Router} from "../Routes/Routes";
import {observer} from "mobx-react-lite";
import Inher from "../Interfaces/inher";
import {FooterNow} from "./FooterFor";
import {Route, Routes} from "react-router-dom";
import {Articles} from "../Articles/Article";

const { Content } = Layout;


export const LayoutCustom = observer(() =>{
    return(
        <>
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>ThisNode</Breadcrumb.Item>
                    </Breadcrumb>

                    <Routes>
                        <Route path={ Router[0].path } />
                        <Route path={ Router[1].path } element={ <Articles /> } />
                        <Route path={ Router[2].path } element={ <Inher /> } />
                        <Route path={ Router[3].path } element={ <Forms /> } />
                    </Routes>

                    {/*<Inher></Inher>*/}
                    {/*<Forms></Forms>*/}
                    <FooterNow></FooterNow>
                </Content>
            </Layout>,
        </>
    )
})
