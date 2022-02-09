const routes = [
  {
    path: "/",
    name: "home",
    mate: {
      title: "主页"
    },
    component: () => import(/* webpackChunkName: "Home" */ "../views/account.vue")
  },
  {
    path: "/expenses",
    name: "expenses",
    mate: {
      title: "消费"
    },
    component: () =>
      import(/* webpackChunkName: "expenses" */ "../views/expenses.vue")
  },
  {
    path: "/coffers",
    name: "coffers",
    mate: {
      title: "金库"
    },
    component: () =>
      import(/* webpackChunkName: "coffers" */ "../views/coffers.vue")
  },
  {
    path: "/liabilities",
    name: "liabilities",
    mate: {
      title: "负债"
    },
    component: () =>
      import(/* webpackChunkName: "liabilities" */ "../views/liabilities.vue")
  },
  {
    path: "/fund",
    name: "fund",
    mate: {
      title: "资产"
    },
    component: () => import(/* webpackChunkName: "fund" */ "../views/fund.vue")
  },
  {
    path: "/account",
    name: "account",
    mate: {
      title: "账户管理"
    },
    component: () => import(/* webpackChunkName: "fund" */ "../views/account.vue")
  }
];
export default routes;
