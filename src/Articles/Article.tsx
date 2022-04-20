import { Row } from 'antd'
import { useEffect } from 'react'
import {IContentModel} from "../Interfaces/interface";
import {CustomCards} from "../Layouts/CustomCards";
import {useLocalStorage} from "../index";



export const Articles = () => {
    const { content } = useLocalStorage()
    useEffect(() => {
        return () => {
            console.log('>>UnMount')
        }
    })

    return (
        <Row gutter={ 16 }>
            {
                content.map((content: IContentModel) => {
                    return (
                        <CustomCards key={ content.id } content={ content } />
                    )
                })
            }
        </Row>
    )
}