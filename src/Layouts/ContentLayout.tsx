import { Card, Col, Row } from 'antd';
import './ContentLayoutC.css';


//Нужно использовать props


export const ContentLayout = ({ title, description}: {title: string, description: string}) => {
     console.log('>>props', title)

    // const {title, description } = props.props

    return (
        <>
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={title} bordered={false}>
                        {description}
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    )
};