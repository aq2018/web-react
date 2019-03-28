/*
export default {
  '/api/auth_routes': {
    '/form/advanced-form': { authority: ['admin', 'user'] },
  },
};
*/

function getRoute(req, res) {
  return res.json({
    "success": true,
    "code": "200",
    "msg": "成功",
    "time": "2018-10-23 16:06:17",
    "routes": [{
      "path": "/workflow-design",
      "name": "工单设计",
      "icon": "share-alt"
    }, {
      "id": 1,
      "path": "/manage",
      "name": "系统管理",
      "icon": "dashboard",
      "sort": 1,
      "routes": [{
        "id": 2,
        "path": "/manage/part",
        "name": "机构管理",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 3,
        "path": "/manage/user",
        "name": "用户管理",
        "icon": null,
        "sort": 2,
        "routes": null
      }, {
        "id": 4,
        "path": "/manage/role",
        "name": "角色管理",
        "icon": null,
        "sort": 3,
        "routes": null
      }, {
        "id": 5,
        "path": "/manage/approve-authority",
        "name": "审批权限管理",
        "icon": null,
        "sort": 4,
        "routes": null
      }, {
        "id": 6,
        "path": "/manage/approve-param",
        "name": "审批参数配置",
        "icon": null,
        "sort": 5,
        "routes": null
      }, {
        "id": 7,
        "path": "/manage/approve-group",
        "name": "审批小组管理",
        "icon": null,
        "sort": 6,
        "routes": null
      }, {
        "id": 8,
        "path": "/manage/questionnaire",
        "name": "电核问卷管理",
        "icon": null,
        "sort": 7,
        "routes": [{
          "id": 9,
          "path": "/manage/questionnaire/library",
          "name": "电核问题库",
          "icon": null,
          "sort": 1,
          "routes": null
        }, {
          "id": 10,
          "path": "/manage/questionnaire/mould",
          "name": "电核问卷模板",
          "icon": null,
          "sort": 2,
          "routes": null
        }]
      }, {
        "id": 11,
        "path": "/manage/dict",
        "name": "数据字典管理",
        "icon": null,
        "sort": 8,
        "routes": null
      }, {
        "id": 12,
        "path": "/manage/busilog",
        "name": "操作日志",
        "icon": null,
        "sort": 9,
        "routes": null
      }, {
        "id": 13,
        "path": "/manage/applyLog",
        "name": "案件日志",
        "icon": null,
        "sort": 10,
        "routes": null
      },
        {
          "id": 14,
          "path": "/manage/productManage",
          "name": "产品配置",
          "icon": null,
          "sort": 11,
          "routes": null
        }]
    }, {
      "id": 15,
      "path": "/workplat-dhg",
      "name": "工作台-电核岗",
      "icon": "calendar",
      "sort": 2,
      "routes": [{
        "id": 16,
        "path": "/workplat-dhg/daiban",
        "name": "待办任务",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 17,
        "path": "/workplat-dhg/yiban",
        "name": "已办任务",
        "icon": null,
        "sort": 2,
        "routes": null
      }]
    }, {
      "id": 18,
      "path": "/workplat-spg",
      "name": "工作台-审批岗",
      "icon": "calendar",
      "sort": 3,
      "routes": [{
        "id": 19,
        "path": "/workplat-spg/daiban",
        "name": "待办任务",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 20,
        "path": "/workplat-spg/yiban",
        "name": "已办任务",
        "icon": null,
        "sort": 2,
        "routes": null
      }]
    }, {
      "id": 21,
      "path": "/workplat-zz",
      "name": "工作台-组长",
      "icon": "calendar",
      "sort": 4,
      "routes": [{
        "id": 22,
        "path": "/workplat-zz/daiban",
        "name": "团队待办",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 23,
        "path": "/workplat-zz/yiban",
        "name": "团队已办",
        "icon": null,
        "sort": 2,
        "routes": null
      }]
    }, {
      "id": 24,
      "path": "/workplat-yqspr",
      "name": "工作台-有权审批人",
      "icon": "calendar",
      "sort": 5,
      "routes": [{
        "id": 26,
        "path": "/workplat-yqspr/daiban",
        "name": "待办任务",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 25,
        "path": "/workplat-yqspr/yiban",
        "name": "已办任务",
        "icon": null,
        "sort": 2,
        "routes": null
      }]
    }, {
      "id": 26,
      "path": "/workplat-xsjl",
      "name": "工作台-信审经理",
      "icon": "calendar",
      "sort": 6,
      "routes": [{
        "id": 29,
        "path": "/workplat-xsjl/taskpool",
        "name": "任务池",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 27,
        "path": "/workplat-xsjl/exception",
        "name": "异常队列",
        "icon": null,
        "sort": 2,
        "routes": null
      }, {
        "id": 28,
        "path": "/workplat-xsjl/multquery",
        "name": "综合查询",
        "icon": null,
        "sort": 3,
        "routes": null
      },

        {
          "id": 29,
          "path": "/workplat-xsjl/eventquery",
          "name": "事件查询",
          "icon": null,
          "sort": 4,
          "routes": null
        }, {
          "id": 30,
          "path": "/workplat-xsjl/td/credit/yiban",
          "name": "授信已办",
          "icon": null,
          "sort": 5,
          "routes": null
        }, {
          "id": 31,
          "path": "/workplat-xsjl/td/loan/yiban",
          "name": "用信已办",
          "icon": null,
          "sort": 6,
          "routes": null
        }]
    }, {
      "id": 32,
      "path": "/workplat-fqzg",
      "name": "工作台-反欺诈岗",
      "icon": "calendar",
      "sort": 7,
      "routes": [{
        "id": 33,
        "path": "/workplat-fqzg/daiban",
        "name": "待办任务",
        "icon": null,
        "sort": 1,
        "routes": null
      }, {
        "id": 34,
        "path": "/workplat-fqzg/yiban",
        "name": "已办任务",
        "icon": null,
        "sort": 2,
        "routes": null
      }]
    },
      {
        "id": 35,
        "path": "/workplat-fqzzg",
        "name": "工作台-反欺诈主管",
        "icon": "calendar",
        "sort": 8,
        "routes": [{
          "id": 36,
          "path": "/workplat-fqzzg/td/daiban",
          "name": "团队待办",
          "icon": null,
          "sort": 1,
          "routes": null
        }, {
          "id": 37,
          "path": "/workplat-fqzzg/td/yiban",
          "name": "团队已办",
          "icon": null,
          "sort": 2,
          "routes": null
        }]
      },
      {
        "id": 38,
        "path": "/reports",
        "name": "报表管理",
        "icon": "line-chart",
        "sort": 9,
        "routes": [{
          "id": 39,
          "path": "/reports/product",
          "name": "实时报表-产品",
          "icon": null,
          "sort": 1,
          "routes": null
        }, {
          "id": 40,
          "path": "/reports/employ",
          "name": "实时报表-员工",
          "icon": null,
          "sort": 2,
          "routes": null
        }, {
          "id": 41,
          "path": "/reports/staffPerformance",
          "name": "员工绩效统计表",
          "icon": null,
          "sort": 3,
          "routes": null
        }, {
          "id": 42,
          "path": "/reports/departmentPerformance",
          "name": "部门绩效统计表",
          "icon": null,
          "sort": 4,
          "routes": null
        }, {
          "id": 43,
          "path": "/reports/phoneCheckOperation",
          "name": "电核岗运营报表",
          "icon": null,
          "sort": 5,
          "routes": null
        }, {
          "id": 44,
          "path": "/reports/approvalOperation",
          "name": "审批岗运营报表",
          "icon": null,
          "sort": 6,
          "routes": null
        }, {
          "id": 45,
          "path": "/reports/antiFraud",
          "name": "反欺诈统计表",
          "icon": null,
          "sort": 6,
          "routes": null
        }, {
          "id": 46,
          "path": "/reports/antiFraudDetail",
          "name": "反欺诈详情统计表",
          "icon": null,
          "sort": 7,
          "routes": null
        }
        ]
      }
    ],
    "fns": [],
    'all': [
      '/manage',
      '/manage/part',
      '/manage/user',
      '/manage/role',
      '/manage/approve-authority',
      '/manage/approve-param',
      '/manage/approve-group',
      '/manage/questionnaire',
      '/manage/questionnaire/library',
      '/manage/questionnaire/mould',
      '/manage/dict',
      '/manage/busilog',
      '/manage/applyLog',
      '/workplat-fqzg',
      '/workplat-fqzg/daiban',
      '/workplat-fqzg/yiban',
      '/workplat-dhg',
      '/workplat-dhg/daiban',
      '/workplat-dhg/yiban',
      '/workplat-spg',
      '/workplat-spg/daiban',
      '/workplat-spg/yiban',
      '/workplat-zz',
      '/workplat-zz/daiban',
      '/workplat-zz/yiban',
      '/workplat-yqspr',
      '/workplat-yqspr/daiban',
      '/workplat-yqspr/yiban',
      '/workplat-xsjl',
      '/workplat-xsjl/taskpool',
      '/workplat-xsjl/exception',
      '/workplat-xsjl/multquery',
      '/workplat-xsjl/eventquery',
      '/reports',
      '/reports/product',
      '/reports/employ',
      '/reports/staffPerformance',
      '/reports/departmentPerformance',
      '/reports/phoneCheckOperation',
      '/reports/approvalOperation',
      '/reports/antiFraud',
      '/workplat-fqzzg/td/daiban',
      '/reports/antiFraudDetail',
      "/manage/productManage"
    ]
  });
}
export default {
  '/api/permit/my': getRoute
};
