import InheritageFile from "./inheritageFile";
import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
    {
        title: 'First name',
        dataIndex: 'firstname',
    },
    {
        title: 'Second name',
        dataIndex: 'secondname',
    },
    {
        title: 'Info',
        dataIndex: 'info',
    },
    {
        title: 'Favorite Distribution',
        dataIndex: 'favDist',
    },
    {
        title: 'Username',
        dataIndex: 'username',
    },
    {
        title: 'Key',
        dataIndex: 'key',
    },
    {
        title: 'Watched Mr.Robot',
        dataIndex: 'w_mrrobot',
    },
];


const data: InheritageFile[] =[
    {
        id: '1',
        firstname: 'John',
        secondname: 'Doe',
        info: 'I am the white hat',
        favDist: 'Debian',
        username: 'Cocktail',
        key: 4357,
        w_mrrobot: 'Yes'
    },
    {
        id: '2',
        firstname: 'Constantin',
        secondname: 'Libetsky',
        info: 'BlackHat',
        favDist: 'ArchLinux',
        username: 'NewWorldOrder',
        key: 21467867,
        w_mrrobot: 'No'
    },
]

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: InheritageFile[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: InheritageFile) => ({
        disabled: record.firstname === 'Disabled User', // Column configuration not to be checked
        name: record.firstname,
    }),
};

export const Inher = () => {

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return(
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default Inher;