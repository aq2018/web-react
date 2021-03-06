import mockjs from 'mockjs';

export default {
  'GET /api/permit/allTree': mockjs.mock({
    success: true,
    code: null,
    msg: null,
    time: '2018-10-29 10:42:57',
    data: [
      {
        id: 1,
        permitName: '管理面板',
        permitType: 'menu',
        parentId: null,
        permitCode: 'manage',
        url: null,
        createTime: '2019-03-23T20:38:02.000+0000',
        updateTime: null,
        icon: null,
        sort: '1',
        available: '1',
        permissionList: [
          {
            id: 2,
            permitName: '用户管理',
            permitType: 'menu',
            parentId: 1,
            permitCode: 'user',
            url: null,
            createTime: '2019-03-23T20:38:29.000+0000',
            updateTime: null,
            icon: null,
            sort: '2',
            available: '1',
            permissionList: [
              {
                id: 3,
                permitName: '用户管理-添加',
                permitType: 'button',
                parentId: 2,
                permitCode: 'user-add',
                url: '/manage/user/add',
                createTime: '2019-03-23T20:39:00.000+0000',
                updateTime: null,
                icon: null,
                sort: '1.1',
                available: '1',
                permissionList: [],
              },
            ],
          },
          {
            id: 4,
            permitName: '角色管理',
            permitType: 'menu',
            parentId: 1,
            permitCode: 'role',
            url: null,
            createTime: '2019-03-23T20:44:51.000+0000',
            updateTime: null,
            icon: null,
            sort: '2',
            available: '1',
            permissionList: [
              {
                id: 5,
                permitName: '角色管理-添加',
                permitType: 'button',
                parentId: 4,
                permitCode: 'role-add',
                url: '/manage/role/add',
                createTime: '2019-03-23T20:45:23.000+0000',
                updateTime: null,
                icon: null,
                sort: '2.1',
                available: '1',
                permissionList: [],
              },
            ],
          },
          {
            id: 6,
            permitName: '机构管理',
            permitType: 'menu',
            parentId: 1,
            permitCode: 'organ',
            url: null,
            createTime: '2019-03-24T12:39:12.000+0000',
            updateTime: null,
            icon: null,
            sort: '3',
            available: '1',
            permissionList: [
              {
                id: 7,
                permitName: '研发部',
                permitType: 'menu',
                parentId: 6,
                permitCode: 'organ-dev',
                url: null,
                createTime: '2019-03-24T12:39:58.000+0000',
                updateTime: null,
                icon: null,
                sort: '1',
                available: '1',
                permissionList: [
                  {
                    id: 8,
                    permitName: '研发部-添加',
                    permitType: 'button',
                    parentId: 7,
                    permitCode: 'organ-dev-add',
                    url: '/manage/organ/dev/add',
                    createTime: '2019-03-24T12:41:30.000+0000',
                    updateTime: null,
                    icon: null,
                    sort: '1',
                    available: '1',
                    permissionList: [],
                  },
                  {
                    id: 10,
                    permitName: '研发部-查询',
                    permitType: 'button',
                    parentId: 7,
                    permitCode: 'organ-dev-select',
                    url: '/manage/organ/dev/select',
                    createTime: '2019-03-24T12:41:30.000+0000',
                    updateTime: null,
                    icon: null,
                    sort: '1',
                    available: '1',
                    permissionList: [],
                  },
                ],
              },
              {
                id: 9,
                permitName: '运维部',
                permitType: 'menu',
                parentId: 6,
                permitCode: 'organ-ops',
                url: null,
                createTime: '2019-03-24T12:45:05.000+0000',
                updateTime: null,
                icon: null,
                sort: '2',
                available: '1',
                permissionList: [],
              },
            ],
          },
        ],
      },
      {
        id: 17,
        permitName: '报表管理',
        permitType: 'menu',
        parentId: null,
        permitCode: 'reports',
        url: '/reports',
        createTime: '2019-04-11T20:56:25.000+0000',
        updateTime: null,
        icon: null,
        sort: null,
        available: null,
        permissionList: [],
      },
    ],
  }),
};
