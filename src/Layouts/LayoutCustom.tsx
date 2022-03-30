import { Layout, Menu, Breadcrumb } from 'antd';
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';
import {Routes} from "../Routes/Routes";
import {Link} from "react-router-dom";
import { CustomCards } from './CustomCards'
import {IContentModel} from "../Interfaces/interface";
import { useLocalStorage } from "../index";
import {observer} from "mobx-react-lite";

const { Header, Content, Footer } = Layout;

export const LayoutCustom = observer(() =>{
    const { content } = useLocalStorage()
    return(
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                    {/*    {Routes.map((route) => {*/}
                    {/*        return <Menu.Item key={ route.id } ><Link to={route.path}>{route.name}</Link></Menu.Item>;*/}
                    {/*    })}*/}
                    {/*</Menu>*/}
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>ThisNode</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content">
                        {   content.map((content: IContentModel) =>{
                            return(
                                <CustomCards key={content.id} content = { content } />
                            )
                        })
                        }
                    </div>
                    <Forms></Forms>
                </Content>
            </Layout>,
        </>
    )
})

// export const Layout1 = () =>{
//     return(
//         <>
//             <div>test</div>
//         </>
//     )
// }