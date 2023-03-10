import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const truckInfo = {
    id: 'truckInfo',
    title: 'ข้อมูลรถ',
    type: 'group',
    children: [
        {
            id: 'truckInfo.info',
            title: 'ข้อมูลรถ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default truckInfo;
