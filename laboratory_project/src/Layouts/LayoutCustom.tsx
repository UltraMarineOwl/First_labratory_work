import { Layout, Menu, Breadcrumb } from 'antd';
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';
import {Routes} from "../Routes/Routes";
import {Link} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const Informations = [
    {
        id: 1,
        title: "This is title number 1",
        description: "This is description"
    },
    {
        id: 2,
        title: "This is title number 2",
        description: "This is description"
    },
    {
        id: 3,
        title: "This is title number 3",
        description: "This is description"
    },
    {
        id: 4,
        title: "This is title number 4",
        description: "This is description"
    },
    {
        id: 5,
        title: "This is title number 5",
        description: "This is description"
    },


]


export const LayoutCustom = () =>{
    return(
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {Routes.map((route) => {
                            return <Menu.Item key={ route.id } ><Link to={route.path}>{route.name}</Link></Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>ThisNode</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content">
                        {   Informations.map((el, index) =>{
                            return(
                                <ContentLayout key={el.id} title={el.title} description={el.description} />
                            )
                        })
                        }
                    </div>
                    <Forms></Forms>
                </Content>
            </Layout>,
        </>
    )
}

// export const Layout1 = () =>{
//     return(
//         <>
//             <div>test</div>
//         </>
//     )
// }